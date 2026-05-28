import type { HTMLAttributes } from 'react'
import { cn } from '@/shared/lib/utils'

const variants = {
  default: 'bg-surface-800 text-surface-300',
  primary: 'bg-primary-500/15 text-primary-400',
  success: 'bg-green-500/15 text-green-400',
  warning: 'bg-amber-500/15 text-amber-400',
  danger: 'bg-red-500/15 text-red-400',
  info: 'bg-blue-500/15 text-blue-400',
}

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variants
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase',
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}
