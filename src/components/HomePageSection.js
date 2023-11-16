import React from 'react';

function EachFeature(props) {
    return (
        <section>
            <div className="container">
                <div className="row justify-content-between text-left align-items-center">
                    <div className="homepage-img col-md">
                        <img src={props.source} width="600px" height="300px"
                            alt={props.alt} class="img-fluid"/>
                    </div>
                    <div className="col-md p-4">
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>
                        <a className="btn btn-primary" href={props.path} role="button" onClick={props.onClick}>
                            {props.buttonname}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}


export function KeyFeatures(props) {
    return (
        <>
            <EachFeature
                source="img/car.jpg"
                alt="White SUV driving fast"
                name="Carbon Emissions Calculator"
                description="The transportation sector stands as the leading contributor to 
                greenhouse gas emissions, accounting for 28% of total emissions 
                in 2021. Human health, ecosystem health, and urban infrastructure 
                will be at risk if we don’t take action soon."
                buttonname= "Calculate Your Carbon Emissions"
                path="emissions_calculator"
            />
            <EachFeature
                source="img/readingbook.jpg"
                alt="Woman reading a book and holding a cup of coffee"
                name="Resources"
                description="Want to find relevant information and resources about how you can 
                choose sustainable modes of transportation? Check out our resources tab!"
                buttonname="View Resources"
                path="resources"
            />
            <EachFeature 
                source="img/bus.jpg"
                alt="People walking out of a bus"
                name="Transportation Knowledge Quiz"
                description="How much do you know about sustainable modes of transportation 
                in the Seattle area? Take our knowledge quiz to find out! Be sure to check out
                out resources page for some hints to help you solve the quiz."
                buttonname="Take the Quiz"
                path="knowledge_quiz"
            />
        </>
    );
}

function EachPerson(props) {
    return (
        <section className="about-us-section">
            <div className="team-member">
                <img src={props.source} alt={props.alt} />
                <h3>{props.name}</h3>
                <p>{props.role}</p>
            </div>
        </section>
    )
}

export function AboutUs(props) {
    return (
        <div className="about-us-container">
            <EachPerson
                source="img/team-members/sabrina.jpg"
                alt="Sabrina Lin, one of the creators of this web app"
                name="Sabrina Lin"
                role="Project Manager & Developer"
            />
            <EachPerson
                source="img/driver.png"
                alt="Claire Lai, one of the creators of this web app"
                name="Claire Lai"
                role="UX Designer & Developer"
            />
            <EachPerson
                source="img/driver.png"
                alt="Alyson Yu, one of the creators of this web app"
                name="Alyson Yu"
                role="Project Manager & Developer"
            />
            <EachPerson
                source="img/driver.png"
                alt="Mari Woodworth, one of the creators of this web app"
                name="Mari Woodworth"
                role="UX Designer & Developer"
            />
            <EachPerson
                source="img/driver.png"
                alt="Sarah Chu, one of the creators of this web app"
                name="Sarah Chu"
                role="UX Researcher & Developer"
            />
        </div>
    );
}