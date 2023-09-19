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
import { selectIsAnalisis, selectHasHistory, selectProfoundResults, setReduxIsAnalisis, setReduxHasHistory, setReduxProfoundResults } from '@/app/GlobalRedux/Features/results/resultsSlice'

//mui
import { IconButton, Tooltip } from '@mui/material'

//mui - icons
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

//components
import Select from '../../../reusable/inputs/Select'
import Legend from '../../reusable/Legend'
import Matrix from '../../reusable/Matrix'
import Loader from '@/components/reusable/loader/Loader'
import AnalysisText from './AnalysisText'
import Button from '@/components/reusable/buttons/Button'

//antd
import { message } from 'antd'

//pdf canvas
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

//interfaces
import { IInput, IQuestionAnswer, IUser, IStkh, IResults, ITable, ITableData } from '@/utils/interfaces/types'

//constants
import stkhs from '@/utils/constants/stkhs'
import company_size from '@/utils/constants/company_size'
import sectors from "@/utils/constants/sectors";

//Utils
import { formatDateToYYYYMMDD } from '@/utils/functions/utilities'

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

const dimensionesTotal = {
    riqueza: 'sum_riqueza_max',
    etica: 'sum_etica_max',
    calidad: 'sum_calidad_max',
}

const Analysis = () => {
    //redux
    const dispatch = useDispatch()
    const reduxAnswers: IQuestionAnswer[] = useSelector(selectAnswers)
    const reduxSelectedstkhs: string[] = useSelector(selectSelectedStkhs)
    const reduxAnswersId: number = useSelector(selectAnswersId)
    const reduxUser: IUser | null = useSelector(selectUser)
    const reduxIsAnalisis: boolean = useSelector(selectIsAnalisis)
    const reduxHasHistory: boolean = useSelector(selectHasHistory)
    const reduxResults: IResults[] = useSelector(selectProfoundResults)

    //router
    const { push } = useRouter()

    //useState - stkhs
    const [selectedStkhs, setSelectedStkhs] = useState<IStkh[]>([])

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

    //useState - radar1
    const [radar1, setRadar1] = useState<any[]>([])

    //useState - radar2
    const [radar2, setRadar2] = useState<any[]>([])

    //useState - bar data
    const [barData, setBarData] = useState<any[]>([])

    //useState - table
    const [table, setTable] = useState<ITable>({ data: [], sum_etica: 0, sum_calidad: 0, sum_riqueza: 0, sum_total: 0,})

    //useState - hasHistory
    const [hasHistory, setHasHistory] = useState<boolean>(false)

    //useEffect
    useEffect(() => {
        verifyIsAnalysis()
        verifyHasHistory()
        verifyAnswersId()
        verifyProfoundResults()
        verifyUser()
        verifyAnswers()
        verifySelectedStkhs()
        console.log(reduxHasHistory, reduxResults, reduxUser, table.data)
        if(reduxResults.length !== 0 && reduxIsAnalisis && table.data.length === 0) {
            console.log('here1')
            setupHistorySelect()
        } else if(reduxHasHistory && reduxResults.length !== 0 && reduxUser !== null && table.data.length === 0) {
            console.log('here2')
            setupHistorySelect()
        } else if(reduxAnswers.length !== 0 && reduxSelectedstkhs.length !== 0 && reduxUser !== null && reduxAnswersId !== -1 && table.data.length === 0) {
            console.log('here3')
            createTableData(reduxAnswers, stkhs.filter((el) => reduxSelectedstkhs.includes(el.id)))
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

    //handle verify answers
    const verifyAnswers = () => {
        if(reduxAnswers.length === 0){
            let temp: IQuestionAnswer[] = JSON.parse(localStorage.getItem('answers') as string) || []
            if(temp.length !== 0) {
                dispatch(setReduxAnswers(temp))
            }
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

    //verify profound results
    const verifyProfoundResults = () => {
        if(reduxResults.length === 0) {
            let temp: IResults[] = JSON.parse(localStorage.getItem('profound_results') as string) || []
            if(temp.length !== 0) {
                dispatch(setReduxProfoundResults(temp))
            }
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
        if(reduxIsAnalisis) {
            let num: number = formData[2].options!.findIndex((item, i) => `Análisis ${i+1} - ${formatDateToYYYYMMDD(Number(item.value))}` === formData[2].value) || 0
            handleSetupHistoryDimensions(reduxResults[num].results, temp, selectedStkhs)
        } else handleSetupDimensions(reduxAnswers, temp, selectedStkhs)
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
    const calculateAvgResults = (dim: string, arr: IResults[], stkhs_short: IStkh[]) => {
        let sum = 0
        let count = 0
        let tempStkhs: string[] = stkhs_short.map((el) => el.name)
        arr.forEach((res) => {
            if(res.results.data.filter((el) => tempStkhs.includes(el.stkh)).length !== 0){
                count++
                sum += res.results.data.filter((el) => tempStkhs.includes(el.stkh)).reduce((a, b) => a + (b[dim as 'riqueza']) || 0, 0)
            }
        })
        return sum / count
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
                promedio: res.length !== 0 ? calculateAvgResults(dim, res, stkhs_short) : 0,
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
    const setupTableHistory = (num: number) => {
        console.log(reduxResults[num])
        setTable(reduxResults[num].results)
        let tempStkhs: string[] = []
        reduxResults[num].results.data.forEach((el) => {
            if(!tempStkhs.includes(el.stkh)) tempStkhs.push(el.stkh)
        })
        console.log(tempStkhs)
        let stkhs_short = stkhs.filter((el) => tempStkhs.includes(el.name))
        console.log(stkhs_short)
        setSelectedStkhs(stkhs_short)
        handleSetupHistoryData(reduxResults[num].results, stkhs_short)
    }

    //handle setup dimensions
    const handleSetupHistoryDimensions = (table: ITable, res: IResults[], stkhs_short: IStkh[]) => {
        let tempRdar1: any[] = []
        console.log(table)
        Object.keys(dimensiones).forEach((dim: string) => {
            let tempObj = {
                dimension: dimensiones[dim as 'riqueza'],
                resultado: table[dimensionesSum[dim as 'riqueza'] as 'sum_riqueza'],
                promedio: res.length !== 0 ? calculateAvgResults(dim, res, stkhs_short) : 0,
                ideal: table[dimensionesTotal[dim as 'riqueza'] as 'sum_riqueza_max'],
            }
            tempRdar1.push(tempObj)
        })
        console.log(tempRdar1)
        setRadar1(tempRdar1)
        handleSetupHistoryStkh(table, res, stkhs_short)
    }

    //handle setup stakeholders
    const handleSetupHistoryStkh = (table: ITable, res: IResults[], stkhs_short: IStkh[]) => {

        let tempRdar2: any[] = []
        console.log(stkhs_short)
        stkhs_short.forEach((stkh) => {
            let tempObj = {
                dimension: stkh.name,
                promedio: res.length !== 0 ? calculateAvgResultsStkh(stkh.name, res) : 0,
                resultado: table.data.filter((el) => el.stkh === stkh.name)[0]?.sum_total || 0,
                ideal: table.data.filter((el) => el.stkh === stkh.name)[0]?.sum_total_max || 0,
            }
            tempRdar2.push(tempObj)
        })
        console.log(tempRdar2)
        setRadar2(tempRdar2)
        setLoading(false)
    }

    //handle setup history data
    const handleSetupHistoryData = async (table: ITable, stkhs_short: IStkh[]) => {
        //get promedio
        const res = await getAverageResults()
        setResults(res)
        setResultsList(res)

        handleSetupHistoryDimensions(table, res, stkhs_short)
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

    //calculate result
    const calculateResult = (value: number, max: number) => {
        if(value < max! / 3) return '0'
        if(value < max! / 3 * 2) return '1'
        return '2'
    }

    //get percentage of change
    const getPercentage = (num: number, avg: number) => avg === 0 ? 0 : (num - avg) / avg * 100

    //get label color
    const getLabelColor = (num: number) => {
        if(num < 0) return 'text-red_primary'
        else if(num === 0) return 'text-yellow_primary'
        return 'text-green_primary'
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
            { "dimension": "ideal", "value": table.sum_total_max!, "valueColor": "22, 63, 234" }])

    //downnload results pdf
    const captureScreenAndDownloadPDF = async () => {
        const canvas = await html2canvas(document.body);

        const contentWidth = canvas.width;
        const contentHeight = canvas.height;

        const pdf = new jsPDF('p', 'mm', [contentWidth, contentHeight]);

        const imgData = canvas.toDataURL('image/png');
        
        // Calculate the number of pages required based on the content's aspect ratio
        const pageHeight = pdf.internal.pageSize.height;
        const totalPages = Math.ceil(contentHeight / pageHeight);

        for (let pageNum = 0; pageNum < totalPages; pageNum++) {
            if (pageNum > 0) {
            pdf.addPage();
            }
            const startY = -pageHeight * pageNum;
            pdf.addImage(imgData, 'PNG', 0, startY, contentWidth, contentHeight);
        }

        pdf.save('resultados_autodiagnostico.pdf');
    };

    if(loading) return <Loader />

    return (
        <div className='py-8'>
            <div className='grid xl:grid-cols-1 gap-8 p-2'>
                {hasHistory && (
                    <div className='filters_container'>
                        <div>
                            <Select inp={formData[2]} onChange={handleAnalysisSelect}/>
                        </div>
                    </div>
                )}

                <Matrix table={table} scale={1}/>

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
                    <div className='overflow-x-scroll p-2'>
                        <div className='radar_container mb-8'>
                            <Radar data={radar1} />
                        </div>
                    </div>
                    {radar1.length !== 0 && (
                        <div className='filters_container opacity-100'>
                            <p className='subtitle_2 text-center mb-4'>Interpretación - Gráfica de dimensiones</p>
                            <p className='text text-justify mb-4'>El promedio se refiere al promedio acumulado de {resultsList.length === 1 ? 'la' : 'las'} {resultsList.length} {resultsList.length === 1 ? 'empresa' : 'empresas'} que han respondido el autodiagnóstico{formData[0].value !== '' ? `, de tamaño ${formData[0].value}` : null} {(formData[0].value !== '' && formData[1].value !== '') ? ' y ' : null} {formData[1].value !== '' ? `del sector ${formData[1].value}` : null}.</p>
                            <ul className='pl-4'>
                                {Object.keys(dimensiones).map((dim: string, i: number) => (
                                    <li key={i} className='text list-disc text-justify'>En la dimensión <span className='bold'>"{dimensiones[dim as 'riqueza']},"</span> te encuentras <span className={`bold ${getLabelColor(getPercentage(radar1[i].resultado, radar1[i].promedio))}`}>{getPercentage(radar1[i].resultado, radar1[i].promedio).toFixed(0)}%</span> superior al promedio, (resultado: <span className='bold'>{radar1[i].resultado}</span>; promedio: <span className='bold'>{radar1[i].promedio.toFixed(0)}</span>).</li>
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
                                    <li key={i} className='text list-disc text-justify'>En el stakeholder <span className='bold'>"{dim.dimension},"</span> te encuentras <span className={`bold ${getLabelColor(getPercentage(dim.resultado, dim.promedio))}`}>{getPercentage(dim.resultado, dim.promedio).toFixed(0)}%</span> superior al promedio, (resultado: <span className='bold'>{dim.resultado}</span>; promedio: <span className='bold'>{dim.promedio.toFixed(0)}</span>).</li>
                                ))}
                            </ul>
                        </div>
                    )} 
                </div>
                {barData.length !== 0 && (
                    <div className='overflow-hidden'>
                        <Legend />
                        <div className='overflow-x-scroll p-2'>
                            <div className='bar_container'>
                                <Bar data={barData} />
                            </div>
                        </div>
                    </div>
                )}
                <div>
                    <AnalysisText results={calculateResult(table.sum_total, table.sum_total_max!)}/>
                    <div className="pt-8 max-w-2xl m-auto grid sm:grid-cols-2 gap-4">
                        <Button text="Descargar resultados" variant="filled" onClick={captureScreenAndDownloadPDF}/>
                        <Button text="Continuar" variant="gradient" onClick={() => push('/auto/profound/results/formation')}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analysis