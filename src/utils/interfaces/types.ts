/* <-------questions-------> */
interface IValues {
    subsidiaridad?: number;
    solidaridad?: number;
    dignidad?: number;
    destino?: number;
    bienDentro?: number;
    bienFuera?: number;
    etica?: number;
    calidad?: number;
    materiales?: number;
}

interface IAnswer {
    id: string;
    answer: string;
    values?: IValues,
    value?: number
}

interface IQuestion {
    id: string;
    label?: string;
    dim?: string;
    question: string;
    answers: IAnswer[];
}

interface IStkh {
    id: string;
    name: string;
    questions: IQuestion[];
}

interface IQuestionAnswer {
    stkhId: string;
    questionId: string;
    dimId?: string;
    answerId: string;
    values?: IValues | null;
    value?: number
}

/* <-------inputs-------> */
interface IInput {
    name: string,
    label?: string,
    placeholder?: string,
    required: boolean,
    variant: 'outlined' | 'filled',
    colSpan: string,
    type: string,
    value: string | ICheckItem[],
    options?: IOption[]
}

interface IOption {
    value: string;
    label: string;
}

interface ICheckItem {
    label: string;
    checked: boolean;
}

interface IChecklistItem {
    id: string;
    title: string;
    answer: number;
}

interface IChecklistAnswer {
    id: number;
    answer: string;
}


/* <-------table-------> */
interface ITable {
    data: ITableData[];
    sum_etica: number;
    sum_etica_max?: number;
    sum_calidad: number;
    sum_calidad_max?: number;
    sum_riqueza: number;
    sum_riqueza_max?: number;
    sum_total: number;
    sum_total_max?: number;
}

interface ITableData {
    stkh: string;
    riqueza: number;
    riqueza_max?: number;
    etica: number;
    etica_max?: number;
    calidad: number;
    calidad_max?: number;
    sum_total: number;
    sum_total_max?: number;
}

/* <-------text-------> */
interface IPointsList {
    title: string;
    points: IPoint[];
    text: string;
}
interface IPoint {
    title: string;
    text: string;
}

export type {
    IQuestion,
    IAnswer,
    IValues,
    IStkh,
    IQuestionAnswer,
    IInput,
    IOption,
    ICheckItem,
    IChecklistItem,
    IChecklistAnswer,
    IPointsList,
    IPoint,
    ITable,
    ITableData
}