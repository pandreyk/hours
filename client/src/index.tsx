import React from 'react'
import ReactDOM from 'react-dom'
import 'styles/master.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18n/config'

import App from './App'

ReactDOM.render(
  <Router>
    <I18nextProvider i18n={i18n}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </I18nextProvider>
  </Router>,
  document.getElementById('root'),
)
