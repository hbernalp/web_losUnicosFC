import { Button } from '@/shared/components/Button'
import { EmptyState } from '@/shared/components/EmptyState'
import { Plus, FileText } from 'lucide-react'

export function AdminNoticiasPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-surface-100">Noticias</h1>
        <Button>
          <Plus className="h-4 w-4" />
          Nueva noticia
        </Button>
      </div>
      <EmptyState
        icon={<FileText className="h-12 w-12" />}
        title="No hay noticias todavia"
        description="Crea tu primera noticia para empezar a publicar contenido."
      />
    </div>
  )
}
