import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from '@/pages/layout'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout>
      <App></App>
    </Layout>
  </StrictMode>,
)
