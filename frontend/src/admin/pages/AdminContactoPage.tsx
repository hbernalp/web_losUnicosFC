import { EmptyState } from '@/shared/components/EmptyState'
import { Mail } from 'lucide-react'

export function AdminContactoPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-surface-100 mb-6">Mensajes de Contacto</h1>
      <EmptyState
        icon={<Mail className="h-12 w-12" />}
        title="No hay mensajes todavia"
        description="Los mensajes del formulario de contacto apareceran aqui."
      />
    </div>
  )
}
