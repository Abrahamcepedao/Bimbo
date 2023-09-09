'use client'

//react
import { useState, useEffect } from 'react'

//next
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { selectAnswers, setReduxAnswers } from '@/app/GlobalRedux/Features/answers/answersSlice'

//components
import Select from '../reusable/inputs/Select'
import Legend from './Legend'

//interfaces
import { IInput, IQuestionAnswer } from '@/utils/interfaces/types'

//constants
import stkhs from '@/utils/constants/stkhs'

//dynamic components
const Radar = dynamic(() => import('@/components/reusable/graphs/Radar'), { ssr: false })

const dimensiones = {
    subsidiaridad: 'Subsidiaridad',
    solidaridad: 'Solidaridad',
    dignidad: 'Dignidad de la persona',
    destino: 'Destino universal de los bienes',
    bienDentro: 'Bien común dentro',
    bienFuera: 'Bien común fuera',
}

const Analysis = () => {
    //redux
    const dispatch = useDispatch()
    const reduxAnswers: IQuestionAnswer[] = useSelector(selectAnswers)

    //router
    const { push } = useRouter()

    //useState - stkh
    const [stkh, setStkh] = useState<IInput>({
        name: 'stkh',
        type: 'select',
        options: [
            { label: 'Colaboradores', value: 'CB' },
            { label: 'Accionistas', value: 'AC' },
            { label: 'Proveedores', value: 'PV' },
            /* { label: 'Clientes', value: 'clientes' },
            { label: 'Gobierno', value: 'gobierno' },
            { label: 'Generaciones futuras', value: 'generaciones_futuras' },
            { label: 'Competidores', value: 'competidores' }, */
        ],
        variant: 'outlined',
        colSpan: '',
        value: 'Colaboradores',
        required: false,
    })

    //useState - radar1
    const [radar1, setRadar1] = useState<any[]>([])

    //useState - radar2
    const [radar2, setRadar2] = useState<any[]>([])

    //useEffect
    useEffect(() => {
        handleVerifyAnswers()
    }, [])

    //handle verify answers
    const handleVerifyAnswers = () => {
        if(reduxAnswers.length > 0) handleSetupData(reduxAnswers)
        else {
            let temp: IQuestionAnswer[] = JSON.parse(localStorage.getItem('answers') as string)
            if(temp) {
                dispatch(setReduxAnswers(temp))
                handleSetupData(temp)
            } push('/')
        }
    }

    //handle setup data
    const handleSetupData = (arr: IQuestionAnswer[]) => {
        let tempRdar1: any[] = []

        Object.keys(dimensiones).forEach((dim: string) => {
            let sum = 0
            arr.forEach((ans) => {
                if(ans.values![dim as 'destino']) sum += ans.values![dim as 'destino'] || 0
            })
            let tempObj = {
                dimension: dimensiones[dim as 'destino'],
                resultado: sum,
                promedio: Math.floor(Math.random() * 10) + 6
            }
            tempRdar1.push(tempObj)
        })
    
        setRadar1(tempRdar1)

        //calculate stkh
        handleCalculateStkh('CB', arr)
    }

    //handle calculate stkh
    const handleCalculateStkh = (val: string, arr: IQuestionAnswer[]) => {
        let tempRdar2: any[] = []
        let temp: IQuestionAnswer[] = [...arr].filter(ans => ans.stkhId === val)

        temp.forEach(ans => {
            let sum = 0
            Object.keys(ans.values!).forEach((dim: string) => {
                sum += ans.values![dim as 'destino'] || 0
            })
            let questionLabel = stkhs.find(stkh => stkh.id === ans.stkhId)?.questions.find(q => q.id === ans.questionId)?.label

            let tempObj = {
                dimension: questionLabel,
                resultado: sum,
                promedio: Math.floor(Math.random() * 6) + 6
            }
            tempRdar2.push(tempObj)
        })
        setRadar2(tempRdar2)
    }

    //handle stkh change
    const handleStkhChange = (value: string, _: string) => {
        let lbl = stkh.options?.find(opt => opt.value === value)?.label || ''
        setStkh(prevState => ({ ...prevState, value: lbl }))
        handleCalculateStkh(value, reduxAnswers)
    }

    return (
        <div className='py-16'>
            <div className='grid xl:grid-cols-1 gap-8'>
                <div>
                    <div className='flex justify-center items-center max-w-md m-auto mb-4'>
                        <h4 className='subtitle mr-2'>Dimensiones</h4>
                        <div>
                            
                        </div>
                    </div>
                    <Legend />
                    <div className='radar_container mb-8'>
                        <Radar data={radar1} />
                    </div>
                </div>
                <div>
                    <div className='flex justify-center items-center max-w-md m-auto mb-4'>
                        <h4 className='subtitle mr-2'>Stakeholders:</h4>
                        <div>
                            <Select inp={stkh} onChange={handleStkhChange}/>
                        </div>
                    </div>
                    <Legend />
                    <div className='radar_container'>
                        <Radar data={radar2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analysis