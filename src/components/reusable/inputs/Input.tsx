//react
import React, { useState, useRef } from 'react';

//mui - icons
import { Visibility, VisibilityOff } from '@mui/icons-material';

//utils
import { validateEmail } from '@/utils/functions/utilities';

//interfaces
import { IInput } from '@/utils/interfaces/types';
interface Props {
    inp: IInput;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

let variants = {
    'outlined': 'border-white',
    'filled': 'border-transparent',
};

let rings = {
    'outlined': 'ring-white',
    'filled': 'ring-transparent'
}
let text = {
    'outlined': 'text-white',
    'filled': 'text-black'
}

export default function Input({ inp, onChange }: Props) {
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false); 
    const [emailError, setEmailError] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onFocus = () => {
        setFocused(true);
        setEmailError(false);
    };

    const onBlur = () => {
        setFocused(false);
        if (inp.type === 'email' && inp.value && !validateEmail(inp.value as string)) setEmailError(true);
        else setEmailError(false);
    };

    return (
        <div className='mb-2'>
            {inp.label && <p className='label'>{inp.label}{inp.required ? '*' : ''}</p>}
            <div
                className={`relative border p-2 rounded-md flex justify-center items-center ${variants[inp.variant]} ${
                    focused ? `ring-2 ${rings[inp.variant]}` : ''} ${emailError ? '!border-red-500 !ring-red-500' : ''}`}
            >
                <input
                    ref={inputRef}
                    type={showPassword ? 'text' : inp.type}
                    name={inp.name}
                    placeholder={inp.placeholder}
                    value={inp.value as string}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className={`${text[inp.variant]} bg-transparent outline-none w-full ${inp.type === 'password' ? 'pr-10' : ''}`}
                />
                {inp.type === 'password' && (
                    <>
                        {showPassword ? <VisibilityOff className={`${text[inp.variant]}`} onClick={togglePasswordVisibility}/> : <Visibility className={`${text[inp.variant]}`} onClick={togglePasswordVisibility}/>}
                    </>
                )}
            </div>
            {(emailError) && (
                <span className="text-red-500 text-xs">{'Introduzca un correo válido'}</span>
            )}
        </div>
    );
}