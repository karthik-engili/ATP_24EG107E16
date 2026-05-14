import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvider from './contexts/CounterProvider.jsx'
import { UserProvider } from './contexts/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <ContextProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ContextProvider>
  //</StrictMode>
)