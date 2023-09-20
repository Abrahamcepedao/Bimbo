'use client'

//react
import { useState } from 'react'

//Mui
import { MenuItem } from '@mui/material';

//Mui - icons
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

//components
import { MenuWrapper } from '@/components/reusable/menus/Menu';

//interfaces
import { IOption, IInput } from '@/utils/interfaces/types';

interface Props {
    inp: IInput,
    onChange: (val: string, name: string) => void,
}

const Select = ({ inp, onChange }: Props) => {
    //useState - mode (rubro)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    /* handle mode menu click */
    const handleModeClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)

    /* handle mode menu close */
    const handleModeClose = () => setAnchorEl(null)


    return (
        <>
            <div className='w-full'>
                {inp.label && <p className='label'>{inp.label}{inp.required ? '*' : ''}</p>}
                <div 
                    className='text-sm mr-4 w-full border border-primary rounded-lg p-2 flex_b_center cursor-pointer'
                    onClick={(e) => {handleModeClick(e)}}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <p className='text-base text-white_primary'>{inp.value as string}</p>
                    <ArrowDropDownRoundedIcon className='text-white_primary'/>
                </div>
            </div>

            <MenuWrapper
                id="account-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleModeClose}

            >
                {inp.options?.map((option: IOption, i: number) => (
                    <MenuItem key={i} onClick={() => {onChange(option.value, inp.name); setAnchorEl(null)}}>
                        <p>{option.label}</p>
                    </MenuItem>
                ))}
            </MenuWrapper>
        </>
    )
}

export default Select