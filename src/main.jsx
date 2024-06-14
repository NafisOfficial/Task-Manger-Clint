import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Providers/RouterProvider/Routes.jsx'
import AuthProvider from './Providers/AuthProviders/AuthProviders.jsx'
import { ToastContainer } from 'react-toastify'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='open-sans-banner'>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition:Bounce/>
    </div>
  </React.StrictMode>,
)
