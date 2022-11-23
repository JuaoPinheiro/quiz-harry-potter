import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

import * as C from './StyleOptions'

const Option = ({ option, selectOption, answer }) => {
    const [quizState, dispatch] = useContext(QuizContext)

    return (
        <C.OptionContainer>
            <div
                onClick={() => selectOption()}
                className={`
                option
                    ${quizState.answerSelected && option === answer ? "correct" : ""} ${quizState.answerSelected && option !== answer ? "wrong" : ""
                    }
        `} >
                <p>{option}</p>
            </div>
        </C.OptionContainer >
    )
}

export default Option