import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav id="navigation__container">
                <div className="navigation__logo">
                    <img src={"./assets/Icons/BrainFlix Logo.svg"} alt="BrainFlix Logo" />
                </div>
                <div className="navigation__search">
                    <input className="navigation__search--input" type="text" placeholder="Search" />
                    <div className="navigation__search--icon">
                        <img src={"./assets/Icons/Search.svg"} alt="Search Bar Icon" />
                    </div>
                </div>
                <div className="navigation__images">
                    <img className="navigation__images--content-upload" src={"./assets/Icons/Content Upload.svg"} alt="Content Upload" /> 
                    <img className="navigation__images--john-gibbons" src={"./assets/Images/john_gibbons-resized.jpg"} alt="Author" />
                </div>      
            </nav>
        );
    }
}

export default NavBar;