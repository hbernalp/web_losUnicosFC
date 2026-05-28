import { SEOHead } from '@/shared/components/SEOHead'
import { PageHero } from '@/shared/components/PageHero'
import { EmptyState } from '@/shared/components/EmptyState'
import { Newspaper } from 'lucide-react'

export function NoticiasListPage() {
  return (
    <>
      <SEOHead title="Noticias" description="Ultimas noticias del Club Los Unicos FC" />
      <PageHero title="Noticias" subtitle="Mantente al dia con las ultimas novedades del club" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <EmptyState
          icon={<Newspaper className="h-12 w-12" />}
          title="No hay noticias publicadas"
          description="Proximamente encontraras aqui las ultimas noticias del club."
        />
      </section>
    </>
  )
}
