import React, { Component } from 'react';

import './Bio.css';

class Bio extends Component {
    render() {
        return (
            <div className="row">
                <div className="container">
                    <div className="twelve columns">
                        <h2 className="bio-title">About Sammy Israwi</h2>
                        <p className="bio">
                            Sammy is a Computer Science student at the University
                            of Central Florida. He enjoys videogames, movies, and attending art galleries.
                            However, his biggest passion is photography.
                            His main subjects are street art and spontaneity,
                            but what he loves the most is taking portraits of people.<br />
                            Feel free to reach him via social media!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bio;
