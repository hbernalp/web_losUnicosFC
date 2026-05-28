import { cn } from '@/shared/lib/utils'

interface PageHeroProps {
  title: string
  subtitle?: string
  className?: string
}

export function PageHero({ title, subtitle, className }: PageHeroProps) {
  return (
    <section className={cn('relative py-20 md:py-28 overflow-hidden', className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-surface-950 to-surface-950" />
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(245, 158, 11, 0.08) 0%, transparent 60%)',
      }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-impact text-surface-100 tracking-tight text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg md:text-xl text-surface-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
