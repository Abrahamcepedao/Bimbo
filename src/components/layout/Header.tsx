'use client'

//next
import Image from "next/image"

//mui
import { IconButton } from "@mui/material";

//mui icons
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//utils
import { openInNewTab } from "@/utils/functions/utilities"

//icons
const icons = [
    { icon: <TwitterIcon />, link: 'https://twitter.com/confe_usem?lang=es' },
    { icon: <FacebookIcon />, link: 'https://www.facebook.com/USEM.Confederacion/' },
    { icon: <YouTubeIcon />, link: 'https://www.youtube.com/user/USEMConfederacion' },
    { icon: <InstagramIcon />, link: 'https://www.instagram.com/confederacionusem/' },
    { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/company/confederaci-n-usem-a-c-/' },
]

const Header = () => {
    return (
        <div className="bg-white_primary flex_b_center p-4">
            <div className="mr-2">
                <Image src="/img/uniapac.png" width={200} height={200} className="w-[150px] sm:w-[250px]" alt="Uniapac" />
            </div>
            <div className="grid grid-cols-5">
                {icons.map((item, index) => (
                    <IconButton key={index} onClick={() => openInNewTab(item.link)} className="dark_icon">
                        {item.icon}
                    </IconButton>
                ))}
            </div>
        </div>
    )
}

export default Header