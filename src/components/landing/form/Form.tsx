'use client'

//react
import { useState, useEffect, FormEvent } from 'react'

//next
import { useRouter } from 'next/navigation'

//components
import Input from '../../reusable/inputs/Input'
import Select from '../../reusable/inputs/Select'
import Check from '../../reusable/inputs/Check'
import Button from '../../reusable/buttons/Button'

//antd
import { message } from 'antd'

//constants
import form_inputs from '@/utils/constants/form_inputs'
import estados from '@/utils/constants/estados'
import municipios from '@/utils/constants/municipios'

//redux
import { useDispatch } from 'react-redux'
import { setReduxCompany } from '@/app/GlobalRedux/Features/data/dataSlice'

//interfaces
import { IInput, IOption, ICheckItem } from '@/utils/interfaces/types'

const Form = () =>  {
    //redux
    const dispatch = useDispatch()

    //router
    const { push } = useRouter()

    //useState - loading
    const [loading, setLoading] = useState<boolean>(true)

    //useState - form data
    const [formData, setFormData] = useState<IInput[]>(form_inputs)

    //useEffect - set form data
    useEffect(() => {
        setupForm()
    }, [])

    //setup form
    const setupForm = () => {
        //estates
        let tempEstates: IOption[] = [{ label: 'Estado', value: ''}]
        estados.forEach(estate => {
            tempEstates.push({ label: estate.nombre, value: estate.nombre })
        })

        //organizations
        let tempOrgs: ICheckItem[] = []
        formData[7].options?.forEach(org => {
            tempOrgs.push({ label: org.label, checked: false })
        })
        
        setFormData(prevState => prevState.map(inp => {
            if (inp.name === 'estate') return { ...inp, options: tempEstates }
            else if (inp.name === 'city') return { ...inp, options: [{ label: 'Municipio', value: '' }] }
            else if (inp.name === 'org') return { ...inp, value: tempOrgs }
            else return inp
        }))

        setLoading(false)
    }

    //validate form
    const validateForm = () => {
        let valid = true
        formData.forEach(inp => {
            if (inp.required && !inp.value && valid) {
                message.error(`El campo ${inp.label} es obligatorio`)
                valid = false
            }
        })
        return valid
    }

    //handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prevState => prevState.map(inp => inp.name === name ? { ...inp, value } : inp))
    }

    //handle select change
    const handleSelectChange = (val: string, name: string) => {
        if(name === 'estate') {
            let tempMunicipios: IOption[] = [{ label: 'Municipio', value: ''}]
            municipios[val as 'Aguascalientes'].forEach(municipio => {
                tempMunicipios.push({ label: municipio, value: municipio })
            })
                
            setFormData(prevState => prevState.map(inp => {
                if(inp.name === 'estate') return { ...inp, value: val }
                else if(inp.name === 'city') return { ...inp, value: tempMunicipios[1].label, options: tempMunicipios }
                else return inp
            }))
        } else if(name === 'city') setFormData(prevState => prevState.map(inp => inp.name === name ? { ...inp, value: val } : inp))
    }

    //handle check change
    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const { checked } = e.target
        setFormData(prevState => prevState.map(inp => inp.name === 'org' ? { ...inp, value: (prevState[7].value as ICheckItem[]).map((item, index) => index === i ? { ...item, checked } : item) } : inp))
    }

    //handl submit
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!validateForm()) return 
        dispatch(setReduxCompany(formData.find(inp => inp.name === 'company')?.value as string || ''))
        localStorage.setItem('company', formData.find(inp => inp.name === 'company')?.value as string)
        push('/questions')

    }

    return (
        <div className='max-w-xl m-auto pb-12'>
            <h5 className='subtitle_2 text-left'>Datos de contacto</h5>
            <form className='grid grid-cols-2 gap-4' onSubmit={handleSubmit}>
                {!loading && formData.map((inp, i) => (
                    <div key={i} className={`${inp.colSpan}`}>
                        {i === 5 && (
                            <div className='sm:col-span-2'>
                                <h5 className='subtitle_2 text-left'>Datos de la Empresa / Institución</h5>
                            </div>
                        )}
                        {(inp.type === 'email' || inp.type === 'text') ? (
                            <Input inp={inp} onChange={handleInputChange} />
                        ) : inp.type === 'select' ?  (
                            <Select inp={inp} onChange={handleSelectChange} />
                        ) : (
                            <Check inp={inp} onChange={handleCheckChange} />
                        )}
                    </div>
                ))}
                <div className='sm:col-span-2'>
                    <Button text='Enviar' type='submit' variant='gradient'/>
                </div>
            </form>
        </div>
    )
}

export default Form 