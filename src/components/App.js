import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import PhotoStream from './PhotoStream';
import Footer from './Footer';
import Bio from './Bio';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Bio />
                <PhotoStream />
                <Footer />
            </div>
        );
    }
}

export default App;
