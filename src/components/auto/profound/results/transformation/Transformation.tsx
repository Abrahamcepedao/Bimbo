'use client'

//next
import { useRouter } from "next/navigation"
import Link from "next/link"

//components
import Button from '@/components/reusable/buttons/Button'

//formation links
const formationLinks = [
    { url: 'https://bit.ly/3dEqt28', text: 'DIFOSO', desc: 'Diplomado Internacional para Dirigentes de Empresa' },
    { url: 'https://bit.ly/3dEqt28', text: 'CISO', desc: 'Curso de Iniciación Social' },
    { url: 'https://bit.ly/3dEqt28', text: 'TE', desc: 'Taller de Empresa' },
]

const points: string[] = [
    'Construye un sistema de gestión orientado a generar valor a tus grupos de interés, mediante los propios procesos de negocio.',
    'A partir de la definición ó revisión del marco normativo de tu empresa, reflexiona con tu equipo directivo sobre los resultados obtenidos con las herramientas de diagnóstico, elabora un plan de trabajo de forma participativa* e incentiva la generación de valor cada vez mayor a todos los grupos de interés. La tarea es permanente y siempre encontrarás áreas de oportunidad.',
    'Recuerda en un tiempo razonable (6 meses a un año) volver a entrar al protocolo y repetir el ejercicio, podrás observar tus nuevos resultados y compararlos con los realizados anteriormente para observar tus avances, cómo va madurando tu organización y seguir construyendo tu camino hacia la RSE centrada en la persona.',
]

const Transformation = () => {
    //router
    const { push } = useRouter()

    return (
        <div className="py-8 px-4">
            <div className="max-w-2xl m-auto text-justify">
                <h3 className="subtitle_2 underline">TRANSFORMACIÓN</h3>
                {points.map((point: string, i) => (
                    <p className="text" key={i}>{point}</p>
                ))}
                <Button text="Volver a inicio" variant="gradient" onClick={() => push('/')}/>
            </div>
        </div>
    )
}

export default Transformation