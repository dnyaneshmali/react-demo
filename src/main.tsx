import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import AuthGuard from './services/AuthGuard.tsx'
const Home = lazy(() => import('./pages/home/Home.tsx'))
const About = lazy(() => import('./pages/about/About.tsx'))
const Contact = lazy(() => import('./pages/contact/Contact.tsx'))
const Login = lazy(() => import('./pages/login/Login.tsx'))
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard.tsx'))
const Agents = lazy(() => import('./pages/agents/Agents.tsx'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/dashboard',
        element: (
          <AuthGuard requiredRole="Admin">
            <Dashboard />
          </AuthGuard>
        ),
      },
      {
        path: '/agents',
        element: (
          <AuthGuard>
            <Agents />
          </AuthGuard>
        ),
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
