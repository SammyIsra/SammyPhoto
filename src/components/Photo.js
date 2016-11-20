import React, { Component } from 'react';



class Photo extends Component {
    render() {
        return (
            <img
                className="photo"
                src={this.props.photo.url_m}
                height={this.props.photo.height_m}
                width={this.props.photo.width_m}
                alt={this.props.photo.title}
            />
        );
    }
}

export default Photo;
