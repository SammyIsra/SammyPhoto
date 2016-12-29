import React from 'react';

//Functional component of a photo in the stream
const Photo = (props) => {

    //prop photo
    const photo = props.photo;

    return (
        <img
            className="photo"
            src={photo.url_m}
            height={photo.height_m}
            width={photo.width_m}
            alt={photo.title}
        />
    );
}

export default Photo;
