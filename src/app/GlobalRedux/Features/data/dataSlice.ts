'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//interfaces
import { IChecklistItem, IUser } from '@/utils/interfaces/types'

//initialState
const initialState = {
    company: '',
    user: null as IUser | null,
    checklist: [] as IChecklistItem[],
    selectedStkhs: [] as string[],
}

//slice
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setReduxCompany: (state, action: PayloadAction<string>) => {
            state.company = action.payload
        },
        setReduxUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },
        setReduxChecklist: (state, action: PayloadAction<IChecklistItem[]>) => {
            state.checklist = action.payload
        },
        setReduxSelectedStkhs: (state, action: PayloadAction<string[]>) => {
            state.selectedStkhs = action.payload
        },
    }
})

//actions
export const { setReduxCompany, setReduxUser, setReduxChecklist, setReduxSelectedStkhs } = dataSlice.actions

//selectors
export const selectCompany = (state: any) => state.data.company
export const selectUser = (state: any) => state.data.user
export const selectChecklist = (state: any) => state.data.checklist
export const selectSelectedStkhs = (state: any) => state.data.selectedStkhs

//reducer
export default dataSlice.reducer