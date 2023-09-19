'use client'

//react
import { useRef } from 'react'

//next
import Link from "next/link"

//components
import IndexTable from "../../reusable/IndexTable"
import Button from '@/components/reusable/buttons/Button'

//pdf canvas
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

//formation links
const formationLinks = [
    { url: 'https://bit.ly/3dEqt28', text: 'DIFOSO', desc: 'Diplomado Internacional para Dirigentes de Empresa' },
    { url: 'https://bit.ly/3dEqt28', text: 'CISO', desc: 'Curso de Iniciación Social' },
    { url: 'https://bit.ly/3dEqt28', text: 'TE', desc: 'Taller de Empresa' },
]

const points: string[] = [
    'Este nuevo ejercicio  a mayor profundidad, te mostrará una nueva matriz que complementa a la que obtuviste en el Autodiagnostico inicial. Al igual que con el primero verás el resultado en cada uno de los cuadrantes de las 3 dimensiones y por cada stakeholder que seleccionaste. ',
    'Con ambos elementos tendrás ahora un panorama más claro de por donde podrás iniciar tu trabajo para ir avanzando en el tiempo. ',
    'Recuerda que el camino de la RSE centrada en l persona es un proceso de mejora continua, siempre habrá oportunidades para avanzar e ir madurando tu gestión.  Lo más importante es tener clara tu visión en el futuro y trabaje con paciencia y dedicación.',
]

const Info = () => {
    const contentRef = useRef(null);

    const captureScreenAndDownloadPDF = async () => {
        const canvas = await html2canvas(document.body);

        const pdf = new jsPDF('p', 'mm', [210, 400]);

        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 400);

        pdf.save('screenshot.pdf');
    };

    
    return (
        <div className="py-8 px-4" ref={contentRef}>
            <div className="max-w-2xl m-auto text-justify">
                <h3 className="subtitle_2">Interpretación de resultados</h3>
                {points.map((point: string, i) => (
                    <p className="text" key={i}>{point}</p>
                ))}

                {/* <h3 className='subtitle_2 underline'>FORMACIÓN</h3>
                <p className='text bold'>Enriquece y alínea la cultura de tu empresa para darle unidad de visión y propósito. Fortalece el compromiso directivo.</p>
                <div className='mb-8'>
                    {formationLinks.map((link, i) => (
                        <div key={i} className='mb-4'>
                            <p><Link href={link.url} className='link'>{link.text}</Link> – {link.desc}</p>
                        </div>
                    ))}
                </div> */}

                {/* <h3 className='subtitle_2 underline'>TRANSFORMACIÓN</h3>
                <p className='text bold'>Construye un sistema de gestión orientado a generar valor a tus grupos de interés, mediante los propios procesos de negocio.</p>
                <p className='text'>A partir de la definición ó revisión del marco normativo de tu empresa, reflexiona con tu equipo directivo sobre los resultados obtenidos con las herramientas de diagnóstico, elabora un plan de trabajo de forma participativa* e incentiva la generación de valor cada vez mayor a todos los grupos de interés. La tarea es permanente y siempre encontrarás áreas de oportunidad.</p>
                <div>
                    {formationLinks.map((link, i) => (
                        <div key={i} className='mb-4'>
                            <p><Link href={link.url} className='link'>{link.text}</Link> – {link.desc}</p>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}

/* 


*/

export default Info