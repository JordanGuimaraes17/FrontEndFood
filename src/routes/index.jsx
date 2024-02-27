import { BrowserRouter } from 'react-router-dom'
import { AdminRoutes } from './admin.routes'
import { CustomerRoutes } from './customer.routes'
import { AuthRoutes } from './auth.routes'
import { useAuth } from '../hooks/auth'
import { api } from '../services/api'
import { USER_ROLE } from '../utils/roles'
import { useEffect } from 'react'

export function Routes() {
  const { user, signOut } = useAuth()

  useEffect(() => {
    api.get('/users/validated').catch(error => {
      if (error.response?.status === 401) signOut()
    })
  }, [])

  function AccessRoute() {
    if (user) {
      switch (user.role) {
        case USER_ROLE.ADMIN:
          return <AdminRoutes />
        case USER_ROLE.CUSTOMER:
          return <CustomerRoutes />
        default:
          return <CustomerRoutes />
      }
    } else {
      return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  )
}
