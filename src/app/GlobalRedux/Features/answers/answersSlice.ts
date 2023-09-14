'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//interfaces
import { IQuestionAnswer } from '@/utils/interfaces/types'

//initialState
const initialState = {
    answers: [] as IQuestionAnswer[],
    answers_short: [] as IQuestionAnswer[],
    answersId: -1,
    answersId_short: -1,
}

//slice
export const answersSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        setReduxAnswers: (state, action: PayloadAction<IQuestionAnswer[]>) => {
            state.answers = action.payload
        },
        setReduxAnswersShort: (state, action: PayloadAction<IQuestionAnswer[]>) => {
            state.answers_short = action.payload
        },
        setReduxAnswersId: (state, action: PayloadAction<number>) => {
            state.answersId = action.payload
        },
        setReduxAnswersIdShort: (state, action: PayloadAction<number>) => {
            state.answersId_short = action.payload
        },
    }
})

//actions
export const { setReduxAnswers, setReduxAnswersShort, setReduxAnswersId, setReduxAnswersIdShort } = answersSlice.actions

//selectors
export const selectAnswers = (state: any) => state.answers.answers
export const selectAnswersShort = (state: any) => state.answers.answers_short
export const selectAnswersId = (state: any) => state.answers.answersId
export const selectAnswersIdShort = (state: any) => state.answers.answersId_short

//reducer
export default answersSlice.reducer