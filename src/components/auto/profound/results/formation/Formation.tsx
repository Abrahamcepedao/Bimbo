'use client'

//next
import { useRouter } from "next/navigation"
import Link from "next/link"

//components
import Button from '@/components/reusable/buttons/Button'

//formation links
const formationLinks = [
    { url: 'https://bit.ly/3dEqt28', text: 'DIFOSO', desc: 'Diplomado Internacional para Dirigentes de Empresa' },
    { url: 'https://bit.ly/3dEqt28', text: 'CISO', desc: 'Curso de Iniciación Social' },
    { url: 'https://bit.ly/3dEqt28', text: 'TE', desc: 'Taller de Empresa' },
]

const points: string[] = [
    'Enriquece y alínea la cultura de tu empresa para darle unidad de visión y propósito. Fortalece el compromiso directivo.',
]

const Formation = () => {
    //router
    const { push } = useRouter()

    return (
        <div className="py-8 px-4">
            <div className="max-w-2xl m-auto text-justify">
                <h3 className="subtitle_2 underline">FORMACIÓN</h3>
                {points.map((point: string, i) => (
                    <p className="text" key={i}>{point}</p>
                ))}
                {formationLinks.map((link, i) => (
                    <div key={i} className='mb-4'>
                        <p><Link href={link.url} className='link'>{link.text}</Link> – {link.desc}</p>
                    </div>
                ))}
                <Button text="Continuar" variant="gradient" onClick={() => push('/auto/profound/results/bibliography')}/>
            </div>
        </div>
    )
}

export default Formation