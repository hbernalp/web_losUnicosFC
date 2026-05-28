import { SEOHead } from '@/shared/components/SEOHead'
import { PageHero } from '@/shared/components/PageHero'
import { EmptyState } from '@/shared/components/EmptyState'
import { Calendar, Trophy } from 'lucide-react'

export function PartidosPage() {
  return (
    <>
      <SEOHead title="Partidos" description="Calendario de partidos y resultados del Club Los Unicos FC" />
      <PageHero title="Partidos" subtitle="Calendario y resultados de la temporada" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold font-impact text-surface-100 mb-6">Proximos Partidos</h2>
        <EmptyState
          icon={<Calendar className="h-10 w-10" />}
          title="No hay partidos programados"
          description="Los proximos encuentros apareceran aqui."
        />
      </section>

      <section className="bg-surface-900 border-y border-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold font-impact text-surface-100 mb-6">Resultados</h2>
          <EmptyState
            icon={<Trophy className="h-10 w-10" />}
            title="No hay resultados disponibles"
            description="Los resultados de partidos anteriores apareceran aqui."
          />
        </div>
      </section>
    </>
  )
}
