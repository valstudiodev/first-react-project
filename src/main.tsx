import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import App from './App.jsx'
import './styles/index.scss'
import './index.css'

const appContainer = document.getElementById('root') as HTMLDivElement
if (!appContainer) {
  throw new Error("Не вдалося знайти кореневий елемент з id 'root'!");
}
createRoot(appContainer).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>,
)
