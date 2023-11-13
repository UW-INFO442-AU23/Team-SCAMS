import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { KeyFeatures } from "./HomePageSection";

export default function Home(props) {
    <Route path="/Home" element={<Home/>} />
    return (
        <HomePage/>
    )
}

export function HomePage(props) {
    return (
        <div>
            <section class="intro-section">
                <div class="container">
                    <div class="row text-left flex-md-row flex-column d-flex  justify-content-between align-items-center ">
                        <div class="col-md">
                            <div class="intro-text">
                                <h1>Go Green</h1>
                                <p>
                                    Our mission is to encourage residents of Seattle to utilize more sustainable modes of
                                    daily transportation in order to reduce their carbon footprint. Check out our carbon 
                                    emissions calculator to see how you can utilize more sustainable travel!
                                </p>
                                <a class="btn btn-primary" href="emissions_calculator" role="button">Carbon Emissions Calculator</a>
                            </div>
                        </div>
                    
                        {/* Source: https://getbootstrap.com/docs/4.0/utilities/embed/ */}
                        <div class="col-md embed-responsive embed-responsive-16by9">
                            {/*Source: https://www.w3schools.com/html/html_youtube.asp*/}
                            <iframe width="500px" height="300px"
                                class="embed-responsive-item" src="https://youtube.com/embed/qoeA_QHBrLU?si=tJSjSyRNIl0oXryk" allowfullscreen>
                            </iframe>
                        </div>

                    </div>
                </div>
            </section>
            <KeyFeatures />
        </div>
    );
}

