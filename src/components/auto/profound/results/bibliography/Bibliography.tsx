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
    { text: 'Loza Macías, Manuel. Compromiso y Acción, Confederación USEM, México, 2007.' },
    { text: 'Milanés García, Salvador. Responsabilidad Social de la Riqueza, Confederación USEM, México, 2004.' },
    { text: 'Moreda de Lecea, Carlos. Consideraciones Éticas Sobre Aspectos Económicos, Instituto Mexicano de Doctrina Social Cristina, México, 2002.' },
    { text: 'Perdiguero, Tomás. La Responsabilidad Social de las Empresas en un Mundo Global, Editorial Anagrama, Barcelona, 2003.' },
    { text: 'Servitje, Roberto. Bimbo Estrategia de Éxito Empresarial, Prentice Hall, México, 2003.' },
    { text: 'Servitje, Lorenzo. La vida económica, la empresa y los empresarios, Noriega, México, 2007.' },
    { text: 'Teixidó Soledad & Chavarri, Reinalina. La Acción Filantrópica como un elemento de la RSE-El caso chileno, PROhumana, Santiago de Chile 2000.' },
    { text: 'Harvard Business Review on Corporate Responsibility, Boston, Mass., Harvard Business School, 2003.' },
    { text: 'Responsabilidad Social de la Empresa, ASE, Madrid, 2004.' },
    { text: 'Solidaridad y compromiso social en la sociedad civil, ADEC, Asunción, 2000.' },
    { text: 'Mario Raich, Simon L. Dolan. Más Allá. Empresa y Sociedad en un mundo en transformación, Profit Editorial, 2009.' },
    { text: 'La promoción de Empresas Sostenibles. Conferencia Internacional del Trabajo. 96ª Reunión 2007, OIT, 2007.' },
    { text: 'Navarro García, Fernando. Responsabilidad Social Corporativa. Teoría y Práctica. ESIC Editorial, 2008.' },
    { text: 'Martínez Herrera, Horacio. El marco ético de la Responsabilidad Social Empresarial, Editorial Pontificia Universidad Javeriana, 2005.' },
    { text: 'Córdoba Largo, Alejandro. El corazón de las empresas. Responsabilidad Social Corporativa y Conciliación de la vida profesional y personal. ESIC Editorial, 2007.' },
    { text: 'Perdiguero, Tomás y García Reche, Andrés. La Responsabilidad Social de las Empresas y los nuevos desafíos de la gestión Empresarial, Editores, PUV, 2005.' },
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
                        <p className="text-white_primary">{link.url && (<Link href={link.url} className='link'>Enlace</Link>)} – {link.text}</p>
                    </div>
                ))}
                <Button text="Continuar" variant="gradient" onClick={() => push('/auto/profound/results/transformation')}/>
            </div>
        </div>
    )
}

export default Bibliography