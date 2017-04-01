import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Photographer from './components/photographer/Photographer';
import Developer from './components/developer/Developer';
import Home from './components/Home';

export default (
    <Route path="/">
        <IndexRoute component={Home} />
        <Route path="photographer" component={Photographer} />
        <Route path="developer" component={Developer} />
    </Route>
);