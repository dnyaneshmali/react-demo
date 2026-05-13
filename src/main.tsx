import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import Login from './pages/login/Login.tsx'
const Home = lazy(() => import('./pages/home/Home.tsx'))
const About = lazy(() => import('./pages/about/About.tsx'))
const Service = lazy(() => import('./pages/services/Services.tsx'))
const Contact = lazy(() => import('./pages/contact/Contact.tsx'))

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
        path: '/services',
        element: <Service />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
