import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { cn } from '@/shared/lib/utils'
import {
  LayoutDashboard, FileText, Users, Calendar, ImageIcon, Mail, Settings, LogOut, Menu, X, ChevronLeft,
} from 'lucide-react'

const sidebarLinks = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { href: '/admin/noticias', label: 'Noticias', icon: FileText },
  { href: '/admin/jugadores', label: 'Jugadores', icon: Users },
  { href: '/admin/partidos', label: 'Partidos', icon: Calendar },
  { href: '/admin/galeria', label: 'Galeria', icon: ImageIcon },
  { href: '/admin/contacto', label: 'Contacto', icon: Mail },
  { href: '/admin/config', label: 'Configuracion', icon: Settings },
]

export function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    navigate('/admin/login')
  }

  return (
    <div className="min-h-screen bg-surface-950 flex">
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 bg-surface-900 border-r border-surface-800 transition-all duration-300 flex flex-col',
          sidebarOpen ? 'w-64' : 'w-16',
        )}
      >
        <div className={cn('flex items-center h-16 px-4 border-b border-surface-800', sidebarOpen ? 'justify-between' : 'justify-center')}>
          {sidebarOpen && (
            <span className="font-impact text-lg font-bold text-surface-100">
              Admin
            </span>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 rounded-lg text-surface-400 hover:text-surface-100 hover:bg-surface-800 transition-colors cursor-pointer"
          >
            <ChevronLeft className={cn('h-4 w-4 transition-transform', !sidebarOpen && 'rotate-180')} />
          </button>
        </div>

        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
          {sidebarLinks.map((link) => {
            const Icon = link.icon
            return (
              <button
                key={link.href}
                onClick={() => navigate(link.href)}
                className={cn(
                  'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  location.pathname === link.href
                    ? 'bg-primary-500/15 text-primary-500'
                    : 'text-surface-400 hover:text-surface-200 hover:bg-surface-800',
                  !sidebarOpen && 'justify-center px-0',
                )}
                title={link.label}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {sidebarOpen && <span>{link.label}</span>}
              </button>
            )
          })}
        </nav>

        <div className="p-2 border-t border-surface-800">
          <button
            onClick={handleLogout}
            className={cn(
              'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-surface-400 hover:text-red-400 hover:bg-surface-800 transition-colors',
              !sidebarOpen && 'justify-center px-0',
            )}
          >
            <LogOut className="h-5 w-5 shrink-0" />
            {sidebarOpen && <span>Cerrar sesion</span>}
          </button>
        </div>
      </aside>

      <div className={cn('flex-1 transition-all duration-300', sidebarOpen ? 'ml-64' : 'ml-16')}>
        <header className="sticky top-0 z-30 h-16 border-b border-surface-800 bg-surface-950/80 backdrop-blur-lg flex items-center px-6 gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden p-1.5 rounded-lg text-surface-400 hover:text-surface-100 cursor-pointer"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <div className="flex-1" />
        </header>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
