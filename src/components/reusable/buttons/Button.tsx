interface Props {
    text: string,
    onClick?: () => void,
    disabled?: boolean,
    variant: 'gradient' | 'primary' | 'cancel',
    type?: 'button' | 'submit' | 'reset'
}

let variants = {
    'gradient': 'bg-grad_primary',
    'primary': 'bg-primary',
    'cancel': 'bg-cancel',
}

let texts = {
    'gradient': 'text-white_primary',
    'primary': 'text-white',
    'cancel': 'text-white',
}

export default function Button ({ text, disabled, onClick, variant, type }: Props) {
    return (
        <button 
            type={type ? type : 'button'} 
            disabled={disabled}
            className={`w-full scale p-2 rounded-md bold ${texts[variant]} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={onClick}>{text}
        </button>
    )
}