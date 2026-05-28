import { useParams } from 'react-router-dom'
import { SEOHead } from '@/shared/components/SEOHead'
import { PageHero } from '@/shared/components/PageHero'

export function NoticiaDetailPage() {
  const { slug } = useParams()

  return (
    <>
      <SEOHead title="Noticia" />
      <PageHero title={slug || 'Noticia'} />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert max-w-none">
          <p className="text-surface-400">Contenido de la noticia proximamente.</p>
        </div>
      </section>
    </>
  )
}
