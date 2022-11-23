import React from "react";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import Option from "../Options/Options";

import * as C from './StyleQuestion'

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.questions[quizState.currentQuestion]

    const onSelectOption = (option) => {
        dispatch({
            type: 'CHECK_ANSWER',
            payload: { answer: currentQuestion.answer, option },
        })
    }

    return (
        <C.QuestionContainer>
            <div id="question">
                <p className="question1">Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
                <h2>{currentQuestion.question}</h2>
                <div id="options-container">
                    {currentQuestion.options.map((option) => (
                        <Option
                            option={option}
                            key={option}
                            answer={currentQuestion.answer}
                            selectOption={() => onSelectOption(option)}
                        />
                    ))}
                </div>
                {quizState.answerSelected && (
                    <button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>Continuar</button>
                )}
            </div>
        </C.QuestionContainer>
    )
}

export default Question