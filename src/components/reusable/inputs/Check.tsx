//react
import { ChangeEvent } from 'react';

//mui
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

//mui - icons
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

//Interfaces
import { IInput, ICheckItem } from '@/utils/interfaces/types';

interface Props {
    inp: IInput,
    onChange: (e: ChangeEvent<HTMLInputElement>, i: number) => void,
}

export default function Check({ inp, onChange }: Props) {

    return (
        <div className='mb-2'>
            <p className='label'>{inp.label}</p>
            <FormGroup>
            {inp.options?.map((option, i) => (
                <FormControlLabel
                    key={i}
                    control={<Checkbox icon={<RadioButtonUncheckedRoundedIcon className='text-white_primary'/>} checkedIcon={<CheckCircleRoundedIcon className='text-green_primary'/>} checked={(inp.value as ICheckItem[])[i].checked} onChange={(e) => {onChange(e, i)}} name={option.label} />}
                    label={option.label}
                    className='text-white_primary'
                />
            ))}
            </FormGroup>
        </div>
    );
}