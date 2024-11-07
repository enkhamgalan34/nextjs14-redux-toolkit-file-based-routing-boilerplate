import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from '../index';
import { URL } from '@/store/urls';

export const AuthApi = createApi({
    reducerPath: 'AuthApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['Auth'],
    endpoints: (build) => ({
        login: build.mutation({
            query: (data) => ({
                url: URL.LOGIN,
                method: 'POST',
                body: data
            }),
            invalidatesTags : ['INFO']
        }),
        getUserInfo: build.query({
            query: () => `${URL.USER_INFO}`,
            providesTags: ['INFO']
        }),
        updateUser: build.mutation({
            query: (body) => ({
                url: `${URL.USER_UPDATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['INFO']
        }),
        createUser: build.mutation({
            query: (body) => ({
                url: `${URL.USER_CREATE}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['INFO']
        }),
        userNameCheck: build.mutation({
            query: (body) => ({
                url: `${URL.USER_NAME_CHECK}/` + body,
                method: 'POST'
            }),
            invalidatesTags: ['INFO']
        }),
        userVerifyTokenSend: build.mutation({
            query: (body) => ({
                url: `${URL.EMAIL_VERIFICATION_SEND}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['INFO']
        }),
        verifyToken: build.mutation({
            query: (body) => ({
                url: `${URL.EMAIL_VERIFY}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['INFO']
        }),
        forgotId: build.mutation({
            query: (body) => ({
                url: `${URL.FORGOT_ID}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['INFO']
        }),
        forgotPassword: build.mutation({
            query: (body) => ({
                url: `${URL.FORGOT_PASSWORD}`,
                method: 'POST',
                body: body
            }),
            invalidatesTags: ['INFO']
        })
    })
});

export const { useLoginMutation, useGetUserInfoQuery, useUpdateUserMutation, useCreateUserMutation,
    useUserNameCheckMutation, useUserVerifyTokenSendMutation, useVerifyTokenMutation,
    useForgotIdMutation, useForgotPasswordMutation } =
    AuthApi;
