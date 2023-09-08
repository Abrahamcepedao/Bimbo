//react
import { ChangeEvent } from 'react';

//mui
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

//Interfaces
import { IInput, IQuestionAnswer, IAnswer } from '@/utils/interfaces/types';


interface Props {
    answer: IQuestionAnswer,
    answers: IAnswer[],
    onChange: (e: ChangeEvent<HTMLInputElement>, _: string) => void,
}

export default function RadioInp({ answer, answers, onChange }: Props) {

    return (
        <div className='mb-2'>
            <RadioGroup
                aria-labelledby="type"
                name="type"
                value={answer.answerId}
                onChange={(e) => onChange(e, answer.questionId)}
            >
                {/* <FormControlLabel value="0" control={<Radio style={{ color: formData.type === "0" ? "rgb(36, 153, 239)" : '#F0F5FE' }} />} label="Administrador" /> */}
                {answers.map((item, i) => (
                    <div className='flex justify-start items-center'>
                        <Radio value={item.id} style={{ color: answer.answerId === item.id ? "rgb(36, 153, 239)" : '#F0F5FE' }} />
                        <p>{item.answer}</p>
                    </div>
                ))}

            </RadioGroup>
        </div>
    );
}