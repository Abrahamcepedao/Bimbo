'use client'

//react
import { useState, useEffect } from 'react'

//next
import { usePathname } from "next/navigation"

//redux
import { useSelector } from 'react-redux'
import { selectUser } from '@/app/GlobalRedux/Features/data/dataSlice'

//interfaces
import { IUser } from '@/utils/interfaces/types'

const Banner = () => {
    //pahtname
    const path = usePathname()

    //redux
    const user: IUser | null = useSelector(selectUser)

    //useState - title
    const [title, setTitle] = useState('Protocolo de Responsabilidad Social Empresarial Centrada en la Persona ®️')

    //useState - subtitle
    const [subtitle, setSubtitle] = useState('Primer paso de las empresas hacia la responsabilidad social empresarial')

    //useEffect - subtitle
    useEffect(() => {
        if (path.includes('short')) {
            setTitle('Autodiagnóstico de Sostenibilidad y Congruencia ®️')
            if(path === '/auto/short') setSubtitle('Introducción de autodiagnóstico')
            if(path === '/auto/short/results') setSubtitle('Resultado de análisis de ' + user?.company)
            if(path === '/auto/short/questions') setSubtitle('Cuestionario de autodiagnóstico')
        } else if (path.includes('profound')) {
            setTitle('Análisis a profundidad por stakeholder')
            if(path === '/auto/profound') setSubtitle('Cuestionario de análisis a profundo')
            if(path === '/auto/profound/select_stkhs') setSubtitle('Selección de stakeholders a analizar')
            if(path === '/auto/profound/results') setSubtitle('Resultados del análisis a profundidad de ' + user?.company)
            if(path === '/auto/profound/results/formation') setSubtitle('Formación')
            if(path === '/auto/profound/results/bibliography') setSubtitle('Bibliografía')
            if(path === '/auto/profound/results/transformation') setSubtitle('Transformación')
        } else if (path === '/aviso') setSubtitle('Aviso de privacidad')
        else if(path === '/checklist') setSubtitle('Estado actual de la empresa')
        else {
            setTitle('Protocolo de Responsabilidad Social Empresarial Centrada en la Persona ®️')
            setSubtitle('Primer paso de las empresas hacia la responsabilidad social empresarial')
        }
    }, [path])

    return (
        <div className="bg-background bg-cover bg-center bg-no-repeat w-full h-96">
            <div className="bg-overlay w-full h-full flex justify-center flex-col items-center p-2">
                <div className='text-center'>
                    <h1 className="title">{title}</h1>
                    <h3 className="subtitle">{subtitle}</h3>
                </div>
            </div>
        </div>
    )
}

export default Banner