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
import { selectIsAnalisis, selectHasHistory, selectShortResults, setReduxIsAnalisis, setReduxHasHistory, setReduxShortResults } from '@/app/GlobalRedux/Features/results/resultsSlice'

//mui
import { IconButton, Tooltip } from '@mui/material'

//mui - icons
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

//components
import Select from '../../../reusable/inputs/Select'
import Legend from '../../reusable/Legend'
import Matrix from '../../reusable/Matrix'
import AnalysisText from './AnalysisText'
import Loader from '@/components/reusable/loader/Loader'

//antd
import { message } from 'antd'

//interfaces
import { IUser, IInput, IQuestionAnswer, ITable, ITableData, IResults } from '@/utils/interfaces/types'

//constants
import stkhs_short from '@/utils/constants/stkh_short'
import company_size from '@/utils/constants/company_size'
import sectors from "@/utils/constants/sectors";

//Utils
import { formatDateToYYYYMMDD, formatNumber } from '@/utils/functions/utilities'

//dynamic components
const Radar = dynamic(() => import('@/components/reusable/graphs/Radar'), { ssr: false })
const Bar = dynamic(() => import('@/components/reusable/graphs/Bar'), { ssr: false })

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
    const reduxIsAnalisis: boolean = useSelector(selectIsAnalisis)
    const reduxHasHistory: boolean = useSelector(selectHasHistory)
    const reduxResults: IResults[] = useSelector(selectShortResults)

    //router
    const { push } = useRouter()

    //useState - formData
    const [formData, setFormData] = useState<IInput[]>([
        { name: 'company_size', label: 'Tamaño de empresa', placeholder: 'Tamaño', required: true, variant: 'outlined', colSpan: '', type: 'select', options: company_size, value: '' },
        { name: 'sector', label: 'Sector de empresa', placeholder: 'Sector', required: true, variant: 'outlined', colSpan: '', type: 'select', options: sectors, value: '' },
        { name: 'analysis', label: 'Selecciona el análisis', placeholder: 'Análisis', required: true, variant: 'outlined', colSpan: '', type: 'select', options: [], value: ''}
    ])

    //useState - loading
    const [loading, setLoading] = useState<boolean>(true)

    //useState - results
    const [results, setResults] = useState<IResults[]>([])

    //useState - results list
    const [resultsList, setResultsList] = useState<IResults[]>([])

    //useState - table
    const [table, setTable] = useState<ITable>({ data: [], sum_etica: 0, sum_calidad: 0, sum_riqueza: 0, sum_total: 0,})

    //useState - bar data
    const [barData, setBarData] = useState<any[]>([])

    //useState - radar1
    const [radar1, setRadar1] = useState<any[]>([])

    //useState - radar2
    const [radar2, setRadar2] = useState<any[]>([])

    //useState - hasHistory
    const [hasHistory, setHasHistory] = useState<boolean>(false)

    //useEffect
    useEffect(() => {
        verifyAnswersId()
        verifyUser()
        verifyAnswers()
        verifyIsAnalysis()
        verifyHasHistory()
        verifyShortResults()
        //console.log(results)
        if(reduxResults.length !== 0 && reduxIsAnalisis && table.data.length === 0) {
            setupHistorySelect()
        } else if(reduxHasHistory && reduxResults.length !== 0 && reduxUser !== null && table.data.length === 0) {
            setupHistorySelect()
        } else if(reduxAnswers.length !== 0 && reduxUser !== null && reduxAnswersId !== -1 && table.data.length === 0) {
            createTableData(reduxAnswers)
        } 
    }, [reduxAnswers, reduxUser, reduxAnswersId, reduxIsAnalisis, reduxHasHistory, reduxResults])

    //useEffect - bar data
    useEffect(() => {
        if(table.data.length !== 0) calculateBarData(table)
    }, [table, resultsList])

    //verify user
    const verifyUser = () => {
        if (!reduxUser) {
            let temp: IUser | null = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null
            if (temp) {
                dispatch(setReduxUser(temp))
            } else push('/')
        } 
    }

    //verify answers
    const verifyAnswers = () => {
        if(reduxAnswers.length === 0){
            let temp: IQuestionAnswer[] = JSON.parse(localStorage.getItem('answers_short') as string) || []
            //console.log(temp)
            if(temp.length !== 0) {
                dispatch(setReduxAnswersShort(temp))
            }
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

    //verify is analysis
    const verifyIsAnalysis = () => {
        if(!reduxIsAnalisis) {
            let temp: boolean = localStorage.getItem('is_analysis') === 'true' ? true : false
            if(temp) {
                dispatch(setReduxIsAnalisis(temp))
            }
        }
    }

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

    //handle select change
    const handleSelectChange = async(val: string, name: string) => {
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
        if(reduxHasHistory) {
            let num: number = formData[2].options!.findIndex((item, i) => `Análisis ${i+1} - ${formatDateToYYYYMMDD(Number(item.value))}` === formData[2].value) || 0
            handleSetupHistoryDimensions(reduxResults[num].results, temp)
        } else handleSetupDimensions(reduxAnswers, temp)
    }

    //handle clear filters
    const handleClearFilters = () => {
        setFormData(prevState => prevState.map(inp => inp.name === 'company_size' ? { ...inp, value: '' } : inp))
        setFormData(prevState => prevState.map(inp => inp.name === 'sector' ? { ...inp, value: '' } : inp))
        setResultsList(results)

        if(reduxIsAnalisis) {
            let num: number = formData[2].options!.findIndex((item, i) => `Análisis ${i+1} - ${formatDateToYYYYMMDD(Number(item.value))}` === formData[2].value) || 0
            handleSetupHistoryDimensions(reduxResults[num].results, results)
        } else handleSetupDimensions(reduxAnswers, results)
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
            //console.log(temp)
            const res = await fetch('/api/results/short/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(temp)
            })
            const data = await res.json()
            //console.log(data)
            if(data.status === 200) {
                message.success('Resultados guardados')
                return true
            }

            if(data.status === 400) message.success('Resultados ya guardados')
            if(data.status === 500) message.error('Error al guardar los resultados')
        
            return false

        } catch(err) {
            //console.log(err)
            return false
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
            //console.log(data)
            if(data.status === 200) {
                return data.data
            }
            return []
        } catch(err) {
            //console.log(err)
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
        
        arr.forEach((res) => {
            sum += res.results.data.filter((el) => el.stkh === stkh)[0]?.sum_total || 0
        })
        return sum / arr.length
    }

    //handle setup dimensions
    const handleSetupDimensions = (arr: IQuestionAnswer[], res: IResults[]) => {
        let tempRdar1: any[] = []
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
        //console.log(tempRdar1)
        setRadar1(tempRdar1)
        handleSetupStkh(arr, res)
    }

    //handle setup stakeholders
    const handleSetupStkh = (arr: IQuestionAnswer[], res: IResults[]) => {
        let tempRdar2: any[] = []

        stkhs_short.forEach((stkh) => {
            let tempObj = {
                dimension: stkh.name,
                promedio: res.length !== 0 ? calculateAvgResultsStkh(stkh.name, res) : 0,
                resultado: arr.filter((ans) => ans.stkhId === stkh.id).reduce((a, b) => a + (b.value || 0), 0),
                ideal: 9,
            }
            tempRdar2.push(tempObj)
        })
        setRadar2(tempRdar2)
        setLoading(false)
    }

    //handle setup data
    const handleSetupData = async (arr: IQuestionAnswer[]) => {
        //get promedio
        const res = await getAverageResults()
        setResults(res)
        setResultsList(res)

        handleSetupDimensions(arr, res)
    }

    //handle analysis select
    const handleAnalysisSelect = (val: string, name: string) => {
        let index = reduxResults.findIndex((item) => item.createdAt.toString() === val)
        if(index !== -1) {
            let temp = [...formData]
            temp[2].value = `Análisis ${index+1} - ${formatDateToYYYYMMDD(reduxResults[index].createdAt)}`
            setFormData(temp)
            setupTableHistory(index)
        }
    }

    //setup up history select
    const setupHistorySelect = () => {
        let temp = [...formData]
        temp[2].options = reduxResults.map((item, i) => {
            return {
                label: `Análisis ${i+1} - ${formatDateToYYYYMMDD(item.createdAt)}` ,
                value: item.createdAt.toString(),
            }
        })
        temp[2].value = `Análisis ${reduxResults.length} - ${formatDateToYYYYMMDD(reduxResults[reduxResults.length - 1].createdAt)}`
        setHasHistory(true)
        setFormData(temp)
        setupTableHistory(reduxResults.length - 1)
    }

    //setup table with results history
    const setupTableHistory = (num: number, res?: IResults[]) => {
        //console.log(reduxResults[num])
        setTable(reduxResults[num].results)
        handleSetupHistoryData(reduxResults[num].results, res)
    }

    //handle setup dimensions
    const handleSetupHistoryDimensions = (table: ITable, res: IResults[]) => {
        let tempRdar1: any[] = []
        Object.keys(dimensiones).forEach((dim: string) => {
            let tempObj = {
                dimension: dimensiones[dim as 'riqueza'],
                resultado: table[dimensionesSum[dim as 'riqueza'] as 'sum_riqueza'],
                promedio: res.length !== 0 ? calculateAvgResults(dim, res) : 0,
                ideal: 24,
            }
            tempRdar1.push(tempObj)
        })
        //console.log(tempRdar1)
        setRadar1(tempRdar1)
        handleSetupHistoryStkh(table, res)
    }

    //handle setup stakeholders
    const handleSetupHistoryStkh = (table: ITable, res: IResults[]) => {
        let tempRdar2: any[] = []

        stkhs_short.forEach((stkh) => {
            let tempObj = {
                dimension: stkh.name,
                promedio: res.length !== 0 ? calculateAvgResultsStkh(stkh.name, res) : 0,
                resultado: table.data.filter((el) => el.stkh === stkh.name)[0]?.sum_total || 0,
                ideal: 9,
            }
            tempRdar2.push(tempObj)
        })
        //console.log(tempRdar2)
        setRadar2(tempRdar2)
        setLoading(false)
    }

    //handle setup history data
    const handleSetupHistoryData = async (table: ITable, res2?: IResults[]) => {
        //get promedio
        const res = await getAverageResults()
        if(res2 !== undefined) {
            //setResults(res2)
            setResultsList(res2)
        } else {
            setResults(res)
            setResultsList(res)
        }

        handleSetupHistoryDimensions(table, res2 ? res : res)
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
            sum_total: Math.round(data.reduce((a, b) => a + (b.sum_total || 0), 0) / 72 * 100),
        }
        //console.log(temp)
        setTable(temp)
        await handleAddResults(temp)
        handleSetupData(arr)
    }

    //calculate result
    const calculateResult = (value: number) => {
        if(value < 59) return '0'
        if(value < 79) return '1'
        return '2'
    }

    //calculate avg total
    const calculateAvgTotal = (arr: IResults[]) => {
        if(arr.length === 0) return 0
        let sum = 0
        arr.forEach((res) => { sum += res.results.sum_total })
        return sum / arr.length
    }

    //calculate bar data
    const calculateBarData = (table: ITable) => setBarData([
            { "dimension": "resultado", "value": table.sum_total, "valueColor": "20, 234, 74" },
            { "dimension": "promedio", "value": calculateAvgTotal(resultsList), "valueColor": "20, 234, 234" },
            { "dimension": "ideal", "value": 100, "valueColor": "22, 63, 234" }])


    //get percentage of change
    const getPercentage = (num: number, avg: number) => avg === 0 ? 0 : (num - avg) / avg * 100

    //get label color
    const getLabelColor = (num: number) => {
        if(num < 0) return 'text-red_primary'
        else if(num === 0) return 'text-yellow_primary'
        return 'text-green_primary'
    }

    if(loading) return <Loader />

    return (
        <div className='py-8'>
            <div className='grid grid-cols-1 gap-8 p-2'>
                {hasHistory && (
                    <div className='filters_container'>
                        <div>
                            <Select inp={formData[2]} onChange={handleAnalysisSelect}/>
                        </div>
                    </div>
                )}

                <Matrix table={table} scale={0}/>

                <div className='filters_container'>
                    <p className='text'>A continuación se muestra una comparación de tus resultados tanto con el promedio de otras empresas y la puntuación "ideal." En esta sección, puedes filtrar las empresas utilizadas para obtener el promedio con base a su tamaño y/o sector.</p>
                </div>

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

                <div className='overflow-hidden'>
                    <div className='flex justify-center items-center max-w-md m-auto mb-4'>
                        <h4 className='subtitle mr-2'>Dimensiones: Índice de congruencia</h4>
                    </div>
                    <Legend />
                    {radar1.length !== 0 && (
                        <div className='overflow-x-scroll p-2'>
                            <div className='radar_container mb-8'>
                                <Radar data={radar1} />
                            </div>
                        </div>
                    )}
                    {radar1.length !== 0 && (
                        <div className='filters_container opacity-100 mb-4'>
                            <p className='subtitle_2 text-center mb-4'>Interpretación - Gráfica de dimensiones</p>
                            <p className='text text-justify mb-4'>El promedio se refiere al promedio acumulado de {resultsList.length === 1 ? 'la' : 'las'} {resultsList.length} {resultsList.length === 1 ? 'empresa' : 'empresas'} que han respondido el autodiagnóstico{formData[0].value !== '' ? `, de tamaño ${formData[0].value}` : null} {(formData[0].value !== '' && formData[1].value !== '') ? ' y ' : null} {formData[1].value !== '' ? `del sector ${formData[1].value}` : null}.</p>
                            <ul className='pl-4'>
                                {Object.keys(dimensiones).map((dim: string, i: number) => (
                                    <li key={i} className='text list-disc text-justify'>En la dimensión <span className='bold'>"{dimensiones[dim as 'riqueza']},"</span> te encuentras <span className={`bold ${getLabelColor(getPercentage(radar1[i].resultado, radar1[i].promedio))}`}>{formatNumber(getPercentage(radar1[i].resultado, radar1[i].promedio))}%</span> {getPercentage(radar1[i].resultado, radar1[i].promedio) < 0 ? 'inferior' : 'superior'} al promedio, (resultado: <span className='bold'>{radar1[i].resultado}</span>; promedio: <span className='bold'>{formatNumber(radar1[i].promedio)}</span>).</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className='overflow-hidden'>
                    <div className='flex justify-center items-center max-w-md m-auto mb-4'>
                        <h4 className='subtitle mr-2'>Stakeholders: Índice de sostenibilidad</h4>
                    </div>
                    <Legend />
                    <div className='overflow-x-scroll p-2'>
                        <div className='radar_container mb-8'>
                            <Radar data={radar2} />
                        </div>
                    </div>
                    {radar2.length !== 0 && (
                        <div className='filters_container opacity-100'>
                            <p className='subtitle_2 text-center mb-4'>Interpretación - Gráfica de stakeholders</p>
                            <p className='text text-justify mb-4'>El promedio se refiere al promedio acumulado de {resultsList.length === 1 ? 'la' : 'las'} {resultsList.length} {resultsList.length === 1 ? 'empresa' : 'empresas'} que han respondido el autodiagnóstico{formData[0].value !== '' ? `, de tamaño ${formData[0].value}` : null} {(formData[0].value !== '' && formData[1].value !== '') ? ' y ' : null} {formData[1].value !== '' ? `del sector ${formData[1].value}` : null}.</p>
                            <ul className='pl-4'>
                                {radar2.map((dim: any, i: number) => (
                                    <li key={i} className='text list-disc text-justify'>En el stakeholder <span className='bold'>"{dim.dimension},"</span> te encuentras <span className={`bold ${getLabelColor(getPercentage(dim.resultado, dim.promedio))}`}>{formatNumber(getPercentage(dim.resultado, dim.promedio))}%</span> {getPercentage(dim.resultado, dim.promedio) < 0 ? 'inferior' : 'superior'} al promedio, (resultado: <span className='bold'>{dim.resultado}</span>; promedio: <span className='bold'>{formatNumber(dim.promedio)}</span>).</li>
                                ))}
                            </ul>
                        </div>
                    )} 
                </div>
                {barData.length !== 0 && (
                    <div className='overflow-hidden'>
                        <div className='flex justify-center items-center max-w-md m-auto mb-4'>
                            <h4 className='subtitle mr-2'>Índice de bien común</h4>
                        </div>
                        <Legend />
                        <div className='overflow-x-scroll p-2'>
                            <div className='bar_container'>
                                <Bar data={barData} />
                            </div>
                        </div>
                    </div>
                )}
                <div>
                    <AnalysisText isAnalysis={reduxIsAnalisis} results={calculateResult(table.sum_total)}/>
                </div>
            </div>
        </div>
    )
}

export default Analysis