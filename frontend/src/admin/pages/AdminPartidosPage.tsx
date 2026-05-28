import { Button } from '@/shared/components/Button'
import { EmptyState } from '@/shared/components/EmptyState'
import { Plus, Calendar } from 'lucide-react'

export function AdminPartidosPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-surface-100">Partidos</h1>
        <Button>
          <Plus className="h-4 w-4" />
          Nuevo partido
        </Button>
      </div>
      <EmptyState
        icon={<Calendar className="h-12 w-12" />}
        title="No hay partidos todavia"
        description="Agrega partidos al calendario del club."
      />
    </div>
  )
}
