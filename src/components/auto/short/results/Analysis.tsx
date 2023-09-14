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
import Select from '../../../reusable/inputs/Select'
import Legend from '../../reusable/Legend'
import Matrix from '../../reusable/Matrix'

//interfaces
import { IInput, IQuestionAnswer, ITable, ITableData } from '@/utils/interfaces/types'

//constants
import stkhs_short from '@/utils/constants/stkh_short'

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

    //router
    const { push } = useRouter()

    //useState - stkh
    const [stkh, setStkh] = useState<IInput>({
        name: 'stkh',
        type: 'select',
        options: [
            { label: 'Socios y Accionistas', value: 'AI' },
            { label: 'Colaboradores', value: 'CB' },
            { label: 'Proveedores', value: 'PV' },
            { label: 'Clientes', value: 'CL' },
            { label: 'Comunidad', value: 'CO' },
            { label: 'Competencia', value: 'CP' },
            { label: 'Generaciones futuras', value: 'GF' },
            { label: 'Gobierno', value: 'GO' },
        ],
        variant: 'outlined',
        colSpan: '',
        value: 'Colaboradores',
        required: false,
    })

    //useState - loading
    const [loading, setLoading] = useState<boolean>(true)

    //useState - table
    const [table, setTable] = useState<ITable>({ data: [], sum_etica: 0, sum_calidad: 0, sum_riqueza: 0, sum_total: 0,})

    //useState - radar1
    const [radar1, setRadar1] = useState<any[]>([])

    //useState - radar2

    //useEffect
    useEffect(() => {
        handleVerifyAnswers()
    }, [])

    //handle verify answers
    const handleVerifyAnswers = () => {
        if(reduxAnswers.length > 0) handleSetupData(reduxAnswers)
        else {
            let temp: IQuestionAnswer[] = JSON.parse(localStorage.getItem('answers_short') as string) || []
            console.log(temp)
            if(temp.length !== 0) {
                dispatch(setReduxAnswers(temp))
                handleSetupData(temp)
            } else push('/')
        }
    }

    //handle setup data
    const handleSetupData = (arr: IQuestionAnswer[]) => {
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
        createTableData(arr)
        //calculate stkh
        //handleCalculateStkh('CB', arr)
    }

    //create table data
    const createTableData = (arr: IQuestionAnswer[]) => {
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
            sum_total: data.reduce((a, b) => a + (b.sum_total || 0), 0),
        }
        console.log(temp)
        setTable(temp)
    }

    return (
        <div className='py-16'>
            <div className='grid xl:grid-cols-1 gap-8'>
                <Matrix table={table} scale={0}/>
                <div>
                    <div className='flex justify-center items-center max-w-md m-auto mb-4'>
                        <h4 className='subtitle mr-2'>Dimensioness</h4>
                        <div>
                            
                        </div>
                    </div>
                    <Legend />
                    <div className='radar_container mb-8'>
                        <Radar data={radar1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analysis