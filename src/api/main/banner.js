import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from '../index';
import { URL } from '@/api/Urls';

export const BannerApi = createApi({
    reducerPath: 'BannerApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Banners'],
    endpoints: (build) => ({
        getBanners: build.query({
            query: (params) => `${URL.BANNER_LIST}?${params}`,
            providesTags: ['LIST']
        }),
        getBanner: build.query({
            query: (params) => `${URL.BANNER_LIST}/${params}`,
            providesTags: ['LIST']
        }),
        createBanner: build.mutation({
            query: (body) => ({
                url: `${URL.BANNER_CREATE}`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['LIST']
        }),
        updateBanner: build.mutation({
            query: (body) => ({
                url: `${URL.BANNER_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        }),
        deleteBanner: build.mutation({
            query: (body) => ({
                url: `${URL.BANNER_DELETE}/${body}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['LIST']
        })
    })
});

export const { useGetBannersQuery, useCreateBannerMutation, useUpdateBannerMutation, useDeleteBannerMutation, useGetBannerQuery } =
    BannerApi;
