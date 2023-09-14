//interfaces
import { IChecklistItem, IChecklistAnswer } from "../interfaces/types"

const checklist: IChecklistItem[] = [
    { id: 'mision', title: 'Misión', answer: -1 },
    { id: 'vision', title: 'Visión', answer: -1 },
    { id: 'proposito', title: 'Propósito', answer: -1 },
    { id: 'codigo', title: 'Código de conducta', answer: -1 },
    { id: 'principios', title: 'Principios y valores', answer: -1 },
    { id: 'organigrama', title: 'Organigrama y funciones', answer: -1 },
]

const checklist_answers: IChecklistAnswer[] = [
    { id: 0, answer: 'No se tiene' },
    { id: 1, answer: 'Se tiene pero no se conoce' },
    { id: 2, answer: 'Se conoce pero no vive' },
    { id: 3, answer: 'Se conoce y se vive' },
    { id: 4, answer: 'Se mide y actualiza' },
]

export { checklist, checklist_answers }