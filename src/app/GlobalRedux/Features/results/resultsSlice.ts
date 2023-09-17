'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//interfaces
import { IResults } from '@/utils/interfaces/types'

//initialState
const initialState = {
    isAnalisis: false,
    hasHistory: false,
    shortResults: [] as IResults[],
    profoundResults: [] as IResults[],
}

//slice
export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        setReduxIsAnalisis: (state, action: PayloadAction<boolean>) => {
            state.isAnalisis = action.payload
        },
        setReduxHasHistory: (state, action: PayloadAction<boolean>) => {
            state.hasHistory = action.payload
        },
        setReduxShortResults: (state, action: PayloadAction<IResults[]>) => {
            state.shortResults = action.payload
        },
        setReduxProfoundResults: (state, action: PayloadAction<IResults[]>) => {
            state.profoundResults = action.payload
        },
    }
})

//actions
export const { setReduxIsAnalisis, setReduxHasHistory, setReduxShortResults, setReduxProfoundResults } = resultsSlice.actions

//selectors
export const selectIsAnalisis = (state: any) => state.results.isAnalisis
export const selectHasHistory = (state: any) => state.results.hasHistory
export const selectShortResults = (state: any) => state.results.shortResults
export const selectProfoundResults = (state: any) => state.results.profoundResults

//reducer
export default resultsSlice.reducer