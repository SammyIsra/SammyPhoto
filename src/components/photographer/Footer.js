import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row twelve columns">
                        <ul className="social">
                            <li className="github"><a href="https://github.com/SammyIsra"><i className="fa fa-github-square fa-lg"></i></a></li>
                            {/*<li className="facebook"><a href="https://www.facebook.com/sammy.israwi"><i className="fa fa-facebook-square fa-lg"></i></a></li> */}
                            <li className="instagram"><a href="https://www.instagram.com/sammyisra"><i className="fa fa-instagram fa-lg"></i></a></li>
                            <li className="flickr"><a href="https://www.flickr.com/sammy_iy"><i className="fa fa-flickr fa-lg"></i></a></li>
                            <li className="linkedin"><a href="https://www.linkedin.com/in/sammyisrawi"><i className="fa fa-linkedin-square fa-lg"></i></a></li>
                        </ul>
                    </div>
                    <div className="row twelve columns">
                        <p className="copyright">
                            &copy; 2016 Sammy Israwi Photography. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
