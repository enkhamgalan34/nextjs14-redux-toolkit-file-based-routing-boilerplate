import { combineReducers } from 'redux';
import { useDispatch as useDispatchBase, useSelector as useSelectorBase } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Reducer from './reducer';
import { Middlewares } from './middlewares';
import AuthenticationReducer from './authSlice';
/**
 * Redux store
 */
const store = configureStore({
    reducer: combineReducers({
        authentication: AuthenticationReducer,
        ...Reducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Middlewares)
});

export default store;
export const useDispatch = () => useDispatchBase();
export const useSelector = (selector) => useSelectorBase(selector);
