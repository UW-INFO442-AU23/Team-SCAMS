import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ResourceCard } from "./ResourceCard";

export default function ResourcePage (props) {
    <Route path="/ResourcePage" element={<ResourcePage/>} />
    return (
        <Resource/>
    )
}

function Title(props) {
    const heading1 = props.heading1;
    return (
        <div className="d-flex px-4 py-4 justify-content-center">
            <h2>{heading1}</h2>
        </div>
    )
}

export function Resource (props) {
    return(
        <div className='container'> 
            <Title heading1={'Resource Page'} />
        
            <h2>What is a Carbon Footprint?</h2>
            <p>
                According to the <a
                    href="https://www.nationalgeographic.com/environment/article/what-is-a-carbon-footprint-how-to-measure-yours?loggedin=true&rnd=1698131599474">National
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
                        href="https://googleblog.blogspot.com/2009/01/powering-google-search.html">every
                        Google search produces around 0.2 grams of carbon dioxide</a>? Here are a couple of alternate web browsers
                        that are eco-friendlier and help offset your carbon footprint using money generated from ad revenue:
                </p>
                <li>
                    <a href="https://www.ecosia.org/?c=en">Ecosia:</a> Plants trees
                </li>
                <li>
                    <a href="https://www.ekoru.org/">Ecosia:</a> Removes trash from ocean
                </li>
                <li>
                    <a href="https://rapusia.org/">Rapusia:</a> Donates money to social and environmental projects
                </li>
            </div>

            <h2>Alternate Forms of Transportation</h2>
            <p>
                What’s one way that you can reduce your carbon footprint? If you commute regularly by driving yourself in a
                car, a good first step can be how you get around King County. According to the <a
                    href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases">US Environmental Protection
                    Agency</a>, “the combustion of fossil fuels such as gasoline and diesel to transport people and goods
                was the largest source of CO2 emissions in 2021, accounting for 35% of total U.S. CO2 emissions and 28% of
                total
                U.S. greenhouse gas emissions.” In the state of Washington, transportation accounts for nearly 50% of all
                greenhouse gas emissions. Click on each card below to learn more about each method of eco-friendlier,
                sustainable modes of transportation that are available in the Seattle area.
            </p>
            
            <div class="py-4">
                <h4 class="text-center">Take our Knowledge Quiz to see how much you know!</h4>

                <div class="button_center">
                    <button type="button" class="btn btn-primary">Take The Quiz</button>
                </div>
            </div>
            
            <ResourceCard />
        </div>

    )
}