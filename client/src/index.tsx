import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18n/config'
import { Provider } from 'react-redux'

import 'styles/master.css'
import App from './App'
import { setupStore } from './redux/root'

const store = setupStore()

ReactDOM.render(
  <Router>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <App />
      </Provider>
    </I18nextProvider>
  </Router>,
  document.getElementById('root'),
)
