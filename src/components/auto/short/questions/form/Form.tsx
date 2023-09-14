'use client'

//react
import { useState, useEffect, FormEvent } from 'react'

//next
import { useRouter } from 'next/navigation'

//components
import RadioInp from '@/components/reusable/inputs/RadioInp'
import Button from '../../../../reusable/buttons/Button'

//mui
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

//redux
import { useDispatch } from 'react-redux'
import { setReduxAnswers } from '@/app/GlobalRedux/Features/answers/answersSlice';

//constants
import stkhs_short from '@/utils/constants/stkh_short'

//interfaces
import { IStkh, IQuestionAnswer } from '@/utils/interfaces/types'

const Form = () =>  {
    //redux
    const dispatch = useDispatch()

    //router
    const { push } = useRouter()

    //useState - stepper
    const [activeStep, setActiveStep] = useState(0);

    //useState - loading
    const [loading, setLoading] = useState<boolean>(true)

    //useState - answers
    const [answers, setAnswers] = useState<IQuestionAnswer[]>([])

    //useState - disabled
    const [disabled, setDisabled] = useState<boolean>(true)

    //useEffect - set form data
    useEffect(() => {
        setupAnswers()
    }, [])

    //setup form
    const setupAnswers = () => {
        //set answer
        let temp: IQuestionAnswer[] = []
        stkhs_short.forEach((stkh: IStkh) => {
            stkh.questions.forEach((question) => {
                let num = Math.floor(Math.random() * 3)
                temp.push({
                    stkhId: stkh.id,
                    questionId: question.id,
                    dimId: question.dim || '',
                    answerId: question.answers[num].id,
                    value: question.answers[num].value
                })
            })
        })
        setAnswers(temp)
        setLoading(false)
        setDisabled(false)
    }

    //verify form

    //handle next
    const handleNext = () => {
        if(activeStep === stkhs_short.length - 1) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                dispatch(setReduxAnswers(answers))
                localStorage.setItem('answers_short', JSON.stringify(answers))
                push('/auto/short/results')
        } else {
            verifyDisabled(answers, stkhs_short[activeStep+1].id)
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
    };

    //handle back
    const handleBack = () => {
        verifyDisabled(answers, stkhs_short[activeStep-1].id)
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    //handle answer change
    const handleAnswerChange = (e: FormEvent<HTMLInputElement>, question_id: string) => {
        let temp = [...answers]
        let i = temp.findIndex((item) => item.questionId === question_id)
        temp[i].answerId = e.currentTarget.value
        let question_index = stkhs_short[activeStep].questions.findIndex((item) => item.id === question_id)
        temp[i].values = stkhs_short[activeStep].questions[question_index].answers.find((item) => item.id === e.currentTarget.value)?.values || null

        console.log(temp)
        setAnswers(temp)

        verifyDisabled(temp, temp[i].stkhId)
    }

    //verify disabled
    const verifyDisabled = (arr: IQuestionAnswer[], stkh: string) => {
        //verify form
        let disabled = false
        arr.forEach((item) => {
            if(item.stkhId === stkh && item.answerId === '') disabled = true
        })
        setDisabled(disabled)
    }

    //get answer index
    const getAnswerIndex = (question_id: string) => {
        return answers.findIndex((item) => item.questionId === question_id) 
    }

    return (
        <div className='max-w-2xl m-auto'>
            <div>
                {!loading && (
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {stkhs_short.map((stkh, index) => (
                            <Step key={index}>
                                <StepLabel><p className='bold text-xl opacity-90 text-white_primary'>{stkh.name} ({stkh.id})</p></StepLabel>
                                <StepContent>
                                    <div>
                                        {stkh.questions.map((question, i) => (
                                            <div key={i} className='mb-4'>
                                                {question.label && (
                                                    <div className='question_lbl'>
                                                        <p className='bold'>{index+1}.{i+1} {question.label}</p>
                                                    </div>
                                                )}
                                                <div>
                                                    <p className='question'>{question.question}</p>
                                                </div>
                                                <RadioInp answer={answers[getAnswerIndex(question.id)]} answers={question.answers} onChange={handleAnswerChange}/>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='grid grid-cols-2 gap-2 max-w-sm'>
                                        {activeStep !== 0 && (<Button text='Anterior' onClick={handleBack} variant='cancel'/>)}
                                        <Button onClick={handleNext} text={activeStep !== stkhs_short.length -1 ? 'Siguiente' : 'Terminar'} disabled={disabled} variant='primary'/>
                                    </div>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                )}
            </div>
        </div>
    )
}

export default Form 