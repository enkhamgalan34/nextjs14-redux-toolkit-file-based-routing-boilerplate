import React, {useEffect} from "react";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useGetUserInfoQuery } from "@/api/auth/auth";
import {useSelector} from "@/store";

const inter = Inter({ subsets: ["latin"] });
const SERVER_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Mypage() {
    const router = useRouter();
    const { data, isLoading } = useGetUserInfoQuery();
    const token = useSelector((state) => state.authentication.token);

    useEffect(() => {
        if (!token) {
            router.push("/login").then(null);
        }
    }, [router]);

    if (isLoading) return <p>Loading...</p>;

    return (
        <main
            className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
        >
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <a
                    onClick={() => router.push("/")}
                    className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Home
                </a>
            </div>
            <div className="z-10 max-w-5xl mt-[30px] w-full justify-between font-mono text-sm lg:flex flex-col">
                <h1>Mypage</h1>
                <img src={SERVER_URL + data?.content?.imageAtch[0]?.url} className={'max-w-1xl max-h-1xl w-[100px] h-[auto]'} alt={''}/>
                <h1>{data?.content?.fullname || '-'}</h1>
                <h1>{data?.content?.memberTypeCd || '-'}</h1>
                <h1>{data?.content?.mobile || '-'}</h1>
            </div>
        </main>
    );
};
