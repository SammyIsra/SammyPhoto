import React from 'react';

import './Lightbox.css';

const Lightbox = (props) => {

    const photo = props.photo;

    return (
        <div id="myModal" className="modal">
            <span className="close cursor" onClick={() => props.onClose()}>&times;</span>
            <div className="modal-content">

                <div className="selected-pic">
                    <img
                        src={photo.url_m}
                        alt="flickr"  />
                </div>

                <div className="caption-container">
                    <p id="caption">{photo.title}</p>
                </div>

            </div>
        </div>
    )
}

export default Lightbox;
