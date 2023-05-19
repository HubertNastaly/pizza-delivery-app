import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { OrderProvider } from './providers'
import { StepsProvider } from './providers/StepsProvider'
import { globalStyles } from './theme'

globalStyles()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OrderProvider>
      <StepsProvider>
        <App />
      </StepsProvider>
    </OrderProvider>
  </React.StrictMode>,
)
