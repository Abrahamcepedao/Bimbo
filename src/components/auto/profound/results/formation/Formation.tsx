'use client'

//next
import { useRouter } from "next/navigation"

//components
import Button from '@/components/reusable/buttons/Button'

const points: string[] = [
    'Enriquece y alínea la cultura de tu empresa para darle unidad de visión y propósito. Fortalece el compromiso directivo.',
]

const programs: any[] = [
    {
        title: 'Diplomado en Formación Social',
        public: 'Empresarios y dirigentes de empresa.',
        objective: 'Desarrollar un liderazgo con sentido humano que influya directamente en el crecimiento de las empresas y la sociedad, así como construir un modelo de gestión directivo para aplicar las mejores prácticas dentro y fuera de la empresa, para mantener el compromiso con todos sus grupos de interés.',
        duration: '80 horas en 20 semanas.',
        thematic: [
            'Principios Sociales Universales',
            'Gestión Empresarial',
            'Influencia Social'
        ]
    },
    {
        title: 'Curso de Iniciación Social',
        public: 'Mandos intermedios - gerentes, directores o jefes de área, supervisores y/o profesionistas independientes.',
        objective: 'Profundizar en los Principios Sociales Universales aplicables a la empresa, al trabajo y a la familia, para modificar conductas y alinearlas a la cultura organizacional.',
        duration: '24 horas en ocho semanas.',
        thematic: [
            'Principios Sociales Universales'
        ]
    },
    {
        title: 'Taller USEM Empresa',
        public: 'Todos los colaboradores de la empresa, con énfasis en los mandos con colaboradores a cargo.',
        objective: 'Obtener una visión más clara de lo que es una empresa y ser capaz de identificar el papel que ésta tiene en la vida y desarrollo de la comunidad, favoreciendo el proceso de identificación de la persona con la actividad de la empresa.',
        duration: '24 horas en tres días.',
        thematic: [
            'Fundamentos de empresa'
        ]
    },
    {
        title: 'Taller USEM Jefatura',
        public: 'Mandos intermedios y personas que tengan colaboradores a su cargo.',
        objective: 'Conocer la filosofía del liderazgo desde la empresa, sus principios, propósitos, lo que desea de “su gente”, el compromiso con la sociedad, la visión a futuro y la participación que logra de sus colaboradores.',
        duration: '16 horas en dos días.',
        thematic: [
            'Empresa y valores',
            'Liderazgo'
        ]
    },
    {
        title: 'Taller USEM Persona',
        public: 'Mandos intermedios y personas que tengan colaboradores a su cargo.',
        objective: 'Revisar los valores fundamentales que permiten a la persona una superación continua y el establecimiento de relaciones humanas más significativas en el trabajo, la familia y la sociedad.',
        duration: '24 horas en tres días.',
        thematic: [
            'Valores',
            'Relaciones humanas significativas en el trabajo, la familia y la sociedad'
        ]
    },
    {
        title: 'Taller Encuentro de 3 mundos',
        public: 'Todos los colaboradores de la empresa.',
        objective: 'Analizar de forma integral los tres elementos que forman parte de todo ser humano: persona, familia y trabajo.',
        duration: '12 horas en dos días.',
        thematic: [
            'Persona, familia y trabajo',
            'Cultura organizacional'
        ]
    },
    {
        title: 'Taller de Relaciones Laborales Colaborativas',
        public: 'Dueños de medianas y pequeñas empresas, responsables de relaciones laborales, abogados en relaciones laborales, mandos medios y líderes sindicales.',
        objective: 'Concientizar sobre la iniciativa de ley en materia laboral y los acciones que representan para el empresario. Identificar la importancia de la participación de todos los colaboradores e instituciones para un bien común. Potencializar el diálogo constructivo y la negociación efectiva. Comprender y visualizar los mecanismos alternos para vivir en la empresa la Subsidiariedad y la Participación.',
        duration: '16 horas en dos días.',
        thematic: [
            'Reforma a la Ley Federal del Trabajo y el Convenio 98 de la OIT',
            'Derechos y deberes en una relación laboral',
            'NOM035',
            'Modelo de participación para formar equipos leales, sólidos y productivos'
        ]
    },
    {
        title: 'Programa Introducción al Liderazgo Social',
        public: 'Jóvenes empresarios, segundas generaciones y direcciones de área con perfil emprendedor.',
        objective: 'Proporcionar bases sólidas y criterios de acción para jóvenes que buscan incorporar en la empresa, la toma de decisiones en un marco de valores y principios inmersos en mundo del trabajo, enfocado a la construcción de empresas sustentables, altamente productivas y plenamente humanas.',
        duration: '30 horas en 10 sesiones.',
        thematic: [
            'Principios sociales universales',
            'Valores',
            'Liderazgo social'
        ]
    },
]


const Formation = () => {
    //router
    const { push } = useRouter()

    return (
        <div className="py-8 px-4">
            <div className="max-w-2xl m-auto text-justify">
                <h3 className="subtitle_2 underline">FORMACIÓN</h3>
                {points.map((point: string, i) => (
                    <p className="text" key={i}>{point}</p>
                ))}
                {programs.map((program: any, i) => (
                    <div className="my-4 bg-trans_gray p-4 rounded-md" key={i}>
                        <h3 className="subtitle_2 underline">{program.title}</h3>
                        <p className="text"><span className="bold">Público:</span> {program.public}</p>
                        <p className="text"><span className="bold">Objetivo:</span> {program.objective}</p>
                        <p className="text"><span className="bold">Duración:</span> {program.duration}</p>
                        <p className="text"><span className="bold">Temática:</span> </p>
                        <ul className="list-disc list-inside">
                            {program.thematic.map((thematic: string, i: number) => (
                                <li key={i} className="text">{thematic}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="mb-4">
                    <p className="label">Para mayores informes contactar a la Asociación USEM de su localidad.</p>
                </div>
                <Button text="Continuar" variant="gradient" onClick={() => push('/auto/profound/results/bibliography')}/>
            </div>
        </div>
    )
}

export default Formation