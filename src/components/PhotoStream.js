import React, { Component } from 'react';
import axios from 'axios'

//Components
import Photo from './Photo';

//Stylesheets
import './PhotoStream.css'

class PhotoStream extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }

    photos(){
        return this.state.photos.map((item, index) => {
            return ( <Photo photo={item} key={index} onSelectPhoto={this.props.onSelectPhoto} /> )
        })
    }

    render() {
        return (
            <div id="photos">
                {this.photos()}
            </div>
        );
    }

    componentDidMount() {
        axios.get("https://sammy-photos.herokuapp.com/api/photos?sortBy=date&limitTo=40")
        .then((res) => {
            console.log("Response: ");
            console.log(res);
            this.setState({
                photos: res.data
            });
        })
        .catch((error) => {
            console.log("Error:");
            console.log(error);
        })
    }
}

export default PhotoStream;
