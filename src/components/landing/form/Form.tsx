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
import Loader from '@/components/reusable/loader/Loader'

//antd
import { message } from 'antd'

//constants
import form_inputs from '@/utils/constants/form_inputs'
import estados from '@/utils/constants/estados'
import municipios from '@/utils/constants/municipios'
import company_size from '@/utils/constants/company_size'
import sectors from '@/utils/constants/sectors'

//redux
import { useDispatch } from 'react-redux'
import { setReduxCompany, setReduxUser } from '@/app/GlobalRedux/Features/data/dataSlice'

//interfaces
import { IInput, IOption, ICheckItem, IUser } from '@/utils/interfaces/types'

const Form = () =>  {
    //redux
    const dispatch = useDispatch()

    //router
    const { push } = useRouter()

    //useState - loading
    const [loading, setLoading] = useState<boolean>(false)

    //useState - loading form
    const [loadingForm, setLoadingForm] = useState<boolean>(true)

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
        formData[9].options?.forEach(org => {
            tempOrgs.push({ label: org.label, checked: false })
        })
        
        setFormData(prevState => prevState.map(inp => {
            if (inp.name === 'estate') return { ...inp, options: tempEstates }
            else if (inp.name === 'city') return { ...inp, options: [{ label: 'Municipio', value: '' }] }
            else if (inp.name === 'org') return { ...inp, value: tempOrgs }
            else return inp
        }))

        setLoadingForm(false)
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
        } else if (name === 'city') setFormData(prevState => prevState.map(inp => inp.name === name ? { ...inp, value: val } : inp))
        else if (name === 'company_size') setFormData(prevState => prevState.map(inp => inp.name === name ? { ...inp, value: company_size.find((el) => el.value === val)?.label || '' } : inp))
        else if (name === 'sector') setFormData(prevState => prevState.map(inp => inp.name === name ? { ...inp, value: sectors.find((el) => el.value === val)?.label || '' } : inp))
    }

    //handle check change
    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
        const { checked } = e.target
        setFormData(prevState => prevState.map(inp => inp.name === 'org' ? { ...inp, value: (prevState[9].value as ICheckItem[]).map((item, index) => index === i ? { ...item, checked } : item) } : inp))
    }

    //handl submit
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!validateForm()) return 
        setLoading(true)
        dispatch(setReduxCompany(formData.find(inp => inp.name === 'company')?.value as string || ''))
        localStorage.setItem('company', formData.find(inp => inp.name === 'company')?.value as string)

        //set loading
        try {
            let temp: IUser = {
                name: formData.find(inp => inp.name === 'name')?.value as string,
                lastname: formData.find(inp => inp.name === 'lastname')?.value as string,
                mail: formData.find(inp => inp.name === 'mail')?.value as string,
                phone: formData.find(inp => inp.name === 'phone')?.value as string,
                position: formData.find(inp => inp.name === 'position')?.value as string,
                company: formData.find(inp => inp.name === 'company')?.value as string,
                company_size: company_size.find((el) => el.label === formData.find(inp => inp.name === 'company_size')?.value)?.value as string,
                sector: sectors.find((el) => el.label === formData.find(inp => inp.name === 'sector')?.value)?.value as string,
                estate: formData.find(inp => inp.name === 'estate')?.value as string,
                city: formData.find(inp => inp.name === 'city')?.value as string,
                org: (formData.find(inp => inp.name === 'org')?.value as ICheckItem[]).map(item => item.checked ? item.label : null).filter(item => item !== null) as string[],
                createdAt: Date.now(), 
                type: 'test',
                checklist: []
            }
            const res = await fetch('/api/users/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(temp)
            })
            const data = await res.json()
            console.log(data)
            if(data.status === 200) {
                dispatch(setReduxUser(temp))
                localStorage.setItem('user', JSON.stringify(data.data))
                setLoading(false)
                push('/checklist')
            } else {
                message.error('Error al guardar los datos')
                setLoading(false)
            }

        } catch (error) {
            message.error('Error al guardar los datos')
            setLoading(false)
        }
    }

    return (
        <div className='max-w-xl m-auto pb-12'>
            <h5 className='subtitle_2 text-left'>Datos de contacto</h5>
            <form className='grid grid-cols-2 gap-4' onSubmit={handleSubmit}>
                {!loadingForm && formData.map((inp, i) => (
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
                {loading && (
                    <div className='sm:col-span-2'>
                        <Loader/>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Form 