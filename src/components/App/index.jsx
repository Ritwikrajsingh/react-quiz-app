import React, {useState} from "react";
import data from "../../database/data";
import "./App.css"

export default function App() {
    const [score, setScore] = useState(0)
    const [questionIndex, setQuestionIndex] = useState(0)
    const [quizFinished, setQuizFinished] =  useState(false)

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) setScore(prevScore => prevScore + 1)
        if (questionIndex >= data.length -1) setQuizFinished(true)
        setQuestionIndex(prevIndex => prevIndex + 1)
    }

    return (
        <div className="app">
            {quizFinished ? (
                <div className="score-section">
                    You scored {score} out of {data.length}
                </div>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span> Question {questionIndex + 1}/{data.length}</span>
                        </div>
                        <div className="question-text">
                            {data[questionIndex]?.questionText}
                        </div>
                    </div>
                    <div className="answer-section">
                        {data[questionIndex]?.answerOptions.map(answer => 
                            <button
                            key={answer.answerText}
                            onClick={() => handleAnswerClick(answer.isCorrect)}
                            >
                                {answer.answerText}
                            </button>)
                        }
                    </div>
                </>
            )}
        </div>
    )
}