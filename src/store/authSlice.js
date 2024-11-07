import { createSlice } from '@reduxjs/toolkit';
import ObjectUtil from '@/utils/ObjectUtil';

const getTokenFromLocalStorage = () => {
    if (typeof window === 'undefined') return null;
    const storedToken = localStorage.getItem('token');
    return storedToken ? ObjectUtil.safeJsonParse(storedToken) : null;
};

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        token: getTokenFromLocalStorage(),
    },
    reducers: {
        storeToken: (state, action) => {
            const token = action.payload || null;
            state.token = token;
            if (typeof window !== 'undefined') {
                if (token) {
                    localStorage.setItem('token', ObjectUtil.safeJsonStringify(token));
                } else {
                    localStorage.removeItem('token');
                }
            }
        },
        removeToken: (state) => {
            state.token = null;
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token');
            }
        }
    }
});

export const { storeToken, removeToken } = authenticationSlice.actions;
export default authenticationSlice.reducer;
