import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Container } from 'react-bootstrap';

function QuizQuestion(id, question, a, b, c, d, answer) {

    return (
        <div>
            <div class="container quiz_question">
                <h2>{question}</h2>
            </div>

            <div class="container rounded quiz_window">
                <p>{a}</p>

                <p>{b}</p>

                <p>{c}</p>

                <p>{d}n</p>
            </div>
            <div class="button_center">
                <input type="radio" class="btn-check" name="q1" id="1a" autocomplete="off" />
                <label class="btn btn-outline-success" for="1a">A</label>

                <input type="radio" class="btn-check" name="q1" id="1b" autocomplete="off" />
                <label class="btn btn-outline-success" for="1b">B</label>

                <input type="radio" class="btn-check" name="q1" id="1c" autocomplete="off" />
                <label class="btn btn-outline-success" for="1c">C</label>

                <input type="radio" class="btn-check" name="q1" id="1d" autocomplete="off" />
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

    return (
        <main>
            <h1 className="text-center">Knowledge Quiz</h1>
            <div className="button_center">
                <button type="button" className="btn btn-primary my-5">Submit</button>
            </div>
        </main>
    )

}