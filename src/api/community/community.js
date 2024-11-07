import { createApi } from "@reduxjs/toolkit/query/react";
import { Api } from "../index";
import { URL } from "@/store/urls";

export const CommunityApi = createApi({
    reducerPath: "CommunityApi",
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ["Community"],
    endpoints: (build) => ({
        noticeList: build.query({
            query: (params) => `${URL.NOTICE_LIST}?${params}`,
            providesTags: ["NOTICE_LIST"]
        }),
        noticeDetail: build.query({
            query: (params) => `${URL.NOTICE_DETAIL}?${params}`,
            providesTags: ["NOTICE_DETAIL"]
        }),
        newsList: build.query({
            query: (params) => `${URL.NEWS_LIST}?${params}`,
            providesTags: ["NEWS_LIST"]
        }),
        newsDetail: build.query({
            query: (params) => `${URL.NEWS_DETAIL}?${params}`,
            providesTags: ["NEWS_DETAIL"]
        }),
        faqList: build.query({
            query: (params) => `${URL.FAQ_LIST}?${params}`,
            providesTags: ["FAQ_LIST"]
        }),
        reviewList: build.query({
            query: (params) => `${URL.REVIEW_LIST}?${params}`,
            providesTags: ["REVIEW_LIST"]
        }),
        reviewDetail: build.query({
            query: (params) => `${URL.REVIEW_DETAIL}?${params}`,
            providesTags: ["REVIEW_DETAIL"]
        }),
        createReviewBoard: build.mutation({
            query: (body) => ({
                url: `${URL.REVIEW_CREATE}`,
                method: "POST",
                body: body
            }),
            invalidatesTags: ["REVIEW_LIST", "REVIEW_DETAIL"]
        }),
        deleteReviewBoard: build.mutation({
            query: (body) => ({
                url: `${URL.REVIEW_DELETE}`,
                method: "POST",
                body: body
            }),
            invalidatesTags: ["REVIEW_LIST", "REVIEW_DETAIL"]
        }),
        qnaList: build.query({
            query: (params) => `${URL.QNA_LIST}?${params}`,
            providesTags: ["QNA_LIST"]
        }),
        dynamicPageData: build.query({
            query: (params) => `${URL.DYNAMIC_PAGE}/${params}`,
            providesTags: ["PAGE"]
        }),
        qnaDetail: build.query({
            query: (params) => `${URL.QNA_DETAIL}?${params}`,
            providesTags: ["QNA_DETAIL"]
        }),
        qnaCreate: build.mutation({
            query: (body) => ({
                url: `${URL.QNA_CREATE}`,
                method: "POST",
                body: body
            }),
            invalidatesTags: ["QNA_LIST"]
        }),
        qnaDelete: build.mutation({
            query: (body) => ({
                url: `${URL.QNA_DELETE}`,
                method: "POST",
                body: body
            }),
            invalidatesTags: ["QNA_LIST", "QNA_DETAIL"]
        })
    })
});

export const {
    useNoticeListQuery,
    useNoticeDetailQuery,
    useFaqListQuery,
    useDynamicPageDataQuery,
    useQnaListQuery,
    useQnaCreateMutation,
    useQnaDeleteMutation,
    useQnaDetailQuery,
    useReviewListQuery,
    useReviewDetailQuery,
    useNewsListQuery,
    useNewsDetailQuery,
    useCreateReviewBoardMutation,
    useDeleteReviewBoardMutation
} = CommunityApi;
