import React from 'react';

import './Lightbox.css';

const Lightbox = (props) => {

    const photo = props.photo;

    return (
        <div id="myModal" className="modal">
            <span className="close cursor" onClick={() => props.onClose()}>&times;</span>
            <div className="modal-content">

                <img
                    src={photo.url_l}
                    alt={photo.title}  />

                <div className="caption-container">
                    <p id="title">{photo.title}</p>
                </div>

            </div>
        </div>
    )
}

export default Lightbox;
