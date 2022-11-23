import { useContext } from 'react'
import { QuizContext } from '../../context/quiz'


import Harry from '../../img/harry.png'
import * as C from './WelcomeStyles'



function Welcome() {
    const [quizState, dispatch] = useContext(QuizContext)

    return(
        <C.WelcomeContainer>
            <h2>Seja Bem-Vindo!</h2>
            <p>Clique no botão abaixo para começar:</p>
            <button onClick={() => dispatch({ type: 'CHANGE_STATE'})}>Iniciar</button>
            <img src={Harry} alt="image-potter" />
        </C.WelcomeContainer>
    )
  }
  
  export default Welcome