import React, {Component} from 'react';

import './Lightbox.css';

class Lightbox extends Component {

    
    
    handleImgLoaded(e){
        e.target.className += 'img-loaded';
    } 

    escKeyPressHandler(e){
        if(e.key === "Escape")
            this.props.onClose()
    }

    componentDidMount(){
        window.addEventListener("keydown", this.escKeyPressHandler.bind(this));
    }

    componentWillUnmount(){
        window.removeEventListener("keydown", this.escKeyPressHandler.bind(this));
    }

    render(){

        const photo = this.props.photo;
        const srcLink = `https://www.flickr.com/photos/${photo.owner}/${photo.id}/`

        return (
            <div id="lightbox" className="modal">
                <span className="close cursor" 
                    onClick={this.props.onClose}>&times;</span>

                <div className="modal-content">
                    <a href={srcLink} target="_blank">
                        <img
                            src={photo.url_l}
                            alt={photo.title}
                            onLoad={this.handleImgLoaded}  />

                        <div className="caption-container">
                            <p id="title">{photo.title}</p>
                        </div>
                    </a>

                </div>
            </div>
        );
    }
}

export default Lightbox;
