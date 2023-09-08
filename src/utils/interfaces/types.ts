/* <-------questions-------> */
interface IValues {
    subsidiaridad?: number;
    solidaridad?: number;
    dignidad?: number;
    destino?: number;
    bienDentro?: number;
    bienFuera?: number;
}

interface IAnswer {
    id: string;
    answer: string;
    values: IValues
}

interface IQuestion {
    id: string;
    label: string;
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
    answerId: string;
    values: IValues | null;
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

export type {
    IQuestion,
    IAnswer,
    IValues,
    IStkh,
    IQuestionAnswer,
    IInput,
    IOption,
    ICheckItem
}