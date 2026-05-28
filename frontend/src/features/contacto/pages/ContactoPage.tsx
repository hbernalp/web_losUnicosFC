import { SEOHead } from '@/shared/components/SEOHead'
import { PageHero } from '@/shared/components/PageHero'
import { Button } from '@/shared/components/Button'
import { Card, CardContent } from '@/shared/components/Card'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function ContactoPage() {
  return (
    <>
      <SEOHead title="Contacto" description="Contacta con el Club Los Unicos FC" />
      <PageHero title="Contacto" subtitle="Estamos para escucharte" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-surface-100 mb-6">Envianos un mensaje</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-surface-300 mb-1.5">Nombre</label>
                  <input
                    className="w-full h-10 rounded-lg bg-surface-950 border border-surface-700 px-3 text-sm text-surface-100 placeholder:text-surface-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full h-10 rounded-lg bg-surface-950 border border-surface-700 px-3 text-sm text-surface-100 placeholder:text-surface-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-300 mb-1.5">Asunto</label>
                  <input
                    className="w-full h-10 rounded-lg bg-surface-950 border border-surface-700 px-3 text-sm text-surface-100 placeholder:text-surface-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500"
                    placeholder="Asunto del mensaje"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-300 mb-1.5">Mensaje</label>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg bg-surface-950 border border-surface-700 px-3 py-2 text-sm text-surface-100 placeholder:text-surface-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 resize-none"
                    placeholder="Escribe tu mensaje aqui..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4" />
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h2 className="text-xl font-bold text-surface-100 mb-6">Informacion de Contacto</h2>
            {[
              { icon: Mail, label: 'Email', value: 'info@losunicosfc.com' },
              { icon: Phone, label: 'Telefono', value: 'proximamente' },
              { icon: MapPin, label: 'Ubicacion', value: 'proximamente' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary-500/10 text-primary-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-surface-300">{item.label}</p>
                    <p className="text-sm text-surface-400">{item.value}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
