import { useParams } from 'react-router-dom'
import { SEOHead } from '@/shared/components/SEOHead'
import { PageHero } from '@/shared/components/PageHero'

export function AlbumDetailPage() {
  const { albumId } = useParams()

  return (
    <>
      <SEOHead title="Album" />
      <PageHero title={`Album`} />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-surface-400">Album #{albumId} proximamente.</p>
      </section>
    </>
  )
}
