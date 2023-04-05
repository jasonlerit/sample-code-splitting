import React, { lazy, Suspense } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layouts/Layout'

const Home: React.LazyExoticComponent<React.FC> = lazy(
  () => import('./pages/home')
)
const About: React.LazyExoticComponent<React.FC> = lazy(
  () => import('./pages/about')
)
const Contact: React.LazyExoticComponent<React.FC> = lazy(
  () => import('./pages/contact')
)

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
])

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
