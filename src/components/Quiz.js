import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function QuizQuestion(props) {
    const { quizData, index, onSelect } = props
    const handleOptionSelect = (event) => {
        const selectedAnswer = event.target.id;
        onSelect(quizData.id, selectedAnswer);
    };

    return (
        <div>
            <div className="container quiz_question">
                <h2>{quizData.question}</h2>
            </div>

            <div className="container rounded quiz_window">
                <p>{quizData.a}</p>

                <p>{quizData.b}</p>

                <p>{quizData.c}</p>

                <p>{quizData.d}</p>
            </div>
            <div className="button_center quiz_spacing">
                <input type="radio" className="btn-check" name={quizData.id} id={quizData.id + 'a'} autoComplete="off" onChange={handleOptionSelect} />
                <label className="btn btn-outline-success" for={quizData.id + 'a'}>A</label>

                <input type="radio" className="btn-check" name={quizData.id} id={quizData.id + 'b'} autoComplete="off" onChange={handleOptionSelect} />
                <label className="btn btn-outline-success" for={quizData.id + 'b'}>B</label>

                <input type="radio" className="btn-check" name={quizData.id} id={quizData.id + 'c'} autoComplete="off" onChange={handleOptionSelect} />
                <label className="btn btn-outline-success" for={quizData.id + 'c'}>C</label>

                <input type="radio" className="btn-check" name={quizData.id} id={quizData.id + 'd'} autoComplete="off" onChange={handleOptionSelect} />
                <label className="btn btn-outline-success" for={quizData.id + 'd'}>D</label>
            </div>
        </div>
    )
}

export default function Quiz(props) {
    <Route path="/Quiz" element={<Quiz />} />

    const { data } = props

    const [answers, setAnswers] = useState([]);
    const handleAnswer = (questionId, answer) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionId]: answer,
        }));
    };

    const questionArray = data.map((question, index) => {
        return <QuizQuestion quizData={question} key={index} onSelect={handleAnswer} />
    })

    const handleSubmit = () => {
        props.onSubmit(answers);
    };

    var isAnswered = false;
    if (Object.keys(answers).length > 4) {
        isAnswered = true;
    }

    return (
        <main className='quiz_background'>
            <div>
                <div>
                    <h1 className="text-center">Knowledge Quiz</h1>
                    <p className="text-center">Not quite ready to take the quiz yet? Check out our Resources page to help you out!</p>
                    {questionArray}
                </div>
            </div>
            <div className={isAnswered ? 'button_center' : 'disabledbutton'}>
                <Link to={`/knowledge_quiz_results`} scroll={true} className="btn btn-primary my-5" onClick={handleSubmit}>{"Submit"}</Link>
            </div>
        </main>
    )
}