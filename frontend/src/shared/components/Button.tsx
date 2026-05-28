import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/shared/lib/utils'
import { Loader2 } from 'lucide-react'

const variants = {
  primary: 'bg-primary-500 text-black hover:bg-primary-400 active:bg-primary-600',
  secondary: 'bg-surface-800 text-surface-100 border border-surface-700 hover:bg-surface-700',
  ghost: 'text-surface-300 hover:text-surface-100 hover:bg-surface-800',
  danger: 'bg-red-600 text-white hover:bg-red-500',
}

const sizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, children, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  ),
)
Button.displayName = 'Button'
