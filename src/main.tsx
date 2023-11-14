import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux'

import "bootstrap/dist/css/bootstrap.min.css"
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
)
