import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { OrderProvider } from './providers'
import { StepsProvider } from './providers/StepsProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StepsProvider>
      <OrderProvider>
        <App />
      </OrderProvider>
    </StepsProvider>
  </React.StrictMode>,
)
