import React from 'react';
import Data from '../data/ResourceLinks.json';

export function ResourceCard(props) {
    const title = props.title;
    const image = props.image;
    const alt = props.alt;

    return (
        <div className="d-flex col-md-6 col-lg-4 px-4 py-3">
            <div className='card mb-4'>
                <div className="entry-card card-body">
                    <div className="col-sm-auto">
                        <img className="col-sm-12" id="homecardpic" src={image} alt={alt} />
                    </div>
                    <div className="col-sm">
                        <h2 className="card-title homeTitle">{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}