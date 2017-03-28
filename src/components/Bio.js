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
                            I am a Computer Science student at the University
                            of Central Florida. I enjoy videogames, movies, and attending art galleries.
                            However, my biggest passion is photography.
                            My main subjects are street art and spontaneity,
                            but what I love the most is taking portraits of people.<br />
                            Feel free to reach me via social media!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bio;
