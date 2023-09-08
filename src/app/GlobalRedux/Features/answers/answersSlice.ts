'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//interfaces
import { IQuestionAnswer } from '@/utils/interfaces/types'

//initialState
const initialState = {
    answers: [] as IQuestionAnswer[]
}

//slice
export const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        setReduxAnswers: (state, action: PayloadAction<IQuestionAnswer[]>) => {
            state.answers = action.payload
        },
    }
})

//actions
export const { setReduxAnswers } = answersSlice.actions

//selectors
export const selectAnswers = (state: any) => state.answers.answers

//reducer
export default answersSlice.reducer