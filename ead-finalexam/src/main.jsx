import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TrafficLightSimulator from './TrafficLightSimulator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TrafficLightSimulator />
  </StrictMode>,
)
