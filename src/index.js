import React, { Suspense } from 'react'
import { render } from 'react-dom'
import reportWebVitals from './reportWebVitals'
import './i18n'
import { BrowserRouter } from 'react-router-dom'
import App from 'App'
import store from './store'
import { Provider } from 'react-redux'
import SnackbarProvider from 'shared/components/SnackbarAlert/SnackbarAlert'
import Loader from 'shared/components/Loader'
import { SwitchThemeProvider } from 'shared/components/SwitchTheme/SwitchTheme'

render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Provider store={store}>
          <SnackbarProvider>
            <SwitchThemeProvider>
              <App />
            </SwitchThemeProvider>
          </SnackbarProvider>
        </Provider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
