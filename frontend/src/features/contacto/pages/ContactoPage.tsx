import { useState } from 'react'
import { SEOHead } from '@/shared/components/SEOHead'
import { PageHero } from '@/shared/components/PageHero'
import { Button } from '@/shared/components/Button'
import { Card, CardContent } from '@/shared/components/Card'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import api from '@/shared/lib/api'

type FieldErrors = Partial<Record<'nombre' | 'email' | 'asunto' | 'mensaje', string>>
type Status = 'idle' | 'loading' | 'success' | 'error'

function validate(data: { nombre: string; email: string; asunto: string; mensaje: string }): FieldErrors {
  const errors: FieldErrors = {}
  if (!data.nombre.trim()) errors.nombre = 'El nombre es obligatorio'
  if (!data.email.trim()) {
    errors.email = 'El email es obligatorio'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Email no valido'
  }
  if (!data.asunto.trim()) errors.asunto = 'El asunto es obligatorio'
  if (!data.mensaje.trim()) {
    errors.mensaje = 'El mensaje es obligatorio'
  } else if (data.mensaje.trim().length < 10) {
    errors.mensaje = 'El mensaje debe tener al menos 10 caracteres'
  }
  return errors
}

export function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', asunto: '', mensaje: '' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [serverError, setServerError] = useState('')

  const setField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError('')
    setStatus('idle')

    const validation = validate(form)
    setErrors(validation)
    if (Object.keys(validation).length > 0) return

    setStatus('loading')
    try {
      await api.post('/contacto', form)
      setStatus('success')
      setForm({ nombre: '', email: '', asunto: '', mensaje: '' })
    } catch {
      setStatus('error')
      setServerError('Error al enviar el mensaje. Intenta de nuevo mas tarde.')
    }
  }

  const inputClass = (field: keyof typeof form) =>
    `w-full h-10 rounded-lg bg-surface-950 border px-3 text-sm text-surface-100 placeholder:text-surface-500 focus:outline-none focus:ring-2 transition-colors ${
      errors[field]
        ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
        : 'border-surface-700 focus:ring-primary-500/50 focus:border-primary-500'
    }`

  const textareaClass = (field: keyof typeof form) =>
    `w-full rounded-lg bg-surface-950 border px-3 py-2 text-sm text-surface-100 placeholder:text-surface-500 focus:outline-none focus:ring-2 transition-colors resize-none ${
      errors[field]
        ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500'
        : 'border-surface-700 focus:ring-primary-500/50 focus:border-primary-500'
    }`

  return (
    <>
      <SEOHead title="Contacto" description="Contacta con el Club Los Unicos FC" />
      <PageHero title="Contacto" subtitle="Estamos para escucharte" />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-xl font-bold text-surface-100 mb-6">Envianos un mensaje</h2>

              {status === 'success' && (
                <div className="mb-6 flex items-start gap-3 rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-3">
                  <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-green-300">Mensaje enviado con exito. Te responderemos pronto.</p>
                </div>
              )}

              {status === 'error' && serverError && (
                <div className="mb-6 flex items-start gap-3 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3">
                  <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-300">{serverError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-surface-300 mb-1.5">
                    Nombre <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="nombre"
                    value={form.nombre}
                    onChange={(e) => setField('nombre', e.target.value)}
                    className={inputClass('nombre')}
                    placeholder="Tu nombre"
                  />
                  {errors.nombre && <p className="mt-1 text-xs text-red-400">{errors.nombre}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-surface-300 mb-1.5">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setField('email', e.target.value)}
                    className={inputClass('email')}
                    placeholder="tu@email.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-surface-300 mb-1.5">
                    Asunto <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="asunto"
                    value={form.asunto}
                    onChange={(e) => setField('asunto', e.target.value)}
                    className={inputClass('asunto')}
                    placeholder="Asunto del mensaje"
                  />
                  {errors.asunto && <p className="mt-1 text-xs text-red-400">{errors.asunto}</p>}
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-surface-300 mb-1.5">
                    Mensaje <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    rows={5}
                    value={form.mensaje}
                    onChange={(e) => setField('mensaje', e.target.value)}
                    className={textareaClass('mensaje')}
                    placeholder="Escribe tu mensaje aqui..."
                  />
                  {errors.mensaje && <p className="mt-1 text-xs text-red-400">{errors.mensaje}</p>}
                </div>

                <Button type="submit" loading={status === 'loading'} disabled={status === 'loading'} className="w-full">
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
