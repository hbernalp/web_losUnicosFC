import { Button } from '@/shared/components/Button'
import { EmptyState } from '@/shared/components/EmptyState'
import { Plus, Users } from 'lucide-react'

export function AdminJugadoresPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-surface-100">Jugadores</h1>
        <Button>
          <Plus className="h-4 w-4" />
          Nuevo jugador
        </Button>
      </div>
      <EmptyState
        icon={<Users className="h-12 w-12" />}
        title="No hay jugadores todavia"
        description="Agrega jugadores a la plantilla del club."
      />
    </div>
  )
}
