import React from "react";
import {Inter} from "next/font/google";
import {useRouter} from "next/router";
import {useNewsDetailQuery} from "@/api/community/community";

const inter = Inter({subsets: ["latin"]});

export default function NoticeDetail() {
    const router = useRouter();
    const {id} = router.query;

    const {data, isLoading} = useNewsDetailQuery('seq=' + id, {
        skip: !id,
    });

    if (isLoading) return <p>Loading...</p>;
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <h1>Notice Detail Page</h1>
            <p>{data?.content?.title || '-'}</p>
            <div dangerouslySetInnerHTML={{__html: data?.content?.description || '-'}}/>
            <a
                onClick={() => router.push("/news/list")}
                className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded"
            >
                To list
            </a>
        </main>
    );
}
