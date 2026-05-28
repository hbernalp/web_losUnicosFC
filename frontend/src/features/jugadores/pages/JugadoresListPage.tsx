import { SEOHead } from '@/shared/components/SEOHead'
import { PageHero } from '@/shared/components/PageHero'
import { EmptyState } from '@/shared/components/EmptyState'
import { Users } from 'lucide-react'

export function JugadoresListPage() {
  return (
    <>
      <SEOHead title="Plantilla" description="Plantilla oficial del Club Los Unicos FC" />
      <PageHero title="Plantilla" subtitle="Conoce a nuestros jugadores" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {['Porteros', 'Defensas', 'Centrocampistas', 'Delanteros'].map((pos) => (
          <div key={pos}>
            <h2 className="text-2xl font-bold font-impact text-surface-100 mb-6">{pos}</h2>
            <EmptyState
              icon={<Users className="h-10 w-10" />}
              title={`No hay ${pos.toLowerCase()} registrados`}
              description="Proximamente."
            />
          </div>
        ))}
      </section>
    </>
  )
}
