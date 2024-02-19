import { Routes, Route } from 'react-router-dom'
import { WelcomePage } from './pages/WelcomePage/WelcomePage'
import { QuestionPage } from './pages/QuestionPage/QuestionPage'
import { ResultPage } from './pages/ResultPage/ResultPage'

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={<WelcomePage />}
      />
      <Route
        path='/question'
        element={<QuestionPage />}
      />
      <Route
        path='/result'
        element={<ResultPage />}
      />
    </Routes>
  )
}

export default App
