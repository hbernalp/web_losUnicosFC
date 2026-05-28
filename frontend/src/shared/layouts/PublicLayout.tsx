import { Outlet, Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/shared/lib/utils'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/noticias', label: 'Noticias' },
  { href: '/plantilla', label: 'Plantilla' },
  { href: '/partidos', label: 'Partidos' },
  { href: '/galeria', label: 'Galeria' },
  { href: '/contacto', label: 'Contacto' },
]

export function PublicLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-surface-800 bg-surface-950/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center">
                <span className="text-xs font-black text-black">U</span>
              </div>
              <span className="font-impact text-xl font-bold text-surface-100 tracking-wide">
                Los Unicos <span className="text-primary-500">FC</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-primary-500 bg-primary-500/10'
                      : 'text-surface-300 hover:text-surface-100 hover:bg-surface-800',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admin"
                className="ml-3 p-2 rounded-lg text-surface-500 hover:text-surface-300 hover:bg-surface-800 transition-colors"
                title="Admin"
              >
                <Shield className="h-4 w-4" />
              </Link>
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-surface-400 hover:text-surface-100 cursor-pointer"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-surface-800 bg-surface-900">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-primary-500 bg-primary-500/10'
                      : 'text-surface-300 hover:text-surface-100 hover:bg-surface-800',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-surface-800 my-2" />
              <Link
                to="/admin"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-surface-400 hover:text-surface-100 hover:bg-surface-800"
              >
                <Shield className="h-4 w-4" />
                Panel Admin
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-surface-800 bg-surface-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center">
                  <span className="text-xs font-black text-black">U</span>
                </div>
                <span className="font-impact text-lg font-bold text-surface-100">
                  Los Unicos <span className="text-primary-500">FC</span>
                </span>
              </div>
              <p className="text-sm text-surface-400 leading-relaxed">
                Sitio oficial del Club Los Unicos FC. Toda la informacion de tu equipo favorito en un solo lugar.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-surface-300 uppercase tracking-wider mb-4">Navegacion</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-sm text-surface-400 hover:text-primary-500 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-surface-300 uppercase tracking-wider mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm text-surface-400">
                <li>Email: info@losunicosfc.com</li>
                <li>Redes sociales: @losunicosfc</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-surface-800 text-center text-xs text-surface-500">
            &copy; {new Date().getFullYear()} Los Unicos FC. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
