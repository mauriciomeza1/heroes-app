import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Login } from '../components/login/Login'
import { DashboardRoutes } from './DashboardRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }/>

            <Route path="/*" element={ 
              <PrivateRoute>
                <DashboardRoutes />
              </PrivateRoute>
            }/>
        </Routes>
    </BrowserRouter>
  )
}
