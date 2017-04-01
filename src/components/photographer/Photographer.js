import React, { Component } from 'react';
import './Photographer.css';

import Header from '../Header';
import PhotoStream from './PhotoStream';
import Footer from './Footer';
import Bio from './Bio';
import Lightbox from './Lightbox';

import backgroundImage from '../../resources/title-background.jpg'

class Photographer extends Component {

    constructor(props){
        super(props);
        this.state = {
            shouldLightBoxDisplay: false
        };
    }

    //Select picture (aka) enter the lightbox
    enterLightbox(photo) {
        this.setState({
            shouldLightBoxDisplay: true,
            selectedPhoto: photo
        });
    }

    //Exit the lightbox
    exitLightbox(){
        this.setState({
            shouldLightBoxDisplay: false
        })
    }

    lightBox(){
        let lightDom;

        if(this.state.shouldLightBoxDisplay){
            lightDom = ( <Lightbox photo={this.state.selectedPhoto} onClose={this.exitLightbox.bind(this)} /> );
        }

        return lightDom;
    }

    render() {
        return (
            <div className="App">
                {this.lightBox()}
                <Header backgroundImage={backgroundImage}/>
                <Bio />
                <PhotoStream onSelectPhoto={this.enterLightbox.bind(this)} />
                <Footer />
            </div>
        );
    }
}

export default Photographer;
