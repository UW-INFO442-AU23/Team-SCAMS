import React from 'react';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { KeyFeatures, AboutUs } from "./HomePageSection";

export default function Home(props) {
    <Route path="/Home" element={<Home />} />
    return (
        <HomePage />
    )
}


export function HomePage(props) {

    // Source: https://stackoverflow.com/questions/13735912/anchor-jumping-by-using-javascript
    // Source: https://jsfiddle.net/DerekL/x3edvp4t/
    function jump(h) {
        var top = document.getElementById(h).offsetTop,
            left = document.getElementById(h).offsetLeft;
        var animator = createAnimator({
            start: [0, 0],
            end: [left, top],
            duration: 1000
        }, function (vals) {
            console.log(arguments);
            window.scrollTo(vals[0], vals[1]);
        });

        //run
        animator();
    }

    // Content of Home Page
    return (
        <div>
            <section className="intro-section">
                <div className="container">
                    <div className="row text-left flex-md-row flex-column d-flex  justify-content-between align-items-center ">
                        <div className="col-md">
                            <div className="intro-text">
                                <h1>Go Green</h1>
                                <p className="homepage-descrip">
                                    Our mission is to encourage residents of Seattle to utilize more sustainable modes of
                                    daily transportation in order to reduce their carbon footprint. Check out our carbon
                                    emissions calculator, transportation knowledge quiz, and resources page to learn more
                                    about sustainable travel!
                                </p>

                                <button className="btn btn-primary" onClick={() => jump('one')}>
                                    Learn More About Sustainable Transportation
                                </button>

                                {/* <button className="btn btn-primary" onclick="jump('one')">Learn More About Sustainable Transportation</button> */}
                                {/* <a className="btn btn-primary" href="#" role="button">Learn More About Sustainable Transportation</a> */}
                            </div>
                        </div>

                        {/* Source: https://getbootstrap.com/docs/4.0/utilities/embed/ */}
                        <div className="col-md embed-responsive embed-responsive-16by9">
                            {/*Source: https://www.w3schools.com/html/html_youtube.asp*/}
                            <iframe width="500px" height="300px"
                                className="embed-responsive-item" src="https://youtube.com/embed/qoeA_QHBrLU?si=tJSjSyRNIl0oXryk" allowfullscreen>
                            </iframe>
                        </div>

                    </div>
                </div>
            </section>

            <section id="features-section" className="feature-section">
                <div id="one">
                    <h2> Learn More About Sustainable Transportation! </h2>
                </div>
                <KeyFeatures />
            </section>

            <section className="about-us">
                <h2>Meet the Team</h2>
                <AboutUs />
            </section>
        </div>
    );
}


// Source: https://stackoverflow.com/questions/13735912/anchor-jumping-by-using-javascript
// Source: https://jsfiddle.net/DerekL/x3edvp4t/
// Animator Licensed under the MIT License
function createAnimator(config, callback, done) {
    if (typeof config !== "object") throw new TypeError("Arguement config expect an Object");

    var start = config.start,
        mid = $.extend({}, start), //clone object
        math = $.extend({}, start), //precalculate the math
        end = config.end,
        duration = config.duration || 1000,
        startTime, endTime;

    //t*(b-d)/(a-c) + (a*d-b*c)/(a-c);
    function precalculate(a, b, c, d) {
        return [(b - d) / (a - c), (a * d - b * c) / (a - c)];
    }

    function calculate(key, t) {
        return t * math[key][0] + math[key][1];
    }

    function step() {
        var t = Date.now();
        var val = end;
        if (t < endTime) {
            val = mid;
            for (var key in mid) {
                mid[key] = calculate(key, t);
            }
            callback(val);
            requestAnimationFrame(step);
        } else {
            callback(val);
            done && done();
        }
    }

    return function () {
        startTime = Date.now();
        endTime = startTime + duration;

        for (var key in math) {
            math[key] = precalculate(startTime, start[key], endTime, end[key]);
        }

        step();
    }
}