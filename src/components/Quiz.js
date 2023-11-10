import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Container } from 'react-bootstrap';


function QuizQuestion(props) {

    const {quizData, index} = props

    return (
        <div>
            <div className="container quiz_question">
                <h2>{quizData.question}</h2>
            </div>

            <div className="container rounded quiz_window">
                <p>{quizData.a}</p>

                <p>{quizData.b}</p>

                <p>{quizData.c}</p>

                <p>{quizData.d}n</p>
            </div>
            <div className="button_center">
                <input type="radio" className="btn-check" name={quizData.id} id={quizData.id + 'a'} autoComplete="off" />
                <label className="btn btn-outline-success" for={quizData.id + 'a'}>A</label>

                <input type="radio" className="btn-check" name={quizData.id} id={quizData.id + 'b'} autoComplete="off" />
                <label className="btn btn-outline-success" for={quizData.id + 'b'}>B</label>

                <input type="radio" className="btn-check" name={quizData.id} id={quizData.id + 'c'} autoComplete="off" />
                <label className="btn btn-outline-success" for={quizData.id + 'c'}>C</label>

                <input type="radio" className="btn-check" name={quizData.id} id={quizData.id + 'd'} autoComplete="off" />
                <label className="btn btn-outline-success" for={quizData.id + 'd'}>D</label>
            </div>
        </div>
    )
}





function QuizWindow(props) {

}

function QuizAnswers(props) {

}


export default function Quiz(props) {
    <Route path="/Quiz" element={<Quiz />} />

    const {data} = props
    console.log(data)

    const questionArray = data.map((question, index) => {
    return <QuizQuestion quizData={question} key={index}/>})


    // const objKeys = Object.keys(data);
    // const quizQuestionArray = objKeys.map((quizObjKeys) => {
    //     return data[quizObjKeys]
    // })

    // const questionArray = quizQuestionArray.map((question) => {
    //     return <QuizQuestion quizData={question}/>
    // })

    return (
        <main>
            <h1 className="text-center">Knowledge Quiz</h1>
            {questionArray}
            <div className="button_center">
                <button type="button" className="btn btn-primary my-5">Submit</button>
            </div>
        </main>
    )

}