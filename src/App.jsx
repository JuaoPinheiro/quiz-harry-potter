import React, { useEffect, useContext } from 'react'
import { QuizContext } from './context/quiz'

import * as C from './styles/styles'

import Question from './Components/Questions/Question'
import Welcome from './Components/Welcome/Welcome'
import GameOver from './Components/GameOver/GameOver'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({ type: 'REORDER_QUESTIONS' })
  }, [])

  return (
    <C.Container>
      <div className='App'>
        <h1>Quiz sobre Harry Potter</h1>
        {quizState.gameStage === 'Start' && <Welcome />}
        {quizState.gameStage === 'Playing' && <Question />}
        {quizState.gameStage === 'End' && <GameOver />}

      </div>
    </C.Container>
  )
}

export default App
