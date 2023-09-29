//interfaces
import { IChecklistItem, IChecklistAnswer } from "../interfaces/types"

const checklist: IChecklistItem[] = [
    { id: '1', title: 'Valores, principios y código de conducta.', answer: -1 },
    { id: '2', title: 'Misión y visión.', answer: -1 },
    { id: '3', title: 'Planeación estratégica formal y participativa, que incluye: análisis FODA, objetivos estratégics, programas, presupuestos, indicadores (Balanced Scorecard o similares), reporte periódicos.', answer: -1 },
    { id: '4', title: 'Cartas de organización, descripciones de puestos para todos los colaboradores y reglamentos internos.', answer: -1 },
    { id: '5', title: 'Sistema formal de calidad, control estadístico de proceso y/o comités de información, participación y solución de problemas e innovación y creatividad.', answer: -1 },
    { id: '6', title: 'Sistema de evaluación y retroalimentación de la actuación.', answer: -1 },
    { id: '7', title: 'Balance social difundido ampliamente.', answer: -1 },
    { id: '8', title: 'Encuestas de clientes y ambiente laboral.', answer: -1 },
    { id: '9', title: 'Sistemas de participación en la gestión llegando hasta bonos por resultados a todo el personal.', answer: -1 },
    { id: '10', title: 'Proyectos de filantropía con participación del personal.', answer: -1 },
]

/* const checklist_answers: IChecklistAnswer[] = [
    { id: 0, answer: 'No se tiene' },
    { id: 1, answer: 'Se tiene pero no se conoce' },
    { id: 2, answer: 'Se tiene y se conoce' },
    { id: 3, answer: 'Se tiene y se practica pero se evalúa' },
    { id: 4, answer: 'Esta formalizado, se practica y se evalúa' },
] */

const checklist_answers: IChecklistAnswer[] = [
    { id: 0, answer: 'Ninguno' },
    { id: 1, answer: 'Consciente' },
    { id: 2, answer: 'Conocido' },
    { id: 3, answer: 'Aplicado' },
    { id: 4, answer: 'Optimizado' },
]

export { checklist, checklist_answers }