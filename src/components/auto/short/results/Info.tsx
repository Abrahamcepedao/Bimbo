'use client'

//react
import { useRef } from 'react'

//next
import Link from "next/link"
import { useRouter } from 'next/navigation'

//components
import IndexTable from "../../reusable/IndexTable"
import Button from '@/components/reusable/buttons/Button'

//pdf canvas
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Info = () => {
    //router
    const { push } = useRouter()

    //pdf
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
                <p className="text">Las preguntas del autodiagnóstico hacen referencia al tipo de relación que lleva la empresa con sus grupos de interés, en cada una de las tres dimensiones o ámbitos de toda persona, según Aristóteles: TENER, SER y TRASCENDER (Ver Documento <Link href='https://bit.ly/3dEqt28' target="_blank" className="link">“La Rentabilidad de los Valores”</Link>):</p>
                <ul>
                    <li>TENER Necesidades materiales: Generación y Distribución de la Riqueza.</li>
                    <li>SER Necesidades humanas: Calidad de Vida.</li>
                    <li>TRASCENDER Necesidades trascendentes: Ética y Transparencia.</li>
                </ul>
                <p className="text">Dependiendo de qué tanto contribuye la empresa al bien de cada grupo de interés en cada dimensión, el valor de la respuesta será 1, 2 ó 3.</p>
                <p className="text">Así, con base en tus respuestas al autodiagnóstico, obtienes en esta matriz una vista rápida, completa, estructurada y precisa; una mejor comprensión de la realidad de tu empresa a partir de los Índices de Sostenibilidad, Congruencia y Bien Común, y la identificación de 24 áreas en las que podrás desarrollar tu gestión empresarial más centrado en atender de forma integral las necesidades de las personas en tu ámbito de influencia.</p>
                <h3 className="subtitle_2">INTERPRETACIÓN Y ANÁLISIS DE RESULTADOS</h3>
                <p className="text">Para comenzar tu análisis, te sugerimos observar el índice de bien común, el cual, de una manera agregada, concentra los resultados de toda la matriz; posteriormente puedes analizar horizontal y verticalmente los Índices de Sostenibilidad y de Congruencia, para finalmente revisar cada una de las celdas interiores de la matriz.</p>
                <h3 className="bold">Índice de Sostenibilidad</h3>
                <p className="text">Indica la capacidad de la empresa para entregar valor de manera continua a los grupos de interés con los que se relaciona. La permanencia de la empresa en el largo plazo puede depender de cuán satisfactoria sea la respuesta a las expectativas de dichos grupos relacionados.</p>
                <p className="text">El valor máximo de este índice es de 24 puntos para cada Dimensión y el mínimo 8 puntos.</p>
                <IndexTable title="Índice de Sostenibilidad" label1="3 a 4" label2="5 a 7" label3="8 a 9" />
                
                <h3 className="bold">Índice de Congruencia</h3>
                <p className="text">Indica el grado de madurez de la Gestión Empresarial centrada en la Persona de la empresa medida como la respuesta a las expectativas de las personas que conforman los grupos de interés para satisfacer sus necesidades materiales, humanas y trascendentes.</p>
                <p className="text">El valor máximo de este índice es de 24 puntos para cada Dimensión y el mínimo 8 puntos.</p>
                <IndexTable title="Índice de Congruencia" label1="8 a 13" label2="14 a 19" label3="20 a 24" />
                
                <h3 className="bold">Índice de Bien Común</h3>
                <p className="text">Refleja el grado de contribución de la empresa al bien común. Suma los valores en las filas del índice de sostenibilidad y en las columnas del Índice de Congruencia, y el resultado es normalizado a una escala de 100 puntos.</p>
                <IndexTable title="Índice de Bien Común" label1="33 a 59" label2="60 a 79" label3="80 a 100" />

                <h3 className="bold">Felicidades</h3>
                <p className="text">Un índice de bien común verde es reflejo de una gestión centrada en la persona. A mayor el indicador, mayor la madurez, la sostenibilidad y la congruencia. Para mantenerlo y/o mejorarlo, asegúrate de alinear la cultura de la empresa, profundizando la formación de tus colaboradores en todos los niveles de la organización, haciéndoles partícipes e incentivando la generación de valor amplio mediante los propios procesos de negocio. Te proponemos volver sobre las preguntas del autodiagnóstico, y reflexionar con tu equipo directivo, particularmente sobre aquéllas que resultaron en rojo o amarillo, y elabora un plan de trabajo de forma participativa*. La tarea es permanente y siempre encontrarás áreas de oportunidad. Te sugerimos aplicar el autodiagnóstico periódicamente, recomendamos al menos una vez al año, para evaluar el impacto de tus acciones de mejora y te invitamos a compartir tus buenas prácticas de Gestión Empresarial Centrada en la Persona© en el siguiente sitio: <Link href='https://bit.ly/3spE2Z1' target="_blank" className="link">https://bit.ly/3spE2Z1</Link></p>

                <div className="pt-8">
                    {/* <Button text="Descargar resultados" variant="gradient" onClick={captureScreenAndDownloadPDF}/> */}
                    <Button text="Continuar" variant="gradient" onClick={() => push('/auto/profound/select_stkhs')}/>
                </div>
            </div>
        </div>
    )
}

/* 


*/

export default Info