import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { useGetMenusQuery } from "@/api/main/main";
import {useDispatch, useSelector} from "@/store";
import {removeToken} from "@/store/authSlice";
import {useGetUserInfoQuery} from "@api/auth/auth";

const inter = Inter({ subsets: ["latin"] });

const SERVER_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Home() {
    const router = useRouter();
    const { data, isLoading } = useGetMenusQuery();
    const token = useSelector((state) => state.authentication.token);
    const [isMounted, setIsMounted] = useState(false);
    const dispatch = useDispatch();
    const { data: userInfo, isLoading: isUserInfoLoading } = useGetUserInfoQuery(undefined, {
        skip: !token,
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleLogout = () => {
        if (confirm("Do you want to logout?")) {
            dispatch(removeToken());
            router.push("/").then(null);
        }
    };

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <a
                    onClick={() => router.push("/news/list")}
                    className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
                >
                    News list
                </a>
                <a
                    onClick={() => router.push("/notice/list")}
                    className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Notice list
                </a>
                {isMounted && token ? (
                    <>
                        <img src={SERVER_URL + userInfo?.content?.imageAtch[0]?.url} className={'max-w-1xl max-h-1xl w-[100px] h-[100px]'} alt={''}/>
                        <a
                            onClick={() => router.push("/auth/mypage")}
                            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            My page
                        </a>
                        <a
                            onClick={() => {
                                handleLogout();
                            }}
                            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            logout
                        </a>
                    </>
                ) : (
                    <a
                        onClick={() => router.push("/login")}
                        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Login
                    </a>
                )}
            </div>

            <h1>Hello World!!! {process.env.NEXT_PUBLIC_API_BASE_URL}</h1>
        </main>
    );
}
