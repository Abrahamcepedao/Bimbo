'use client'

//react
import { useState, useEffect } from 'react'

//next
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { selectAnswersShort, selectAnswersIdShort, setReduxAnswersShort, setReduxAnswersIdShort } from '@/app/GlobalRedux/Features/answers/answersSlice'
import { selectUser, setReduxUser } from '@/app/GlobalRedux/Features/data/dataSlice'

//components
import Select from '../../../reusable/inputs/Select'
import Legend from '../../reusable/Legend'
import Matrix from '../../reusable/Matrix'
import Loader from '@/components/reusable/loader/Loader'

//antd
import { message } from 'antd'

//interfaces
import { IUser, IInput, IQuestionAnswer, ITable, ITableData, IResults } from '@/utils/interfaces/types'

//constants
import stkhs_short from '@/utils/constants/stkh_short'

//dynamic components
const Radar = dynamic(() => import('@/components/reusable/graphs/Radar'), { ssr: false })

const dimensiones = {
    riqueza: 'Generación y distribución de riqueza',
    etica: 'Ética y transparencia',
    calidad: 'Calidad de vida',
}

const dimensionesSum = {
    riqueza: 'sum_riqueza',
    etica: 'sum_etica',
    calidad: 'sum_calidad',
}

const Analysis = () => {
    //redux
    const dispatch = useDispatch()
    const reduxAnswers: IQuestionAnswer[] = useSelector(selectAnswersShort)
    const reduxAnswersId: number = useSelector(selectAnswersIdShort)
    const reduxUser: IUser | null = useSelector(selectUser)

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

    //useState - results
    const [results, setResults] = useState<IResults[]>([])

    //useState - results list
    const [resultsList, setResultsList] = useState<IResults[]>([])

    //useState - table
    const [table, setTable] = useState<ITable>({ data: [], sum_etica: 0, sum_calidad: 0, sum_riqueza: 0, sum_total: 0,})

    //useState - radar1
    const [radar1, setRadar1] = useState<any[]>([])

    //useState - radar2

    //useEffect
    useEffect(() => {
        verifyAnswersId()
        verifyUser()
        verifyAnswers()
        console.log(results)
        if(reduxAnswers.length !== 0 && reduxUser !== null && reduxAnswersId !== -1 && table.data.length === 0) {
            createTableData(reduxAnswers)
        }
    }, [reduxAnswers, reduxUser, reduxAnswersId])

    //verify user
    const verifyUser = () => {
        if (!reduxUser) {
            let temp: IUser | null = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null
            if (temp) {
                dispatch(setReduxUser(temp))
            } else push('/')
        } 
    }

    //handle verify answers
    const verifyAnswers = () => {
        if(reduxAnswers.length === 0){
            let temp: IQuestionAnswer[] = JSON.parse(localStorage.getItem('answers_short') as string) || []
            console.log(temp)
            if(temp.length !== 0) {
                dispatch(setReduxAnswersShort(temp))
            } else push('/')
        }
    }

    //verify answers id
    const verifyAnswersId = () => {
        if(reduxAnswersId === -1) {
            let temp: number = Number(localStorage.getItem('answers_id_short'))
            if(temp) {
                dispatch(setReduxAnswersIdShort(temp))
            }
        } 
    }

    //handle add results to database
    const handleAddResults = async (tempTable: ITable) => {
        try {
            let temp = {
                id: reduxUser!.mail + '_' + reduxAnswersId.toString(),
                mail: reduxUser!.mail,
                type: 'short',
                company_size: reduxUser!.company_size,
                sector: reduxUser!.sector,
                createdAt: reduxAnswersId,
                results: tempTable,
            }
            console.log(temp)
            const res = await fetch('/api/results/short/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(temp)
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

    //get average results
    const getAverageResults = async () => {
        try {
            const res = await fetch('/api/results/short', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const data = await res.json()
            console.log(data)
            if(data.status === 200) {
                return data.data
            }
            return []
        } catch(err) {
            console.log(err)
            return []
        }
    }

    //calculate avg results by dimension
    const calculateAvgResults = (dim: string, arr: IResults[]) => {
        let sum = 0
        
        arr.forEach((res) => {
            sum += res.results[dimensionesSum[dim as 'riqueza'] as 'sum_riqueza']
        })
        console.log(sum)
        return sum / arr.length
    }

    //handle setup data
    const handleSetupData = async (arr: IQuestionAnswer[]) => {
        console.log(reduxUser)
        let tempRdar1: any[] = []

        //get promedio
        const res = await getAverageResults()
        console.log(res)
        setResults(res)
        setResultsList(res)
        if(res.length !== 0) message.success('Resultados promedio obtenidos')

        Object.keys(dimensiones).forEach((dim: string) => {
            let sum = 0
            arr.forEach((ans) => {
                ans.dimId === dim ? sum += ans.value || 0 : null

            })
            let tempObj = {
                dimension: dimensiones[dim as 'riqueza'],
                resultado: sum,
                promedio: res.length !== 0 ? calculateAvgResults(dim, res) : 0,
                ideal: 24,
            }
            tempRdar1.push(tempObj)
        })
        console.log(tempRdar1)
        setRadar1(tempRdar1)
        setLoading(false)
    }

    //create table data
    const createTableData = async(arr: IQuestionAnswer[]) => {
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
            sum_total: data.reduce((a, b) => a + (b.sum_total || 0), 0),
        }
        console.log(temp)
        setTable(temp)
        await handleAddResults(temp)
        handleSetupData(arr)
    }

    if(loading) return <Loader />

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