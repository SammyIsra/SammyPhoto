import React, { Component } from 'react';

import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="main_nav">
                <div className="bg-container">
                    <img src="title-background.jpg" alt="alt background img"></img>
                </div>
                <div className="mask">
                    <div className="title">
                        <a href="#">SAMMY ISRAWI</a>
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
