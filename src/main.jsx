import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router';
import { HelmetProvider } from 'react-helmet-async'
import ThemeProvider from './providers/ThemeProvider.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <HelmetProvider>
          <RouterProvider router={router}>
            <ToastContainer />
          </RouterProvider>
        </HelmetProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
