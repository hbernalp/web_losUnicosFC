import { Navigate, Outlet } from 'react-router-dom'

export function ProtectedRoute() {
  const token = localStorage.getItem('accessToken')
  if (!token) return <Navigate to="/admin/login" replace />
  return <Outlet />
}
