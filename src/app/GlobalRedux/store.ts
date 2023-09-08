'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import answersSlice from './Features/answers/answersSlice';
import dataSlice from './Features/data/dataSlice';


const rootReducer = combineReducers({
    answers: answersSlice,
    data: dataSlice
})

export const store = configureStore({
    reducer: rootReducer
})