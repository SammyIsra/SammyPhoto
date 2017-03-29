import React from 'react';

import './Lightbox.css';

const Lightbox = (props) => {

    const photo = props.photo;
    const srcLink = `https://www.flickr.com/photos/${photo.owner}/${photo.id}/`
    
    function handleImgLoaded(e){
        e.target.className += 'img-loaded';
    } 

    return (
        <div id="lightbox" className="modal">
            <span className="close cursor" onClick={() => props.onClose()}>&times;</span>

            <div className="modal-content">
                <a href={srcLink} target="_blank">
                    <img
                        src={photo.url_l}
                        alt={photo.title}
                        onLoad={handleImgLoaded}  />

                    <div className="caption-container">
                        <p id="title">{photo.title}</p>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Lightbox;
