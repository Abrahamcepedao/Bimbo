//react
import { ChangeEvent } from 'react';

//mui
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

//Interfaces
import { IChecklistItem, IChecklistAnswer } from '@/utils/interfaces/types';


interface Props {
    answer: IChecklistItem,
    answers: IChecklistAnswer[],
    onChange: (e: ChangeEvent<HTMLInputElement>, _: string) => void,
}

export default function RadioCheck({ answer, answers, onChange }: Props) {

    return (
        <RadioGroup
            aria-labelledby="type"
            name="type"
            value={answer.answer}
            onChange={(e) => onChange(e, answer.id)}
            className='grid grid-cols-5 gap-4 w-full h-full'
        >
            {/* <FormControlLabel value="0" control={<Radio style={{ color: formData.type === "0" ? "rgb(36, 153, 239)" : '#F0F5FE' }} />} label="Administrador" /> */}
            {answers.map((item, i) => (
                <div key={i} className='flex_c_center'>
                    <Radio value={item.id} style={{ color: answer.answer === item.id ? "rgb(36, 153, 239)" : '#F0F5FE' }} />
                </div>
            ))}

        </RadioGroup>
    );
}