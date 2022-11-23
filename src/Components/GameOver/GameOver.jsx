import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

import ImageOver from '../../img/finish.png'


import * as C from './GameOverStyled'

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <C.GameOverContainer>
            <h2>Fim de Jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
            {quizState.score === quizState.questions.length  && (
                    <h3>Parabéns você é um Potterhead!</h3>
                )}
            <img src={ImageOver} alt="ballon" />
            <button onClick={() => dispatch({ type: 'NEW_GAME' })}>Reinicar</button>
        </C.GameOverContainer>
    )
}

export default GameOver