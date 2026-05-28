import api from './api'

export interface User {
  id: string
  email: string
  nombre: string
  role: 'ADMIN' | 'EDITOR'
}

export async function login(email: string, password: string) {
  const { data } = await api.post('/auth/login', { email, password })
  localStorage.setItem('accessToken', data.accessToken)
  return data.user as User
}

export async function getMe() {
  const { data } = await api.get('/auth/me')
  return data as User
}

export function logout() {
  localStorage.removeItem('accessToken')
  window.location.href = '/admin/login'
}
