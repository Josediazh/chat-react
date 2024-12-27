import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router/AppRouter'
import {
  FluentProvider,
  webLightTheme
} from "@fluentui/react-components";
import "./css/style_main.css"
import { Provider } from 'react-redux';
import { store } from './store/store.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <FluentProvider theme={webLightTheme}>
        <AppRouter />
      </FluentProvider>
    </Provider>
  </StrictMode>,
)
