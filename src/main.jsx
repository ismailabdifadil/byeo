import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Programs from './pages/Programs.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import App from './App.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <About />,
      },
      {
        path: '/programs',
        element: <Programs />,
      },
      {
        path: '/contact-us',
        element: <Contact />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
