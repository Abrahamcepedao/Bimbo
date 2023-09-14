'use client'

//react
import { useState, useEffect, FormEvent } from 'react'

//next
import { useRouter } from 'next/navigation'

//components
import Input from '../reusable/inputs/Input'
import Button from '../reusable/buttons/Button'
import Loader from '@/components/reusable/loader/Loader'

//antd
import { message } from 'antd'

//redux
import { useDispatch } from 'react-redux'
import { setReduxCompany } from '@/app/GlobalRedux/Features/data/dataSlice'

//utils
import { validateEmail } from '@/utils/functions/utilities'

//interfaces
import { IInput, IOption, ICheckItem } from '@/utils/interfaces/types'

const Question = () =>  {
    //redux
    const dispatch = useDispatch()

    //router
    const { push } = useRouter()

    //useState - loading
    const [loading, setLoading] = useState<boolean>(true)

    //useState - form data
    const [formData, setFormData] = useState<IInput[]>([
        { name: 'mail', label: 'Entra con tu correo electrónico', placeholder: 'Correo electrónico', required: true, variant: 'outlined', colSpan: '', type: 'email', value: '' },
    ])

    //useEffect - set form data
    useEffect(() => {
        
    }, [])

    //handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => {
            let temp = [...prev]
            temp[0].value = e.target.value
            return temp
        })
    }

    //validate form
    const validateForm = () => {
        if(!validateEmail(formData[0].value as string)) return false
        return true
    }

    //handl submit
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!validateForm()) return message.error('Ingresa un correo electrónico válido')
    }

    return (
        <div className='max-w-xl m-auto pb-12'>
            <h3 className='subtitle_2'>¿Ya habías llenado el autodiagnóstico antes?</h3>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-4'>
                    <Input inp={formData[0]} onChange={handleInputChange}/>
                </div>
            </form>
            <Button type='submit' text='Continuar' variant='gradient'/>
        </div>
    )
}

export default Question 