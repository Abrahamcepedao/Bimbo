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
import { useDispatch, useSelector } from 'react-redux'
import { setReduxAnswers, setReduxAnswersId } from '@/app/GlobalRedux/Features/answers/answersSlice';
import { selectSelectedStkhs, setReduxSelectedStkhs } from '@/app/GlobalRedux/Features/data/dataSlice'

//constants
import stkhs from '@/utils/constants/stkhs'

//interfaces
import { IStkh, IQuestionAnswer } from '@/utils/interfaces/types'

const Form = () =>  {
    //redux
    const dispatch = useDispatch()
    const reduxSelectedstkhs: string[] = useSelector(selectSelectedStkhs)

    //router
    const { push } = useRouter()

    //useState - stkhs
    const [selectedStkhs, setSelectedStkhs] = useState<IStkh[]>([])

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
        verifySelectedStkhs()
    }, [])

    //verify selected stkhs
    const verifySelectedStkhs = () => {
        if(reduxSelectedstkhs.length === 0) {
            let temp: string[] = JSON.parse(localStorage.getItem('selectedStkhs') as string) || []
            console.log(temp)
            if(temp.length !== 0) {
                dispatch(setReduxSelectedStkhs(temp))
                setupAnswers(temp)
            } else push('/')
        } else setupAnswers(reduxSelectedstkhs)
    }

    //setup form
    const setupAnswers = (arr: string[]) => {
        //set answer
        console.log(arr)
        let temp: IQuestionAnswer[] = []
        stkhs.filter((el) => arr.includes(el.id)).forEach((stkh: IStkh) => {
            stkh.questions.forEach((question) => {
                let num = Math.floor(Math.random() * 3)
                temp.push({
                    stkhId: stkh.id,
                    questionId: question.id,
                    dimId: question.dim,
                    answerId: question.answers[num].id,
                    value: question.answers[num].value
                })
            })
        })
        console.log(temp)
        setSelectedStkhs(stkhs.filter((el) => arr.includes(el.id)))
        setAnswers(temp)
        setLoading(false)
        setDisabled(false)
    }

    //handle next
    const handleNext = () => {
        if(activeStep === stkhs.length - 1) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                dispatch(setReduxAnswers(answers))
                dispatch(setReduxAnswersId(Date.now()))
                localStorage.setItem('answers', JSON.stringify(answers))
                localStorage.setItem('answers_id', Date.now().toString())
                push('/auto/profound/results')
        } else {
            verifyDisabled(answers, stkhs[activeStep+1].id)
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
    };

    //handle back
    const handleBack = () => {
        verifyDisabled(answers, stkhs[activeStep-1].id)
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    //handle answer change
    const handleAnswerChange = (e: FormEvent<HTMLInputElement>, question_id: string) => {
        let temp = [...answers]
        let i = temp.findIndex((item) => item.questionId === question_id)
        temp[i].answerId = e.currentTarget.value
        let question_index = stkhs[activeStep].questions.findIndex((item) => item.id === question_id)
        temp[i].value = stkhs[activeStep].questions[question_index].answers.find((item) => item.id === e.currentTarget.value)?.value || 0

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
                        {selectedStkhs.map((stkh, index) => (
                            <Step key={index}>
                                <StepLabel><p className='bold text-xl opacity-90 text-white_primary'>{stkh.name} ({stkh.id})</p></StepLabel>
                                <StepContent>
                                    <div>
                                        {stkh.questions.map((question, i) => (
                                            <div key={i} className='mb-4'>
                                                {/* <div className='question_lbl'>
                                                    <p className='bold'>{index+1}.{i+1} {question.label}</p>
                                                </div> */}
                                                <div>
                                                    <p className='question'>{question.question}</p>
                                                </div>
                                                <RadioInp answer={answers[getAnswerIndex(question.id)]} answers={question.answers} onChange={handleAnswerChange}/>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='grid grid-cols-2 gap-2 max-w-sm'>
                                        {activeStep !== 0 && (<Button text='Anterior' onClick={handleBack} variant='cancel'/>)}
                                        <Button onClick={handleNext} text={activeStep !== selectedStkhs.length -1 ? 'Siguiente' : 'Terminar'} disabled={disabled} variant='primary'/>
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