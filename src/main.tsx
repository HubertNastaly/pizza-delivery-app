import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { OrderProvider } from './providers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OrderProvider>
      <App />
    </OrderProvider>
  </React.StrictMode>,
)
