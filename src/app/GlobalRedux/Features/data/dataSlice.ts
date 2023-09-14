'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//interfaces
import { IChecklistItem } from '@/utils/interfaces/types'

//initialState
const initialState = {
    company: '',
    checklist: [] as IChecklistItem[],
    selectedStkhs: [] as string[]
}

//slice
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setReduxCompany: (state, action: PayloadAction<string>) => {
            state.company = action.payload
        },
        setReduxChecklist: (state, action: PayloadAction<IChecklistItem[]>) => {
            state.checklist = action.payload
        },
        setReduxSelectedStkhs: (state, action: PayloadAction<string[]>) => {
            state.selectedStkhs = action.payload
        }
    }
})

//actions
export const { setReduxCompany, setReduxChecklist, setReduxSelectedStkhs } = dataSlice.actions

//selectors
export const selectCompany = (state: any) => state.data.company
export const selectChecklist = (state: any) => state.data.checklist
export const selectSelectedStkhs = (state: any) => state.data.selectedStkhs

//reducer
export default dataSlice.reducer