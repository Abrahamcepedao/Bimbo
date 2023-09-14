'use client'

//react
import { useState, useEffect } from 'react'

//next
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { selectAnswers, setReduxAnswers } from '@/app/GlobalRedux/Features/answers/answersSlice'
import { selectSelectedStkhs, setReduxSelectedStkhs } from '@/app/GlobalRedux/Features/data/dataSlice'

//components
import Select from '../../../reusable/inputs/Select'
import Legend from '../../reusable/Legend'
import Matrix from '../../reusable/Matrix'

//interfaces
import { IInput, IQuestionAnswer, IStkh, ITable, ITableData } from '@/utils/interfaces/types'

//constants
import stkhs from '@/utils/constants/stkhs'

//dynamic components
const Radar = dynamic(() => import('@/components/reusable/graphs/Radar'), { ssr: false })

const dimensiones = {
    riqueza: 'Generación y distribución de riqueza',
    etica: 'Ética y transparencia',
    calidad: 'Calidad de vida',
}

const Analysis = () => {
    //redux
    const dispatch = useDispatch()
    const reduxAnswers: IQuestionAnswer[] = useSelector(selectAnswers)
    const reduxSelectedstkhs: string[] = useSelector(selectSelectedStkhs)

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

    //useState - stkhs
    const [selectedStkhs, setSelectedStkhs] = useState<IStkh[]>([])

    //useState - radar1
    const [radar1, setRadar1] = useState<any[]>([])

    //useState - radar2
    const [radar2, setRadar2] = useState<any[]>([])

    //useState - table
    const [table, setTable] = useState<ITable>({ data: [], sum_etica: 0, sum_calidad: 0, sum_riqueza: 0, sum_total: 0,})


    //useEffect
    useEffect(() => {
        handleVerifyAnswers()
    }, [])

    //handle verify answers
    const handleVerifyAnswers = () => {
        if(reduxAnswers.length > 0) verifySelectedStkhs(reduxAnswers)
        else {
            let temp: IQuestionAnswer[] = JSON.parse(localStorage.getItem('answers') as string)
            if(temp) {
                dispatch(setReduxAnswers(temp))
                verifySelectedStkhs(temp)
            } else push('/')
        }
    }

    //verify selected stkhs
    const verifySelectedStkhs = (arr: IQuestionAnswer[]) => {
        if(reduxSelectedstkhs.length === 0) {
            let temp: string[] = JSON.parse(localStorage.getItem('selectedStkhs') as string) || []
            console.log(temp)
            if(temp.length !== 0) {
                dispatch(setReduxSelectedStkhs(temp))
                setupAnswers(arr, temp)
            } else push('/')
        } else setupAnswers(arr, reduxSelectedstkhs)
    }

    //handle setup data
    const setupAnswers = (arr: IQuestionAnswer[], tempStkhs: string[]) => {
        let tempRdar1: any[] = []

        Object.keys(dimensiones).forEach((dim: string) => {
            let sum = 0
            arr.forEach((ans) => {
                ans.dimId === dim ? sum += ans.value || 0 : null
            })
            let tempObj = {
                dimension: dimensiones[dim as 'riqueza'],
                resultado: sum,
                promedio: Math.floor(Math.random() * 10) + 6
            }
            tempRdar1.push(tempObj)
        })
    
        setRadar1(tempRdar1)
        createTableData(arr, stkhs.filter((el) => tempStkhs.includes(el.id)))
        setSelectedStkhs(stkhs.filter((el) => tempStkhs.includes(el.id)))
        //calculate stkh
        //handleCalculateStkh('CB', arr)
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

    //create table data
    const createTableData = (arr: IQuestionAnswer[], stkhs_short: IStkh[]) => {
        let data: ITableData[] = []
        stkhs_short.forEach((stkh) => {
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
        setTable(temp)
    }

    return (
        <div className='py-16'>
            <div className='grid xl:grid-cols-1 gap-8'>
                <Matrix table={table} scale={1}/>
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
                {/* <div>
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
                </div> */}
            </div>
        </div>
    )
}

export default Analysis