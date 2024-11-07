import { createApi } from '@reduxjs/toolkit/query/react';
import { Api } from './index';
import { URL } from '@/store/urls';

export const CommonCodeFilterApi = createApi({
    reducerPath: 'CommonCodeFilterApi',
    baseQuery: Api.fetchBaseQuery,
    tagTypes: ['CommonCodes'],
    endpoints: (build) => ({
        getCommonFilterCode: build.query({
            query: (codeGroup) => `${URL.COMMON_CODE_FILTER_LIST}?codegroup=${codeGroup}`,
            providesTags: ['LIST']
        })
    })
});

export const { useGetCommonFilterCodeQuery } = CommonCodeFilterApi;
