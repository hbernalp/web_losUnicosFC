import { EmptyState } from '@/shared/components/EmptyState'
import { Settings } from 'lucide-react'

export function AdminConfigPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-surface-100 mb-6">Configuracion del Sitio</h1>
      <EmptyState
        icon={<Settings className="h-12 w-12" />}
        title="Configuracion pendiente"
        description="Aqui podras gestionar los datos institucionales del club."
      />
    </div>
  )
}
