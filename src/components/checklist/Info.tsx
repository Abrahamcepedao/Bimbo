//interfaces
import { IPointsList, IPoint } from "@/utils/interfaces/types"

const points: IPointsList[] = [
    {
        title: 'Principios',
        points: [
            { title: 'Dignidad de la Persona', text: 'Todos somos únicos, irrepetibles e inteligentes, con un destino trascendente y tenemos derechos y deberes. La persona es el origen, centro y fin de la vida económica y social.' },
            { title: 'Bien Común', text: 'Es el bien individual que se logra en lo social, su objetivo es lograr la propia perfección y el progreso. El Estado a través de su autoridad contribuye a su cumplimiento, debiendo armonizar los intereses de toda esfera social.' },
            { title: 'Solidaridad', text: 'Determinación firme y perseverante por alcanzar el bien común. Su objetivo es edificar una sociedad digna de las personas, buscando ayudar sin esperar nada a cambio. Todos somos responsables de todos.' },
            { title: 'Subsidiariedad', text: 'Cada uno tiene el derecho de salir adelante por sus propios medios, pero se tiene en todo momento el apoyo de entidades con mayor desarrollo que ayuden en el mejoramiento de lo que le compete y, una vez alcanzado el desarrollo, se le da la libertad de seguir su camino.' },
            { title: 'Destino Universal de los Bienes', text: 'Los bienes están destinados para el uso de todas las personas, son la herencia de las generaciones pasadas, presentes y futuras. Incluyen bienes naturales, materiales, intelectuales y espirituales. Donde todos tengan acceso a estos, para lograr su realización personal y social. ' },
            { title: 'Participación', text: 'Actividades con las cuales los individuos contribuyen al desarrollo social, a través de su participación en la vida cultural, política, económica y social, a fin de contribuir al principio de subsidiaridad y en la construcción del bien común. ' },
        ],
        text: 'La aplicación de estos principios está guiada por cinco valores relacionados entre sí, valores que son inherentes a la dignidad de la persona humana y promueven su desarrollo.'
    },
    {
        title: 'Valores',
        points: [
            { title: 'Verdad', text: 'Actuando de acuerdo a las demandas objetivas de la moralidad, la empresa construye transparencia y confianza en sus prácticas y actividades, aspecto indispensable para una relación comercial exitosa y duradera.' },
            { title: 'Libertad', text: 'La expresión singular de cada persona, mediante la cual se puede cumplir con la verdadera vocación. Su conocimiento y práctica permite rechazar lo moralmente incorrecto.' },
            { title: 'Justicia', text: 'Constante y firme convicción de dar a cada quien lo que es debido, colocando las necesidades y requerimientos de otros a nivel propio, aportando al bien común. Se nutre de la solidaridad y el amor, dando origen a la fraternidad.' },
            { title: 'Paz', text: 'Se basa en la correcta comprensión de las personas, es fruto de la justicia y la solidaridad. Su objetivo es lograr vivir en unidad, construyendo una nueva y mejor sociedad. ' },
            { title: 'Felicidad', text: 'Entendida como el logro de la perfección, autorrealización y vida placentera. ES AMAR Y SER AMADO.' },
        ],
        text: 'Cómo un primer paso de este protocolo, se sugiere verificar el nivel de madurez en la aplicación de diversos elementos que son esperados en una empresa formal y bien gestionada:'
    }
]

const Info = () => {
    return (
        <div className="p-4">
            <div className="max-w-xl m-auto text-justify">
                <p className="text">La vocación del empresario es una noble vocación cuando se deja interpelar por un sentido trascendente de la vida, cuando además de agregar valor y generar utilidades de forma sostenible, busca desarrollar íntegramente a los hombres y mujeres que conforman su empresa y con los que se relaciona.</p>
                <p className="text">Esta forma de Gestión Empresarial Centrada en la Persona, además de ser responsable y contribuir al bien común, reduce riesgos y favorece relaciones sostenibles con los grupos de interés, confirmando la rentabilidad de los valores. No es tarea sólo de un departamento en la empresa, sino una visión y gestión integral, tiene que ser asimilada como parte de su cultura y hacerse vida orenetando cada decisión, política y proceso. Tiene que reflejar el ser de la empresa, su identidad y estar acorde a los valores que tiene definidos.</p>
                <p className="text">La USEM (UNIAPAC México), inspirada en el pensamiento social cristiano, propone este Protocolo como un camino de transformación permanente, siguiendo principios de reflexión, criterios de juicio y directrices de acción viables para el mejoramiento de la empresa comprometida con su responsabilidad social, atendiendo a  tres grandes etapas:</p>
                <p className="text mb-6"><b className="bold">DIAGNÓSTICO, FORMACIÓN y TRANSFORMACIÓN,</b> que se pueden atender de forma flexible y abarcando las circunstancias internas y externas de la empresa. La decisión de mejorar la empresa, la velocidad o ritmo del proceso y la implementación de las acciones conducentes le competen a cada empresario. </p>
                <div className="mb-8">
                    {points.map((point: IPointsList, i) => (
                        <div key={i}>
                            <h4 className="subtitle_2 underline mb-4">{point.title}:</h4>
                            <ul className="pl-4">
                                {point.points.map((p: IPoint, j) => (
                                    <li key={j} className="mb-2 list-disc">
                                        <b>{p.title}</b>: {p.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="text">Cómo un primer paso de este protocolo, se sugiere verificar el nivel de madurez en la aplicación de diversos elementos que son esperados en una empresa formal y bien gestionada:</p>
            </div>
        </div>
    )
}

export default Info