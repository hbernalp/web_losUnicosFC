import { SEOHead } from '@/shared/components/SEOHead'
import { Button } from '@/shared/components/Button'
import { Card, CardContent } from '@/shared/components/Card'
import { ArrowRight, Calendar, Newspaper, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <>
      <SEOHead />

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/15 via-surface-950/90 to-surface-950" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(245, 158, 11, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(245, 158, 11, 0.06) 0%, transparent 50%)',
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Trophy className="h-3.5 w-3.5" />
              Temporada 2026
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-impact text-surface-100 leading-[0.95] tracking-tight">
              Los Unicos
              <span className="block text-primary-500">FC</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-surface-400 max-w-xl leading-relaxed">
              Bienvenido al sitio oficial del club. Noticias, plantilla, partidos y toda la informacion de tu equipo.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link to="/noticias">
                <Button size="lg">
                  Ultimas noticias
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/plantilla">
                <Button variant="secondary" size="lg">
                  Nuestra plantilla
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-3xl font-bold font-impact text-surface-100">Ultimas Noticias</h2>
          <Link to="/noticias" className="text-sm text-primary-500 hover:text-primary-400 font-semibold inline-flex items-center gap-1 transition-colors">
            Ver todas <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} hover>
              <div className="aspect-[16/9] bg-surface-800" />
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-surface-500 mb-2">
                  <Newspaper className="h-3 w-3" />
                  Noticia
                </div>
                <h3 className="text-lg font-bold text-surface-100 mb-2 line-clamp-2">
                  Titulo de noticia #{i}
                </h3>
                <p className="text-sm text-surface-400 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-surface-900 border-y border-surface-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl md:text-3xl font-bold font-impact text-surface-100 mb-10 text-center">
            Proximo Partido
          </h2>
          <Card className="max-w-lg mx-auto text-center">
            <CardContent className="py-10">
              <Calendar className="h-10 w-10 text-primary-500 mx-auto mb-4" />
              <p className="text-surface-400 mb-1">No hay partidos programados</p>
              <p className="text-xs text-surface-500">Los proximos encuentros apareceran aqui</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl md:text-3xl font-bold font-impact text-surface-100 mb-10 text-center">
          Resultados Recientes
        </h2>
        <Card className="max-w-lg mx-auto text-center">
          <CardContent className="py-10">
            <Trophy className="h-10 w-10 text-primary-500 mx-auto mb-4" />
            <p className="text-surface-400 mb-1">No hay resultados disponibles</p>
            <p className="text-xs text-surface-500">Los resultados de los partidos apareceran aqui</p>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
