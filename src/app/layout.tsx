//css
import './globals.css'

//next
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

//provider
import Providers from './provider'

//layout
import LandingLayout from '@/components/layout/LandingLayout'

const dm_sans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Autodiagnóstico de Sostenibilidad y Congruencia',
  description: 'Autodiagnóstico de Sostenibilidad y Congruencia - Primer paso de las empresas hacia la responsabilidad social empresarial',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Providers>
          <LandingLayout>
            {children}
          </LandingLayout> 
        </Providers> 
      </body>
    </html>
  )
}
