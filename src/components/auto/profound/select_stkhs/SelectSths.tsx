'use client'

//react
import { useState, useEffect, FormEvent } from 'react'

//next
import { useRouter } from 'next/navigation'

//components
import Check from '@/components/reusable/inputs/Check'
import Button from '@/components/reusable/buttons/Button'
import Loader from '@/components/reusable/loader/Loader'
import Info from './Info'

//antd
import { message } from 'antd'

//constants
import stkhs from '@/utils/constants/stkhs'

//redux
import { useDispatch } from 'react-redux'
import { setReduxSelectedStkhs } from '@/app/GlobalRedux/Features/data/dataSlice'

//interfaces
import { IInput, IOption, ICheckItem } from '@/utils/interfaces/types'

const SelectStkhs = () =>  {
    //redux
    const dispatch = useDispatch()

    //router
    const { push } = useRouter()

    //useState - loading
    const [loading, setLoading] = useState<boolean>(true)

    //useState - form data
    const [formData, setFormData] = useState<IInput[]>([])

    //useEffect - set form data
    useEffect(() => {
     setupFormData()
    }, [])

    //set form data
    const setupFormData = () => {
        //organizations
        let tempSkths: ICheckItem[] = []
        let options: IOption[] = [...stkhs].map(stkh => ({ label: stkh.name, value: stkh.id }))

        options.forEach(stkh => {
            //update label with results from previous analysis
            tempSkths.push({ label: stkh.label, checked: false })
        })

        setFormData([
            { name: 'stkhs', label: 'Se preseleccionar los grupos que te sugerimos analizar con base a los resultados de autodiagnóstico rápido', placeholder: '', required: false, variant: 'outlined', colSpan: 'cols-span-1 sm:col-span-2', type: 'check', value: tempSkths, options: options}
        ])
        setLoading(false)
    }

    //validate form
    const validateForm = () => {
        let valid = true
        let tempFormData = [...formData]
        let tempStkhs = tempFormData[0].value as ICheckItem[]
        let count = 0
        tempStkhs.forEach(stkh => {
            if(stkh.checked) count++
        })
        if(count < 3) {
            valid = false
            message.error('Debes seleccionar al menos 3 grupos de interés')
        }
        return valid
    }

    //handle check change
    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const { checked } = e.target
        setFormData(prevState => prevState.map(inp => inp.name === 'stkhs' ? { ...inp, value: (prevState[0].value as ICheckItem[]).map((item, index) => index === i ? { ...item, checked } : item) } : inp))
    }

    //handl submit
    const handleSubmit = async () => {
        if(!validateForm()) return 
        let temp = (formData[0].value as ICheckItem[]).filter(stkh => stkh.checked).map(stkh => stkh.label)
        let stkhsIds = stkhs.filter(stkh => temp.includes(stkh.name)).map(stkh => stkh.id)
        dispatch(setReduxSelectedStkhs(stkhsIds))
        localStorage.setItem('selectedStkhs', JSON.stringify(stkhsIds))
        push('/auto/profound/')
    }

    return (
        <div className='max-w-xl m-auto p-2 pb-12'>
            <Info/>
            <h5 className='subtitle_2 text-left'>Selecciona los grupos de interés</h5>
            <div className='mb-4'>
                {(!loading && formData.length !== 0) && formData.map((inp, i) => (
                    <div key={i} className={`${inp.colSpan}`}>
                        <Check inp={inp} onChange={handleCheckChange} />
                    </div>
                ))}
            </div>
            <div className=''>
                <Button text='Continuar' onClick={handleSubmit} variant='gradient'/>
            </div>
            {loading && (
                <div className=''>
                    <Loader/>
                </div>
            )}
        </div>
    )
}

export default SelectStkhs 