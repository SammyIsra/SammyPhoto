import React, { Component } from 'react';

import './Bio.css';

class Bio extends Component {
    render() {
        return (
            <div className="row green">
                <div className="container">
                    <div className="twelve columns">
                        <h2 className="bio-title">About Sammy Israwi</h2>
                        <p className="bio">
                            Sammy is a Computer Science student at the University of Central Florida. In his free time, Sammy likes to play video games, watch movies, and most specially take pictures. His favorite subject is people, but Sammy also has a collection of landscapes, insects, street art and spontaneous shots.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bio;
