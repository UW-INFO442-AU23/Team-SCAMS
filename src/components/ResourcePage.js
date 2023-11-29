import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import CARD_DATA from '../data/ResourceLinks.json';

export default function ResourcePage(props) {
    <Route path="/ResourcePage" element={<ResourcePage />} />
    return (
        <Resource />
    )
}

function Title(props) {
    const heading1 = props.heading1;
    return (
        <div className="d-flex px-4 py-4 justify-content-center">
            <h1>{heading1}</h1>
        </div>
    )
}

const Modal = ({ description, videoUrl, onClose }) => (

    <div id="modal-overlay" onClick={onClose}>
        <div id="modal-content">
            <p>{description}</p>

            <div className="video-container">
                <iframe
                    width="560"
                    height="315"
                    src={videoUrl}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
            <button className="mt-4" id="close-btn" onClick={onClose}>Close</button>
        </div>
    </div>
);

export function ResourceCard(props) {
    const title = props.title;
    const image = props.image;
    const description = props.description;
    const alt = props.alt;
    const videoUrl = props.videoUrl;
    const id = props.id;
    const [open, openModal] = useState(false)
    const toggleModal = () => {
        openModal(!open)
    };

    return (
        <div className="d-flex col-md-6 col-lg-4 px-4 py-3">
            <div className='mb-4' onClick={toggleModal}>
                <div className="entry-card card-body">

                    <div className="col-sm-auto">
                        <img className="col-sm-12" id="resourcepic" src={image} alt={alt} />
                    </div>
                    <div className="col-sm">
                        <h2 className="card-title homeTitle">{title}</h2>
                    </div>
                </div>
                {open && (
                    <Modal description={description} videoUrl={videoUrl} open={open} id={id} onClose={toggleModal} />
                )}
            </div>
        </div>
    );
}

export function EntryCardList(props) {
    const links = props.links;
    const compArr = links.map((entryObj, index) => {
        const element = (
            <ResourceCard
                title={entryObj.title}
                image={entryObj.image}
                alt={entryObj.alt}
                description={entryObj.description}
                videoUrl={entryObj.videoUrl}
                key={index}
            />
        )
        return element;
    })
    return (
        <div id="class-cards" className="row">
            {compArr}
        </div>
    )
}

export function Resource(props) {
    const [jsonData, setJsonData] = useState(CARD_DATA);
    useEffect(() => {
        // Fetch your JSON data here, for example:
        fetch(CARD_DATA)
            .then((response) => response.json())
            .then((data) => setJsonData(data.cards))
            .catch((error) => console.error('Error fetching JSON:', error));
    }, []);

    return (
        <div className='container'>
            <Title heading1={'Resource Page'} />
            <p class="text-center">*Hint: If you want to ace our Knowledge Quiz, this is a good page to help you learn more about sustainable modes of transportation!</p>
            <h2 class="py-4">What is a Carbon Footprint?</h2>
            <p>
                According to the <a
                    href="https://www.nationalgeographic.com/environment/article/what-is-a-carbon-footprint-how-to-measure-yours?loggedin=true&rnd=1698131599474" target="_blank">National
                    Geographic</a>, a carbon footprint is defined as “the sum total of all the greenhouse
                gas emissions that had to take place in order for a product to be produced or for an activity to take
                place.” Greenhouse gasses are gasses in the Earth’s atmosphere that trap heat (think carbon dioxide,
                methane, and nitrous oxide), with CO2 being the most prevalent. As the Earth’s atmosphere gets warmer and
                warmer, different kinds of climate crises arise, like hurricanes, wildfires, doughts, and floods. While
                reading the news and hearing about how rapidly the environmental condition is worsening, it can be easy to
                feel stressed and helpless. However, since we each have a carbon footprint, there are actions we can all
                take to contribute to the protection of our planet.
            </p>

            <div class="container callout_container rounded py-4 my-5">

                <h2 class="text-center">Green Tip!</h2>
                <p>Are you viewing this website on your computer through Chrome? Did you know that <a
                    href="https://googleblog.blogspot.com/2009/01/powering-google-search.html" target="_blank">every
                    Google search produces around 0.2 grams of carbon dioxide</a>? Here are a couple of alternate web browsers
                    that are eco-friendlier and help offset your carbon footprint using money generated from ad revenue:
                </p>
                <li>
                    <a href="https://www.ecosia.org/?c=en" target="_blank">Ecosia:</a> Plants trees
                </li>
                <li>
                    <a href="https://www.ekoru.org/" target="_blank">Ecosia:</a> Removes trash from ocean
                </li>
                <li>
                    <a href="https://rapusia.org/" target="_blank">Rapusia:</a> Donates money to social and environmental projects
                </li>
            </div>

            <h2 class="py-4">Alternate Forms of Transportation</h2>
            <p>
                What’s one way that you can reduce your carbon footprint? If you commute regularly by driving yourself in a
                car, a good first step can be how you get around King County. According to the <a
                    href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases" target="_blank">US Environmental Protection
                    Agency</a>, “the combustion of fossil fuels such as gasoline and diesel to transport people and goods
                was the largest source of CO2 emissions in 2021, accounting for 35% of total U.S. CO2 emissions and 28% of
                total
                U.S. greenhouse gas emissions.” In the state of Washington, transportation accounts for nearly 50% of all
                greenhouse gas emissions. Click on each card below to learn more about each method of eco-friendlier,
                sustainable modes of transportation that are available in the Seattle area.
            </p>

            <div className="row py-4">
                <h4 class="text-center py-4">Click on each mode of transportation to learn more about each one!</h4>
                <EntryCardList links={jsonData} />
            </div>

            <div class="py-5">
                <h4 class="text-center">Take our Knowledge Quiz to see how much you know!</h4>

                <div class="button_center">
                    <a type="button" className="btn btn-primary" href="knowledge_quiz">
                        Take The Quiz
                    </a>
                </div>
            </div>
        </div>
    )
}