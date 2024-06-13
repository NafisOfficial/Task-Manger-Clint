import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Providers/RouterProvider/Routes.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='open-sans-banner'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
