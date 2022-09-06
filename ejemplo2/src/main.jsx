import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Carga } from './Carga'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRouter } from './AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
