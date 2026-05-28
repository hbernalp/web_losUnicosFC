import { Button } from '@/shared/components/Button'
import { EmptyState } from '@/shared/components/EmptyState'
import { Plus, ImageIcon } from 'lucide-react'

export function AdminGaleriaPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-surface-100">Galeria</h1>
        <Button>
          <Plus className="h-4 w-4" />
          Nuevo album
        </Button>
      </div>
      <EmptyState
        icon={<ImageIcon className="h-12 w-12" />}
        title="No hay albumes todavia"
        description="Crea albumes para organizar las imagenes del club."
      />
    </div>
  )
}
