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

//redux
import { useDispatch, useSelector } from 'react-redux'
import { setReduxAnswers, setReduxAnswersId } from '@/app/GlobalRedux/Features/answers/answersSlice';
import { selectHasHistory, setReduxHasHistory, selectProfoundResults, setReduxProfoundResults } from '@/app/GlobalRedux/Features/results/resultsSlice'
import { selectSelectedStkhs, setReduxSelectedStkhs, selectUser, setReduxUser } from '@/app/GlobalRedux/Features/data/dataSlice'

//antd
import { message } from 'antd'

//constants
import stkhs from '@/utils/constants/stkhs'

//interfaces
import { IStkh, IQuestionAnswer, IUser, IResults, ITable, ITableData } from '@/utils/interfaces/types'

const Form = () =>  {
    //redux
    const dispatch = useDispatch()
    const reduxSelectedstkhs: string[] = useSelector(selectSelectedStkhs)
    const reduxResults: IResults[] = useSelector(selectProfoundResults)
    const reduxHasHistory: boolean = useSelector(selectHasHistory)
    const reduxUser: IUser | null = useSelector(selectUser)

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
        verifyUser()
        verifyHasHistory()
        verifyProfoundResults()
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

    //verify profound results
    const verifyProfoundResults = () => {
        if(reduxResults.length === 0) {
            let temp: IResults[] = JSON.parse(localStorage.getItem('profound_results') as string) || []
            if(temp.length !== 0) {
                dispatch(setReduxProfoundResults(temp))
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
        if(activeStep === selectedStkhs.length - 1) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
                handleIncludeAnswers(answers)
        } else {
            verifyDisabled(answers, selectedStkhs[activeStep+1].id)
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
        }
    };

    //handle add results to database
    const handleAddResults = async (result: IResults) => {
        try {
            console.log(result)
            const res = await fetch('/api/results/profound/add', {
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
                type: 'profound',
                company_size: reduxUser!.company_size,
                sector: reduxUser!.sector,
                createdAt: id,
                results: temp
            }
            temp2.push(result)
            console.log(temp2)

            let res = await handleAddResults(result)
            if(res) {
                dispatch(setReduxProfoundResults(temp2))
                localStorage.setItem('profound_results', JSON.stringify(temp2))
                localStorage.setItem('answers', JSON.stringify([]))
                localStorage.setItem('answers_id', '-1')
            } else {
                message.error('Ocurrió un error al guardar los resultados')
                return
            }
            setLoading(false)
        } else {
            dispatch(setReduxAnswers(answers))
            dispatch(setReduxAnswersId(id))
            localStorage.setItem('answers', JSON.stringify(answers))
            localStorage.setItem('answers_id', id.toString())
        }
        push('/auto/profound/results')
    }

    //create table data
    const createTableData = (arr: IQuestionAnswer[]) => {
        setLoading(true)
        let data: ITableData[] = []
        selectedStkhs.forEach((stkh) => {
            data.push({
                stkh: stkh.name,
                riqueza: arr.filter((ans) => ans.stkhId === stkh.id && ans.dimId === 'riqueza').reduce((a, b) => a + (b.value || 0), 0),
                riqueza_max: arr.filter((ans) => ans.stkhId === stkh.id && ans.dimId === 'riqueza').length * 5,
                etica: arr.filter((ans) => ans.stkhId === stkh.id && ans.dimId === 'etica').reduce((a, b) => a + (b.value || 0), 0),
                etica_max: arr.filter((ans) => ans.stkhId === stkh.id && ans.dimId === 'etica').length * 5,
                calidad: arr.filter((ans) => ans.stkhId === stkh.id && ans.dimId === 'calidad').reduce((a, b) => a + (b.value || 0), 0),
                calidad_max: arr.filter((ans) => ans.stkhId === stkh.id && ans.dimId === 'calidad').length * 5,
                sum_total: arr.filter((ans) => ans.stkhId === stkh.id).reduce((a, b) => a + (b.value || 0), 0),
                sum_total_max: arr.filter((ans) => ans.stkhId === stkh.id).length * 5,
            })
        })
        let temp: ITable = {
            data,
            sum_etica: data.reduce((a, b) => a + (b.etica || 0), 0),
            sum_etica_max: data.reduce((a, b) => a + (b.etica_max || 0), 0),
            sum_calidad: data.reduce((a, b) => a + (b.calidad || 0), 0),
            sum_calidad_max: data.reduce((a, b) => a + (b.calidad_max || 0), 0),
            sum_riqueza: data.reduce((a, b) => a + (b.riqueza || 0), 0),
            sum_riqueza_max: data.reduce((a, b) => a + (b.riqueza_max || 0), 0),
            sum_total: data.reduce((a, b) => a + (b.sum_total || 0), 0),
            sum_total_max: data.reduce((a, b) => a + (b.sum_total_max || 0), 0),
        }
        console.log(temp)
        return temp
    }

    //handle back
    const handleBack = () => {
        verifyDisabled(answers, selectedStkhs[activeStep-1].id)
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

    //handle answer change
    const handleAnswerChange = (e: FormEvent<HTMLInputElement>, question_id: string) => {
        let temp = [...answers]
        let i = temp.findIndex((item) => item.questionId === question_id)
        temp[i].answerId = e.currentTarget.value
        let question_index = selectedStkhs[activeStep].questions.findIndex((item) => item.id === question_id)
        temp[i].value = selectedStkhs[activeStep].questions[question_index].answers.find((item) => item.id === e.currentTarget.value)?.value || 0

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
                {!loading ? (
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