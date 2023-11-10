import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Container } from 'react-bootstrap';


function QuizQuestion(props) {

    const {quizData} = props

    return (
        <div>
            <div class="container quiz_question">
                <h2>{quizData.question}</h2>
            </div>

            <div class="container rounded quiz_window">
                <p>{quizData.a}</p>

                <p>{quizData.b}</p>

                <p>{quizData.c}</p>

                <p>{quizData.d}n</p>
            </div>
            <div class="button_center">
                <input type="radio" class="btn-check" name={quizData.id} id={quizData.id + 'a'} autocomplete="off" />
                <label class="btn btn-outline-success" for="1a">A</label>

                <input type="radio" class="btn-check" name={quizData.id} id={quizData.id + 'b'} autocomplete="off" />
                <label class="btn btn-outline-success" for="1b">B</label>

                <input type="radio" class="btn-check" name={quizData.id} id={quizData.id + 'c'} autocomplete="off" />
                <label class="btn btn-outline-success" for="1c">C</label>

                <input type="radio" class="btn-check" name={quizData.id} id={quizData.id = 'd'} autocomplete="off" />
                <label class="btn btn-outline-success" for="1d">D</label>
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
    const objKeys = Object.keys(data);
    const quizQuestionArray = objKeys.map((quizObjKeys) => {
        return data[quizObjKeys]
    })

    const questionArray = quizQuestionArray.map((question) => {
        return <QuizQuestion quizData={question}/>
    })

    return (
        <main>
            <h1 className="text-center">Knowledge Quiz</h1>
            {quizQuestionArray}
            <div className="button_center">
                <button type="button" className="btn btn-primary my-5">Submit</button>
            </div>
        </main>
    )

}