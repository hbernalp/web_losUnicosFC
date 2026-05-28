import { createBrowserRouter } from 'react-router-dom'

import { PublicLayout } from '@/shared/layouts/PublicLayout'
import { AdminLayout } from '@/shared/layouts/AdminLayout'
import { ProtectedRoute } from '@/admin/guards/ProtectedRoute'

import { HomePage } from '@/features/home/pages/HomePage'
import { NoticiasListPage } from '@/features/noticias/pages/NoticiasListPage'
import { NoticiaDetailPage } from '@/features/noticias/pages/NoticiaDetailPage'
import { JugadoresListPage } from '@/features/jugadores/pages/JugadoresListPage'
import { JugadorDetailPage } from '@/features/jugadores/pages/JugadorDetailPage'
import { PartidosPage } from '@/features/partidos/pages/PartidosPage'
import { GaleriaPage } from '@/features/galeria/pages/GaleriaPage'
import { AlbumDetailPage } from '@/features/galeria/pages/AlbumDetailPage'
import { ContactoPage } from '@/features/contacto/pages/ContactoPage'

import { LoginPage } from '@/admin/pages/LoginPage'
import { DashboardPage } from '@/admin/pages/DashboardPage'
import { AdminNoticiasPage } from '@/admin/pages/AdminNoticiasPage'
import { AdminJugadoresPage } from '@/admin/pages/AdminJugadoresPage'
import { AdminPartidosPage } from '@/admin/pages/AdminPartidosPage'
import { AdminGaleriaPage } from '@/admin/pages/AdminGaleriaPage'
import { AdminContactoPage } from '@/admin/pages/AdminContactoPage'
import { AdminConfigPage } from '@/admin/pages/AdminConfigPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'noticias', element: <NoticiasListPage /> },
      { path: 'noticias/:slug', element: <NoticiaDetailPage /> },
      { path: 'plantilla', element: <JugadoresListPage /> },
      { path: 'plantilla/:id', element: <JugadorDetailPage /> },
      { path: 'partidos', element: <PartidosPage /> },
      { path: 'galeria', element: <GaleriaPage /> },
      { path: 'galeria/:albumId', element: <AlbumDetailPage /> },
      { path: 'contacto', element: <ContactoPage /> },
    ],
  },
  {
    path: '/admin/login',
    element: <LoginPage />,
  },
  {
    path: '/admin',
    element: <ProtectedRoute />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <DashboardPage /> },
          { path: 'noticias', element: <AdminNoticiasPage /> },
          { path: 'jugadores', element: <AdminJugadoresPage /> },
          { path: 'partidos', element: <AdminPartidosPage /> },
          { path: 'galeria', element: <AdminGaleriaPage /> },
          { path: 'contacto', element: <AdminContactoPage /> },
          { path: 'config', element: <AdminConfigPage /> },
        ],
      },
    ],
  },
])
