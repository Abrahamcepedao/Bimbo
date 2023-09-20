'use client'

//react
import { useState, useEffect } from 'react'

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
import { setReduxUser } from '@/app/GlobalRedux/Features/data/dataSlice'
import { setReduxIsAnalisis, setReduxHasHistory, setReduxShortResults, setReduxProfoundResults } from '@/app/GlobalRedux/Features/results/resultsSlice'

//utils
import { validateEmail } from '@/utils/functions/utilities'

//interfaces
import { IInput, IResults, IUser } from '@/utils/interfaces/types'

const Question = () =>  {
    //redux
    const dispatch = useDispatch()

    //router
    const { push } = useRouter()

    //useState - loading
    const [loading, setLoading] = useState<boolean>(false)

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

    //handle get user
    const handleGetUser = async () => {
        if(!validateForm()) {
            message.error('Ingresa un correo electrónico válido')
            return null
        } 
        try {
            const res = await fetch(`/api/users/mail`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mail: formData[0].value })
            })
            const data = await res.json()

            if(data.status === 200) return data.data as IUser
            if(data.status === 404) message.error('No se encontró un análisis con ese correo electrónico')
            if(data.status === 500) message.error('Ocurrió un error al obtener los datos del usuario')

            return null
        } catch (error) {
            //console.log(error)
            message.error('Ocurrió un error al obtener los datos del usuario')
            return null
        }
    }    

    //handle get short results
    const handleGetShortResults = async () => {
        try {
            const res = await fetch(`/api/results/short/history`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mail: formData[0].value })
            })
            const data = await res.json()

            if(data.status === 200) return data.data as IResults[]
            return []
        } catch (error) {
            //console.log(error)
            message.error('Ocurrió un error al obtener los resultados cortos')
            return []
        }
    }

    //handle get profound results
    const handleGetProfoundResults = async () => {
        try {
            const res = await fetch(`/api/results/profound/history`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mail: formData[0].value })
            })
            const data = await res.json()

            if(data.status === 200) return data.data as IResults[]
            return []
        } catch (error) {
            //console.log(error)
            message.error('Ocurrió un error al obtener los resultados cortos')
            return []
        }
    }

    //handle get history
    const handleGetHistory = async (type: string) => {
        if(!validateForm()) return message.error('Ingresa un correo electrónico válido')
        setLoading(true)
        localStorage.clear()
        const res: IUser | null = await handleGetUser()
        if(res === null) return setLoading(false)
        
        const shortResults: IResults[] = await handleGetShortResults()
        const profoundResults: IResults[] = await handleGetProfoundResults()
        //console.log(shortResults)
        //console.log(profoundResults)
        dispatch(setReduxUser(res))
        dispatch(setReduxHasHistory(true))
        dispatch(setReduxShortResults(shortResults))
        dispatch(setReduxProfoundResults(profoundResults))
        localStorage.setItem('user', JSON.stringify(res))
        localStorage.setItem('short_results', JSON.stringify(shortResults))
        localStorage.setItem('profound_results', JSON.stringify(profoundResults))
        localStorage.setItem('has_history', 'true')

        //redirect
        //push('/history')
        if(type === 'analisis') {
            dispatch(setReduxIsAnalisis(true))
            localStorage.setItem('is_analysis', 'true')
            push('/auto/short/results')
        } else {
            dispatch(setReduxIsAnalisis(false))
            localStorage.setItem('is_analysis', 'false')
            if(shortResults.length > profoundResults.length) push('/auto/select')
            else push('/auto/short')
        }
    }

    //handle new analysis

    return (
        <div className='max-w-xl m-auto p-2 pb-12 h-full'>
            <h3 className='subtitle_2'>¿Ya habías participado en el protocolo anteriormente?</h3>
            <div>
                <div className='grid grid-cols-1 gap-4'>
                    <Input inp={formData[0]} onChange={handleInputChange}/>
                </div>
            </div>
            <div className='grid sm:grid-cols-2 gap-4'>
                <Button type='submit' text='Ver análisis anteriores' variant='filled' onClick={() => {handleGetHistory('analisis')}}/>
                <Button type='submit' text='Nuevo análisis' variant='gradient' onClick={() => {handleGetHistory('new')}}/>
            </div>

            {loading && <Loader/>}
        </div>
    )
}

export default Question 