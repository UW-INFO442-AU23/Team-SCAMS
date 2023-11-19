import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


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
            <div className="button_center">
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

function QuizResult(props) {
    const { QuizData, answers } = props

    // array for matching user answers to correct answers
    const correct = ["Q1c", "Q2c", "Q3b", "Q4d", "Q5a"]
    let count = 0
    // array of user answer values
    const answers_array = Object.values(answers).sort()

    // array of user answer values as letter choice only
    const letter_answers = answers_array.map((answers_array)=>answers_array[2])

    const index_num = answers_array.map((answers_array)=>{
        return answers_array[1] - 1
    })

    // array of user answer choices as full option -- how to make this work????
    const full_answers = letter_answers.map((letter_answers, index_num)=>QuizData[index_num][letter_answers])

    // console.log(QuizData[1]["c"])

    // calculating user score
    for (let i = 0; i < answers_array.length; i++) {
        for (let k = 0; k < correct.length; k++) {
            if (answers_array[i] === correct[k]) {
                count += 1
            }
        }
    }
    const result = count / correct.length

    return (
        <div style={{ visibility: props.status ? "visible" : "hidden" }}>
            <div>
                <h1 class="text-center">Your Quiz Results:</h1>
            </div>

            <div class="container quiz_question">
                <h2>Congrats on finishing the quiz!</h2>
            </div>

            <div class="flex-container">

                <div class="your-score">
                    <h3>Your Score: {result * 100}% correct</h3>
                </div>

                <div class="correct-answers">
                    <h3>Correct Answers:</h3>
                    <h4>
                        Q1: The Link light rail travels between which two stops?
                    </h4>
                    <p>
                        Answer: C. Northgate and Angle Lake
                    </p>
                    <p>
                        You said: {full_answers[0]}
                    </p>
                    <a href="https://www.soundtransit.org/ride-with-us/stations/link-light-rail-stations">Want more info on the available stations? Find out here!</a>

                    <h4>
                        Q2: Walking ___ steps a day (around 3-4 miles) can reduce risk of heart disease.
                    </h4>
                    <p>
                        Answer: C. 8,000 steps
                    </p>
                    <p>
                        You said: {full_answers[1]}
                    </p>
                    <a href="https://www.health.harvard.edu/heart-health/step-up-your-walking-game">Click to read the Harvard study.</a>

                    <h4>
                        Q3: What is the most prevalent greenhouse gas?
                    </h4>
                    <p>
                        Answer: B. Carbon Dioxide
                    </p>
                    <p>
                        You said: {full_answers[2]}
                    </p>
                    <a href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases">It's carbon dioxide!</a>

                    <h4>
                        Q4: King County Metro carries over ___ passengers daily.
                    </h4>
                    <p>
                        Answer: D. 400,000 passengers
                    </p>
                    <p>
                        You said: {full_answers[3]}
                    </p>
                    <a href="https://en.wikipedia.org/wiki/King_County_Metro#cite_note-METRO_Mag_Survey-3">Read the King County Metro's Wiki page!</a>

                    <h4>
                        Q5: Emissions from the transportation sector accounts for what percentage of total U.S. CO2
                        emissions?
                    </h4>
                    <p>
                        Answer: A. 35%
                    </p>
                    <p>
                        You said: {full_answers[4]}
                    </p>
                    <a href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases">Where we got this stat:</a>
                </div>
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

    const [show, setShow] = useState(false);


    return (
        <main className='quiz_background'>
            <div>
            <div>
                <h1 className="text-center">Knowledge Quiz</h1>
                {questionArray}
            </div>
            </div>
            <div className='button_center'>
            <button type="button" className="btn btn-primary my-5" onClick={() => setShow(!show)}>
                {show ? "Hide" : "View"} results
            </button>
            </div>
            <QuizResult answers={answers} status={show} QuizData={data} />
        </main>
    )

}