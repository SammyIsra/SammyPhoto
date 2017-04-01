import React, { Component } from 'react';

import backgroundImage from '../../resources/title-background.jpg'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="main_nav">
                <div className="bg-container">
                    <img src={backgroundImage} alt="Full screen background"></img>
                </div>
                <div className="mask">
                    <div className="title">
                        <h1>SAMMY ISRAWI</h1>
                    </div>
                    <div className="subtitle">
                        <p>PROGRAMMER | PHOTOGRAPHER</p>
                    </div>
                </div>
            </header>
        );
    }


}

export default Header;
