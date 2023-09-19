'use client'

//next
import { useRouter } from "next/navigation"
import Link from "next/link"

//components
import Button from '@/components/reusable/buttons/Button'

//formation links
const formationLinks = [
    { url: 'https://www.vatican.va/roman_curia/pontifical_councils/justpeace/documents/rc_pc_justpeace_doc_20060526_compendio-dott-soc_sp.html', text: 'Compendio de la Doctrina Social de la Iglesia. Pontificio Consejo «Justicia y Paz», Vaticano, 2005. ' },
    { text: 'Caravedo, Baltazar. Responsabilidad Social, una nueva forma de Gerencia, CIUPSASE-PERÚ 2021 Lima, 2001.' },
    { text: 'Chomali, Fernando & Majluf, Nicolas. Ética & Responsabilidad Social de la Empresa, El Mercurio, Santiago de Chile, 2007.' },
    { text: 'Cortina, Adela. Ética De Las Empresas, Editorial Trotta, Madrid, 2000.' },
    { text: 'Fernández Gago, Roberto. Administración de la Responsabilidad Social Corporativa, Thomson Paraninfo, Madrid, 2005.' },
    { text: 'Geissler, Peter. Gestión por Valores, Panorama, México, 2007.' },
    { text: 'Loza Macías, Manuel. Actitudes Sociales para Transformar la Empresa, Confederación USEM, México, 2004.' },
]

const Bibliography = () => {
    //router
    const { push } = useRouter()

    return (
        <div className="py-8 px-4">
            <div className="max-w-2xl m-auto text-justify">
                <h3 className="subtitle_2 underline">Bibliografía</h3>
                {formationLinks.map((link, i) => (
                    <div key={i} className='mb-4'>
                        <p>{link.url && (<Link href={link.url} className='link'>Enlace</Link>)} – {link.text}</p>
                    </div>
                ))}
                <Button text="Continuar" variant="gradient" onClick={() => push('/auto/profound/results/transformation')}/>
            </div>
        </div>
    )
}

export default Bibliography