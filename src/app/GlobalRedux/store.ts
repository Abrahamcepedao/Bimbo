'use client'

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import answersSlice from './Features/answers/answersSlice';
import dataSlice from './Features/data/dataSlice';
import resultsSlice from './Features/results/resultsSlice';


const rootReducer = combineReducers({
    answers: answersSlice,
    data: dataSlice,
    results: resultsSlice,
})

export const store = configureStore({
    reducer: rootReducer
})