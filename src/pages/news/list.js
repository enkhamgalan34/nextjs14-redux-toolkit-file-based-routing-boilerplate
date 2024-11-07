import React, {useState} from "react";
import {Inter} from "next/font/google";
import {useRouter} from "next/router";

import {useNewsListQuery} from "@/api/community/community";
const inter = Inter({subsets: ["latin"]});

export default function NewsList() {
    const router = useRouter();
    const [options, setOptions] = useState({page: 0, size: 10, searchWrd: ""});
    const {data, isLoading} = useNewsListQuery(new URLSearchParams({...options}).toString());
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <h1>News list page</h1>
            {isLoading ? (
                <h1>Loading....</h1>
            ) : (
                data?.content?.map((item, i) => (
                    <p key={i} className={'cursor-pointer bg-blue-500 text-white px-4 py-2 rounded'}
                       onClick={() => router.push(`/news/${item.seq}`)}>{item?.title}</p>
                ))
            )}
            <a
                onClick={() => router.push("/")}
                className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
            >
                Home
            </a>
        </main>
    );
}
