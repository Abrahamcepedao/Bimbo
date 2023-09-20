'use client'

//react
import { useState, useEffect, FormEvent } from 'react'

//next
import { useRouter } from 'next/navigation'

//components
import RadioInp from '@/components/reusable/inputs/RadioInp'
import Button from '../../../../reusable/buttons/Button'
import Loader from '@/components/reusable/loader/Loader'

//mui
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

//antd
import { message } from 'antd'

//redux
import { useDispatch, useSelector } from 'react-redux'
import { setReduxAnswersShort, setReduxAnswersIdShort } from '@/app/GlobalRedux/Features/answers/answersSlice';
import { selectHasHistory, setReduxHasHistory, selectShortResults, setReduxShortResults } from '@/app/GlobalRedux/Features/results/resultsSlice'
import { selectUser, setReduxUser } from '@/app/GlobalRedux/Features/data/dataSlice'

//constants
import stkhs_short from '@/utils/constants/stkh_short'

//interfaces
import { IStkh, IQuestionAnswer, IResults, ITable, ITableData, IUser } from '@/utils/interfaces/types'

const Form = () =>  {
    //redux
    const dispatch = useDispatch()
    const reduxResults: IResults[] = useSelector(selectShortResults)
    const reduxHasHistory: boolean = useSelector(selectHasHistory)
    const reduxUser: IUser | null = useSelector(selectUser)

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
        verifyUser()
        verifyHasHistory()
        verifyShortResults()
    }, [])

    //verify has history
    const verifyHasHistory = () => {
        if(!reduxHasHistory) {
            let temp: boolean = localStorage.getItem('has_history') === 'true' ? true : false
            if(temp) {
                dispatch(setReduxHasHistory(temp))
            }
        }
    }

    //verify short results
    const verifyShortResults = () => {
        if(reduxResults.length === 0) {
            let temp: IResults[] = JSON.parse(localStorage.getItem('short_results') as string) || []
            if(temp.length !== 0) {
                dispatch(setReduxShortResults(temp))
            }
        }
    }

    //verify user
    const verifyUser = () => {
        if (!reduxUser) {
            let temp: IUser | null = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null
            if (temp) {
                dispatch(setReduxUser(temp))
            } else push('/')
        } 
    }

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

    //handle next
    const handleNext = () => {
        if(activeStep === stkhs_short.length - 1) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                handleIncludeAnswers(answers)
        } else {
            verifyDisabled(answers, stkhs_short[activeStep+1].id)
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
    };

    //handle add results to database
    const handleAddResults = async (result: IResults) => {
        try {
            console.log(result)
            const res = await fetch('/api/results/short/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(result)
            })
            const data = await res.json()
            console.log(data)
            if(data.status === 200) {
                return message.success('Resultados guardados')
            }

            if(data.status === 400) {
                return message.success('Resultados ya guardados')
            }

            if(data.status === 500) {
                return message.error('Error al guardar los resultados')
            }
            

        } catch(err) {
            console.log(err)
        }
    }

    //handle include answers
    const handleIncludeAnswers = async (arr: IQuestionAnswer[]) => {
        let id: number = Date.now()
        if(reduxHasHistory) {
            setLoading(true)
            let temp: ITable = createTableData(arr)
            let temp2: IResults[] = [...reduxResults]
            let result = {
                id: reduxUser!.mail + '_' + id.toString(),
                mail: reduxUser!.mail,
                type: 'short',
                company_size: reduxUser!.company_size,
                sector: reduxUser!.sector,
                createdAt: id,
                results: temp
            }
            temp2.push(result)
            console.log(temp2)

            let res = await handleAddResults(result)
            if(res) {
                dispatch(setReduxShortResults(temp2))
                localStorage.setItem('short_results', JSON.stringify(temp2))
                localStorage.setItem('answers_short', JSON.stringify([]))
                localStorage.setItem('answers_id_short', '-1')
            } else {
                message.error('Ocurrió un error al guardar los resultados')
                return
            }
            setLoading(false)
        } else {
            localStorage.setItem('answers_short', JSON.stringify(answers))
            localStorage.setItem('answers_id_short', id.toString())
            dispatch(setReduxAnswersShort(answers))
            dispatch(setReduxAnswersIdShort(id))
        }
        
        push('/auto/short/results')
    }

    //create table data
    const createTableData = (arr: IQuestionAnswer[]) => {
        setLoading(true)
        let data: ITableData[] = []
        stkhs_short.forEach((stkh) => {
            data.push({
                stkh: stkh.name,
                riqueza: arr.filter((ans) => ans.stkhId === stkh.id && ans.dimId === 'riqueza')[0].value!,
                etica: arr.filter((ans) => ans.stkhId === stkh.id && ans.dimId === 'etica')[0].value!,
                calidad: arr.filter((ans) => ans.stkhId === stkh.id && ans.dimId === 'calidad')[0].value!,
                sum_total: arr.filter((ans) => ans.stkhId === stkh.id).reduce((a, b) => a + (b.value || 0), 0),
            })
        })
        let temp: ITable = {
            data,
            sum_etica: data.reduce((a, b) => a + (b.etica || 0), 0),
            sum_calidad: data.reduce((a, b) => a + (b.calidad || 0), 0),
            sum_riqueza: data.reduce((a, b) => a + (b.riqueza || 0), 0),
            sum_total: Math.round(data.reduce((a, b) => a + (b.sum_total || 0), 0) / 72 * 100),
        }
        console.log(temp)
        return temp
    }

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
                <p className='text'>Por favor contesta las preguntas de cada grupo de interés:</p>
                {!loading ? (
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {stkhs_short.map((stkh, index) => (
                            <Step key={index}>
                                <StepLabel><p className='bold text-xl opacity-90 text-white_primary'>{stkh.name} ({stkh.id}) {stkh.name === 'Medioambiente' ? ' - Cuidado de la casa común' : null}</p></StepLabel>
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
                ) : (
                    <div className='py-16'>
                        <Loader/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Form 