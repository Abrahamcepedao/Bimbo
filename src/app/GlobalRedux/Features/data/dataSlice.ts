'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//initialState
const initialState = {
    company: ''
}

//slice
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setReduxCompany: (state, action: PayloadAction<string>) => {
            state.company = action.payload
        },
    }
})

//actions
export const { setReduxCompany } = dataSlice.actions

//selectors
export const selectCompany = (state: any) => state.data.company

//reducer
export default dataSlice.reducer