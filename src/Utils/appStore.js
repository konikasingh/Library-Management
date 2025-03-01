// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import bookdataReducer from './bookdataSlice';

export const store = configureStore({
    reducer: {
        bookdata: bookdataReducer,
    },
});