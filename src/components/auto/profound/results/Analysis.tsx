'use client'

//react
import { useState, useEffect } from 'react'

//next
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { selectAnswers, setReduxAnswers, selectAnswersId, setReduxAnswersId } from '@/app/GlobalRedux/Features/answers/answersSlice'
import { selectUser, selectSelectedStkhs, setReduxSelectedStkhs, setReduxUser } from '@/app/GlobalRedux/Features/data/dataSlice'

//mui
import { IconButton, Tooltip } from '@mui/material'

//mui - icons
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

//components
import Select from '../../../reusable/inputs/Select'
import Legend from '../../reusable/Legend'
import Matrix from '../../reusable/Matrix'
import Loader from '@/components/reusable/loader/Loader'

//antd
import { message } from 'antd'

//interfaces
import { IInput, IQuestionAnswer, IUser, IStkh, IResults, ITable, ITableData } from '@/utils/interfaces/types'

//constants
import stkhs from '@/utils/constants/stkhs'
import company_size from '@/utils/constants/company_size'
import sectors from "@/utils/constants/sectors";

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
    const reduxAnswers: IQuestionAnswer[] = useSelector(selectAnswers)
    const reduxSelectedstkhs: string[] = useSelector(selectSelectedStkhs)
    const reduxAnswersId: number = useSelector(selectAnswersId)
    const reduxUser: IUser | null = useSelector(selectUser)

    //router
    const { push } = useRouter()

    //useState - stkh

    //useState - stkhs
    const [selectedStkhs, setSelectedStkhs] = useState<IStkh[]>([])

    //useState - formData
    const [formData, setFormData] = useState<IInput[]>([
        { name: 'company_size', label: 'Tamaño de empresa', placeholder: 'Tamaño', required: true, variant: 'outlined', colSpan: '', type: 'select', options: company_size, value: '' },
        { name: 'sector', label: 'Sector de empresa', placeholder: 'Sector', required: true, variant: 'outlined', colSpan: '', type: 'select', options: sectors, value: '' },
    ])

    //useState - loading
    const [loading, setLoading] = useState<boolean>(true)

    //useState - results
    const [results, setResults] = useState<IResults[]>([])

    //useState - results list
    const [resultsList, setResultsList] = useState<IResults[]>([])

    //useState - radar1
    const [radar1, setRadar1] = useState<any[]>([])

    //useState - radar2
    const [radar2, setRadar2] = useState<any[]>([])

    //useState - table
    const [table, setTable] = useState<ITable>({ data: [], sum_etica: 0, sum_calidad: 0, sum_riqueza: 0, sum_total: 0,})


    //useEffect
    useEffect(() => {
        verifyAnswersId()
        verifyUser()
        verifyAnswers()
        verifySelectedStkhs()
        if(reduxAnswers.length !== 0 && reduxSelectedstkhs.length !== 0 && reduxUser !== null && reduxAnswersId !== -1 && table.data.length === 0) {
            createTableData(reduxAnswers, stkhs.filter((el) => reduxSelectedstkhs.includes(el.id)))
        }
    }, [reduxAnswersId, reduxUser, reduxAnswers, reduxSelectedstkhs])

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
            let temp: IQuestionAnswer[] = JSON.parse(localStorage.getItem('answers') as string) || []
            console.log(temp)
            if(temp.length !== 0) {
                dispatch(setReduxAnswers(temp))
            } else push('/')
        }
    }

    //verify answers id
    const verifyAnswersId = () => {
        if(reduxAnswersId === -1) {
            let temp: number = Number(localStorage.getItem('answers_id'))
            if(temp) {
                dispatch(setReduxAnswersId(temp))
            }
        } 
    }

    //verify selected stkhs
    const verifySelectedStkhs = () => {
        if(reduxSelectedstkhs.length === 0) {
            let temp: string[] = JSON.parse(localStorage.getItem('selectedStkhs') as string) || []
            console.log(temp)
            if(temp.length !== 0) {
                dispatch(setReduxSelectedStkhs(temp))
            } else push('/')
        } 
    }

    //handle select change
    const handleSelectChange = (val: string, name: string) => {
        let temp = [...results]
        if (name === 'company_size') {
            setFormData(prevState => prevState.map(inp => inp.name === name ? { ...inp, value: company_size.find((el) => el.value === val)?.label || '' } : inp))
            //filter results
            temp = temp.filter((el) => el.company_size === val)

            //filter by sector if any
            if(formData[1].value !== '') temp = temp.filter((el) => el.sector === sectors.find((el) => el.label === formData[1].value)?.value || '')
        } else if (name === 'sector'){
            setFormData(prevState => prevState.map(inp => inp.name === name ? { ...inp, value: sectors.find((el) => el.value === val)?.label || '' } : inp))
            //filter results
            temp = temp.filter((el) => el.sector === val)

            //filter by company size if any
            if(formData[0].value !== '') temp = temp.filter((el) => el.company_size === company_size.find((el) => el.label === formData[0].value)?.value || '')
        }

        setResultsList(temp)
        handleSetupDimensions(reduxAnswers, temp, selectedStkhs)
    }

    //handle clear filters
    const handleClearFilters = () => {
        setFormData(prevState => prevState.map(inp => inp.name === 'company_size' ? { ...inp, value: '' } : inp))
        setFormData(prevState => prevState.map(inp => inp.name === 'sector' ? { ...inp, value: '' } : inp))
        setResultsList(results)
        handleSetupDimensions(reduxAnswers, results, selectedStkhs)
    }

    //handle add results to database
    const handleAddResults = async (tempTable: ITable) => {
        try {
            let temp = {
                id: reduxUser!.mail + '_' + reduxAnswersId.toString(),
                mail: reduxUser!.mail,
                type: 'profound',
                company_size: reduxUser!.company_size,
                sector: reduxUser!.sector,
                createdAt: reduxAnswersId,
                results: tempTable,
            }
            console.log(temp)
            const res = await fetch('/api/results/profound/add', {
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
            const res = await fetch('/api/results/profound', {
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
        return sum / arr.length
    }

    //calculate avg results by stkh
    const calculateAvgResultsStkh = (stkh: string, arr: IResults[]) => {
        let sum = 0
        let count = 0
        arr.forEach((res) => {
            if(res.results.data.filter((el) => el.stkh === stkh).length !== 0){
                count++
                sum += res.results.data.filter((el) => el.stkh === stkh)[0]?.sum_total || 0
            }
        })
        return count !== 0 ? sum / count : 0
    }

    //handle setup data
    const handleSetupData = async (arr: IQuestionAnswer[], stkhs_short: IStkh[]) => {
        //get promedio
        const res = await getAverageResults()
        setResults(res)
        setResultsList(res)
        
        handleSetupDimensions(arr, res, stkhs_short)
    }


    //handle setup data
    const handleSetupDimensions = (arr: IQuestionAnswer[], res: IResults[], stkhs_short: IStkh[]) => {
        let tempRdar1: any[] = []
        Object.keys(dimensiones).forEach((dim: string) => {
            let sum = 0
            arr.forEach((ans) => {
                ans.dimId === dim ? sum += ans.value || 0 : null
            })

            let tempObj = {
                dimension: dimensiones[dim as 'riqueza'],
                promedio: res.length !== 0 ? calculateAvgResults(dim, res) : 0,
                resultado: sum,
                ideal: arr.filter((ans) => ans.dimId === dim).length * 5,
            }
            tempRdar1.push(tempObj)
        })
        console.log(tempRdar1)
        setRadar1(tempRdar1)
        handleSetupStkh(arr, res, stkhs_short)
    }

    //handle calculate stkh
    const handleSetupStkh = (arr: IQuestionAnswer[], res: IResults[], stkhs_short: IStkh[]) => {
        let tempRdar2: any[] = []

        stkhs_short.forEach((stkh) => {
            let tempObj = {
                dimension: stkh.name,
                promedio: res.length !== 0 ? calculateAvgResultsStkh(stkh.name, res) : 0,
                resultado: arr.filter((ans) => ans.stkhId === stkh.id).reduce((a, b) => a + (b.value || 0), 0),
                ideal: stkhs.filter((el) => el.id === stkh.id)[0].questions.length * 5,
            }
            tempRdar2.push(tempObj)
        })
        console.log(tempRdar2)
        setRadar2(tempRdar2)
        setLoading(false)
    }

    //create table data
    const createTableData = async (arr: IQuestionAnswer[], stkhs_short: IStkh[]) => {
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
        setTable(temp)
        setSelectedStkhs(stkhs_short)
        await handleAddResults(temp)
        handleSetupData(arr, stkhs_short)
    }

    if(loading) return <Loader />

    return (
        <div className='py-8'>
            <div className='grid xl:grid-cols-1 gap-8'>
                <Matrix table={table} scale={1}/>

                <div className='filters_container'>
                    <div className='flex_b_center'>
                        <div>
                            <h4 className='subtitle_2 mb-2'>Comparando contra promedio de: {resultsList.length} {resultsList.length === 1 ? 'empresa' : 'empresas'}</h4>
                        </div>
                        <div>
                            <Tooltip title='Limpiar filtros' placement='top'>
                                <IconButton className='icon' onClick={handleClearFilters}>
                                    <HighlightOffRoundedIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-4'>
                        <div>
                            <Select inp={formData[0]} onChange={handleSelectChange}/>
                        </div>
                        <div>
                            <Select inp={formData[1]} onChange={handleSelectChange}/>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex justify-center items-center max-w-md m-auto mb-4'>
                        <h4 className='subtitle mr-2'>Dimensiones: Índice de congruencia</h4>
                        <div>
                            
                        </div>
                    </div>
                    <Legend />
                    <div className='radar_container mb-4'>
                        <Radar data={radar1} />
                    </div>
                </div>

                <div>
                    <div className='flex justify-center items-center max-w-md m-auto mb-4'>
                        <h4 className='subtitle mr-2'>Stakeholders: Índice de sostenibilidad</h4>
                        <div>
                            
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