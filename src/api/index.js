import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const SERVER_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * fetchBaseQuery which contain access token for createAPI function in all page components
 */
export const Api = {
    fetchBaseQuery: fetchBaseQuery({
        baseUrl: SERVER_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().authentication.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
        }
    })
};
