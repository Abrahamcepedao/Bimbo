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
                <p className='text'>Para comenzar tu análisis, te sugerimos observar el índice de bien común, el cual, de una manera agregada, concentra los resultados de toda la matriz; posteriormente puedes analizar horizontal y verticalmente los Índices de Sostenibilidad y de Congruencia, para finalmente revisar cada una de las celdas.</p>
                <p className='text'>Un índice de bien común verde es reflejo de una gestión centrada en la persona. A mayor el indicador, mayor la madurez, la sostenibilidad y la congruencia.</p>
                <p className='text'>Para mantenerlo y/o mejorarlo, asegúrate de alinear la cultura de la empresa, profundizando la formación de tus colaboradores en todos los niveles de la organización, haciéndoles partícipes e incentivando la generación de valor amplio mediante los propios procesos de negocio.</p>
                <p className='text'>Te proponemos volver sobre las preguntas del autodiagnóstico, y reflexionar con tu equipo directivo, particularmente sobre aquéllas que resultaron en rojo o amarillo, y elabora un plan de trabajo de forma participativa*. La tarea es permanente y siempre encontrarás áreas de oportunidad.</p>
                <p className='text mb-8'>Te sugerimos iniciar de inmediato y volver a aplicar el autodiagnóstico periódicamente para evaluar el impacto de tus acciones de mejora (recomendamos al menos una vez al año). </p>

                <h3 className='subtitle_2 underline'>FORMACIÓN</h3>
                <p className='text bold'>Enriquece y alínea la cultura de tu empresa para darle unidad de visión y propósito. Fortalece el compromiso directivo.</p>
                <div className='mb-8'>
                    {formationLinks.map((link, i) => (
                        <div key={i} className='mb-4'>
                            <p><Link href={link.url} className='link'>{link.text}</Link> – {link.desc}</p>
                        </div>
                    ))}
                </div>

                <h3 className='subtitle_2 underline'>TRANSFORMACIÓN</h3>
                <p className='text bold'>Construye un sistema de gestión orientado a generar valor a tus grupos de interés, mediante los propios procesos de negocio.</p>
                <p className='text'>A partir de la definición ó revisión del marco normativo de tu empresa, reflexiona con tu equipo directivo sobre los resultados obtenidos con las herramientas de diagnóstico, elabora un plan de trabajo de forma participativa* e incentiva la generación de valor cada vez mayor a todos los grupos de interés. La tarea es permanente y siempre encontrarás áreas de oportunidad.</p>
                <div>
                    {formationLinks.map((link, i) => (
                        <div key={i} className='mb-4'>
                            <p><Link href={link.url} className='link'>{link.text}</Link> – {link.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="pt-8">
                    <Button text="Descargar resultados" variant="gradient" onClick={captureScreenAndDownloadPDF}/>
                </div>
            </div>
        </div>
    )
}

/* 


*/

export default Info