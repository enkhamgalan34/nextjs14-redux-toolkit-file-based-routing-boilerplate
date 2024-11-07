import React, {useState} from "react";
import {useRouter} from "next/router";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});
import {useNoticeListQuery} from "@/api/community/community";

export default function NoticeList() {
    const router = useRouter();
    const [options, setOptions] = useState({page: 0, size: 10, searchWrd: ""});
    const {data, isLoading} = useNoticeListQuery(new URLSearchParams({...options}).toString());

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <h1>Notice list page</h1>
            {isLoading ? (
                <h1>Loading....</h1>
            ) : (
                data?.content?.map((item, i) => (
                    <p key={i} className={'cursor-pointer bg-blue-500 text-white px-4 py-2 rounded'}
                       onClick={() => router.push(`/notice/${item.seq}`)}>{item?.title}</p>
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
