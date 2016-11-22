import React, { Component } from 'react';

import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="main_nav">
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
