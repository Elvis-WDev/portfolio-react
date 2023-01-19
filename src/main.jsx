import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { Provider } from 'react-redux'
import { store } from './store';
import 'animate.css';
import './assets/scss/index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <Provider store={store}>

      <BrowserRouter>

        <AppRouter />

      </BrowserRouter>

    </Provider>

  </React.StrictMode>

)
