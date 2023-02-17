import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className={'bg-blue-200 w-screen h-screen'}>
      text <i className={'bi bi-123'}></i>
    </div>
  </React.StrictMode>,
)
