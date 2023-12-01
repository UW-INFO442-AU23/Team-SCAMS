import { jsxClosingElement } from '@babel/types';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Chart } from "react-google-charts";

export default function QuizResults(props) {
    <Route path="/QuizResults" element={<QuizResults />} />
    const { QuizData, answers } = props
    console.log(QuizData)

    // array for matching user answer values to correct answer values
    const correct = ["Q1c", "Q2c", "Q3b", "Q4d", "Q5a"]
    let count = 0
    // array of user answer values
    const answers_array = Object.values(answers).sort()

    // array of user answers as letter choice only
    const letter_answers = answers_array.map((answers_array) => answers_array[2])

    const index_num = answers_array.map((answers_array) => {
        return answers_array[1] - 1
    })

    const handleSubmit = () => {
        props.onSubmit();
    };

    const full_answers = letter_answers.map((letter_answers, index_num) => QuizData[index_num][letter_answers])
    // console.log(full_answers)

    // calculating user score
    for (let i = 0; i < answers_array.length; i++) {
        for (let k = 0; k < correct.length; k++) {
            if (answers_array[i] === correct[k]) {
                count += 1
            }
        }
    }
    const result = count / correct.length

    // for pie chart visualization
    const data = [
        ["Correctness", "Count"],
        ["Correct", result],
        ["Incorrect", 1-result],
    ];
    const options = {
        colors: ['#002E68', '#CCE4EB'],
      };

    // for color-coding right/wrong answers
    const isCorrect = [];
    for (let i = 0; i < answers_array.length; i++) {
        for (let k = 0; k < correct.length; k++) {
            if (answers_array[i] === correct[k]) {
                isCorrect.push(true);
            }
            else {
                isCorrect.push(false);
            }
        }
        isCorrect.push(false)
    }
    console.log(isCorrect)

    return (
        <main className='quiz-results-background'>
            <div>
                <div>
                    <h1 className="text-center">Your Quiz Results:</h1>
                    <p className="text-center">Make sure to click the "Take Quiz Again" button at the bottom of the page if you want to try again!</p>
                </div>

                <div className="container quiz_question">
                    <h2>Congrats on finishing the quiz!</h2>
                </div>

                {/* <div className="flex-container"> */}

                    <div className="your-score">
                        <h3 className="text-center">Your Score: {result * 100}% correct</h3>
                        <Chart
                            chartType="PieChart"
                            data={data}
                            options={options}
                            width={"auto"}
                            height={"auto"}
                        />
                    </div>

                    <div className="correct-answers">
                        <h3>Correct Answers:</h3>
                        <h4>
                            Q1: The Link light rail travels between which two stops?
                        </h4>
                        <p>
                            Answer: C. Northgate and Angle Lake
                        </p>
                        <p className={isCorrect[0] ? 'correct' : 'incorrect'}>
                            You said: {full_answers[0]}
                        </p>
                        <a href="https://www.soundtransit.org/ride-with-us/stations/link-light-rail-stations">Want more info on the available stations? Find out here!</a>

                        <h4>
                            Q2: Walking ___ steps a day (around 3-4 miles) can reduce risk of heart disease.
                        </h4>
                        <p>
                            Answer: C. 8,000 steps
                        </p>
                        <p className={isCorrect[7] ? 'correct' : 'incorrect'}>
                            You said: {full_answers[1]}
                        </p>
                        <a href="https://www.health.harvard.edu/heart-health/step-up-your-walking-game">Click to read the Harvard study.</a>

                        <h4>
                            Q3: What is the most prevalent greenhouse gas?
                        </h4>
                        <p>
                            Answer: B. Carbon Dioxide
                        </p>
                        <p className={isCorrect[14] ? 'correct' : 'incorrect'}>
                            You said: {full_answers[2]}
                        </p>
                        <a href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases">It's carbon dioxide!</a>

                        <h4>
                            Q4: King County Metro carries over ___ passengers daily.
                        </h4>
                        <p>
                            Answer: D. 400,000 passengers
                        </p>
                        <p className={isCorrect[21] ? 'correct' : 'incorrect'}>
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
                        <p className={isCorrect[28] ? 'correct' : 'incorrect'}>
                            You said: {full_answers[4]}
                        </p>
                        <a href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases">Where we got this stat</a>
                    </div>
                {/* </div> */}
                <div className='button_center'>
                    <Link to={`/knowledge_quiz`} scroll={true} className="btn btn-primary my-5" onClick={handleSubmit}>Take Quiz Again</Link>
                </div>
            </div>
        </main>
    )
}