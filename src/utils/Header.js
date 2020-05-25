import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div className="header-style-container d-flex align-items-center">
                <img src="/img/logo.svg" alt="information-walker" height="50px" width="40px" className="mb-2 mr-10"/>
                <div>
                    Information Walker
                </div>
            </div> 
        );
    }
}

export default Header;
