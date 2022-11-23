import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './styles/globalStyles'
import { QuizProvider } from './context/quiz'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
    <GlobalStyles />
  </React.StrictMode>
)
