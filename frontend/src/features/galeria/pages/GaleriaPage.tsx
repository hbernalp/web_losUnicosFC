import { SEOHead } from '@/shared/components/SEOHead'
import { PageHero } from '@/shared/components/PageHero'
import { Card, CardContent } from '@/shared/components/Card'

export function GaleriaPage() {
  return (
    <>
      <SEOHead title="Galeria" description="Galeria de imagenes del Club Los Unicos FC" />
      <PageHero title="Galeria" subtitle="Momentos y recuerdos de nuestro club" />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} hover>
              <div className="aspect-[4/3] bg-surface-800" />
              <CardContent>
                <h3 className="font-bold text-surface-100">Album #{i}</h3>
                <p className="text-xs text-surface-500 mt-1">0 fotos</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  )
}
