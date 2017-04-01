import React from 'react';
import {BrowserRouter as Router, 
        Link,
        Route} from 'react-router-dom';

import Photographer from './photographer/Photographer';
import Developer from './developer/Developer';

export default function(props) {
    return (
        <Router>
            <div>
                <Route  exact path="/" component={Here} />
                <Route exact path="/photographer" component={Photographer} />
                <Route exact path="/developer" component={Developer} />
            </div>
        </Router>
    );
}

function Here(){
    return (
        <h1>Home!</h1>
    )
}