import type { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'
import { Inbox } from 'lucide-react'

interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center py-16 text-center', className)}>
      <div className="mb-4 text-surface-600">
        {icon || <Inbox className="h-12 w-12" />}
      </div>
      <h3 className="text-lg font-semibold text-surface-300 mb-1">{title}</h3>
      {description && <p className="text-sm text-surface-500 max-w-sm mb-6">{description}</p>}
      {action}
    </div>
  )
}
