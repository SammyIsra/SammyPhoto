import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './Header.css'

class Header extends Component {

    //Renders the background of the header
    renderBackground(){
        if(this.props.backgroundImage)
            return (<img src={this.props.backgroundImage} alt="Full screen background"></img>);
        else if(this.props.backgroundColor)
            return (<div style={{backgroundColor:this.props.backgroundColor, width:'100%', height:'100%'}}></div>);
        else
            return (<div style={{backgroundColor:'black', width:'100%', height:'100%'}}></div>);
    }

    //Renders the theme of the header (Light or Dark)
    //If theme is 'light' text is black and bg washed out
    //If theme is not 'light', text is white and bg is burnt
    themeClass(){

        if(this.props.theme && this.props.theme.toLowerCase() === "light"){
            return "light";
        } else {
           return "dark";
        }
    }

    render() {

        const theme = this.themeClass();

        return (
            <header className={`main-nav ${theme}`}>
                <div className="bg-container">
                    {this.renderBackground()}
                </div>
                <div className={`mask ${theme}`} style={theme.mask}>
                    <div className="title">
                        <Link to='/'>
                            <h1>SAMMY ISRAWI</h1>
                        </Link>
                    </div>
                    <div className="subtitle">
                        <p>
                            <Link to='/developer'>DEVELOPER</Link>&nbsp;|&nbsp; 
                            <Link to='/photographer'>PHOTOGRAPHER</Link>
                        </p>
                    </div>
                </div>
            </header>
        );
    }


}

export default Header;
