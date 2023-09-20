'use client'

//react
import { useRef, useState, useEffect } from 'react'

//next
import { useRouter } from 'next/navigation'
import Link from 'next/link'

//components
import Button from '@/components/reusable/buttons/Button'

//interfaces
interface Props {
    isAnalysis: boolean,
    results: '0' | '1' | '2', // 0 = red, 1 = yellow, 2 = green
}

const resultsText = {
    0: {
        texts: [
            'Con un índice de bien común rojo, hay mucho por hacer y conviene que empieces pronto, pues está en riesgo la sostenibilidad de la relación con uno o más grupos de interés. La propia matriz de resultados te dará una pauta para determinar prioridades.',
            'Empieza por despertar consciencia en tu equipo directivo para alinearlos a tus objetivos y elaborar juntos un plan de trabajo.',
            'Puedes iniciar con pequeñas acciones para que, viendo resultados, se motiven a realizar cambios mayores; tu liderazgo es fundamental para impulsarlos*.'
        ]
    },
    1: {
        texts: [
            'Un índice de bien común amarillo deja ver que estás trabajando por ser más responsable socialmente. Probablemente tu empresa está en fase de implementación de buenas prácticas de gestión centrada en la persona, en función de prioridades ya identificadas.',
            'Asegura que tu equipo directivo comparte tus principios y amplía el alcance de la formación a mandos medios. Vuelve con ellos sobre las preguntas del autodiagnóstico, y elaboren conjuntamente los planes de trabajo para incrementar valor generado a los grupos de interés*.',
            'Te sugerimos responder el autodiagnóstico periódicamente, recomendamos al menos una vez al año, para evaluar el impacto de tus acciones de mejora.'
        ]
    },
    2: {
        texts: [
            'Un índice de bien común verde es reflejo de una gestión centrada en la persona. A mayor el indicador, mayor la madurez, la sostenibilidad y la congruencia.',
            'Para mantenerlo y/o mejorarlo, asegúrate de alinear la cultura de la empresa, profundizando la formación de tus colaboradores en todos los niveles de la organización, haciéndoles partícipes e incentivando la generación de valor amplio mediante los propios procesos de negocio.',
            'Te proponemos volver sobre las preguntas del autodiagnóstico, y reflexionar con tu equipo directivo, particularmente sobre aquéllas que resultaron en rojo o amarillo, y elabora un plan de trabajo de forma participativa*. La tarea es permanente y siempre encontrarás áreas de oportunidad.',
            'Te sugerimos aplicar el autodiagnóstico periódicamente, recomendamos al menos una vez al año, para evaluar el impacto de tus acciones de mejora y te invitamos a compartir tus buenas prácticas de Gestión Empresarial Centrada en la Persona© en el siguiente sitio: '
        ]
    }
}


const AnalysisText = ({ isAnalysis, results}: Props) => {
    //router
    const { push } = useRouter()

    return (
        <div className="py-8 px-4">
            <div className="max-w-2xl m-auto text-justify">
                {results === '2' && (<h3 className="subtitle_2">¡Felicidades!</h3>)}

                {resultsText[results].texts.map((text, i) => (
                    <p key={i} className="text">{text}{(results === '2' && i === resultsText[results].texts.length - 1) ? <Link href='https://bit.ly/3spE2Z1' target="_blank" className="link">https://bit.ly/3spE2Z1</Link> : null}</p>
                ))}
                <div className="pt-8 max-w-2xl m-auto grid sm:grid-cols-2 gap-4">
                    <Button text={isAnalysis ? 'Volver al inicio' : 'Terminar análisis'} variant="filled" onClick={() => push('/')}/>
                    <Button text="Continuar con protocolo" variant="gradient" onClick={() => push(isAnalysis ? '/auto/profound/results' : '/auto/profound/select_stkhs')}/>
                </div>
            </div>
        </div>
    )
}

export default AnalysisText