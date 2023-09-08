'use client'

//react
import { useState, useEffect } from 'react'

//next
import { usePathname } from "next/navigation"

//redux
import { useSelector } from 'react-redux'
import { selectCompany } from '@/app/GlobalRedux/Features/data/dataSlice'

const Banner = () => {
    //pahtname
    const path = usePathname()

    //redux
    const company = useSelector(selectCompany)

    //useState - subtitle
    const [subtitle, setSubtitle] = useState('')

    //useEffect - subtitle
    useEffect(() => {
        if (path === '/results') {
            if(company !== '') setSubtitle('Resultado de ' + company)
            else {
                let comp = localStorage.getItem('company')
                if(comp) setSubtitle('Resultado de ' + comp)
            }
        }
        else if (path === '/aviso') setSubtitle('Aviso de privacidad')
        else setSubtitle('Primer paso de las empresas hacia la responsabilidad social empresarial')
    }, [path])

    return (
        <div className="bg-background bg-cover bg-center bg-no-repeat w-full h-96">
            <div className="bg-overlay w-full h-full flex justify-center flex-col items-center">
                <div className='text-center'>
                    <h1 className="title">Autodiagnóstico de Sostenibilidad y Congruencia ®️</h1>
                    <h3 className="subtitle">{subtitle}</h3>
                </div>
            </div>
        </div>
    )
}

export default Banner