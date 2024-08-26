import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './component/App'
import App from './component/module4.task2/App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
