//next

//mui
import { IconButton } from '@mui/material';

//mui -icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bg-back_primary px-2 py-8">
            <div className="max-w-4xl m-auto border-t border-white flex_b_center">
                <div className='grid grid-cols-4 gap-2'>
                    <IconButton><FacebookIcon className='icon'/></IconButton>
                    <IconButton><TwitterIcon className='icon'/></IconButton>
                    <IconButton><LinkedInIcon className='icon'/></IconButton>
                    <IconButton><EmailRoundedIcon className='icon'/></IconButton>
                </div>
                <div>
                    <Link href='/aviso' className='bold text-xs sm:text-sm underline text-white_primary'>
                        Aviso de privacidad
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer