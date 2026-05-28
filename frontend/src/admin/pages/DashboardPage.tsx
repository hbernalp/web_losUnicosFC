import { FileText, Users, Calendar, ImageIcon, Mail } from 'lucide-react'
import { Card, CardContent } from '@/shared/components/Card'

const stats = [
  { label: 'Noticias', count: 0, icon: FileText, href: '/admin/noticias', color: 'text-blue-400 bg-blue-500/10' },
  { label: 'Jugadores', count: 0, icon: Users, href: '/admin/jugadores', color: 'text-green-400 bg-green-500/10' },
  { label: 'Partidos', count: 0, icon: Calendar, href: '/admin/partidos', color: 'text-amber-400 bg-amber-500/10' },
  { label: 'Albumes', count: 0, icon: ImageIcon, href: '/admin/galeria', color: 'text-purple-400 bg-purple-500/10' },
  { label: 'Mensajes', count: 0, icon: Mail, href: '/admin/contacto', color: 'text-rose-400 bg-rose-500/10' },
]

export function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-surface-100 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} hover>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg ${stat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-surface-100">{stat.count}</p>
                    <p className="text-xs text-surface-400">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
