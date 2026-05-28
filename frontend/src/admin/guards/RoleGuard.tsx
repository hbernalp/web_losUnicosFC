import { Navigate, Outlet } from 'react-router-dom'

interface RoleGuardProps {
  allowedRoles: string[]
}

export function RoleGuard({ allowedRoles }: RoleGuardProps) {
  const userStr = localStorage.getItem('user')
  if (!userStr) return <Navigate to="/admin/login" replace />

  try {
    const user = JSON.parse(userStr)
    if (!allowedRoles.includes(user.role)) {
      return <Navigate to="/admin" replace />
    }
  } catch {
    return <Navigate to="/admin/login" replace />
  }

  return <Outlet />
}
