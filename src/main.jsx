import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router/AppRouter'
import {
  FluentProvider,
  webLightTheme
} from "@fluentui/react-components";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FluentProvider theme={webLightTheme}>
      <AppRouter />
    </FluentProvider>
  </StrictMode>,
)
