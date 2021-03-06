import React, { Component} from 'react';
import NavBarUploadImage from './NavBarUploadImage';
import NavBarLogoImage from './NavBarLogoImage';
import { Link } from 'react-router-dom';

class NavBarMobile extends Component {
    render() {
        // Mobile version of nav bar
        return(
            <nav id="navigation__container">
                <div className="navigation--logo-and-images">
                    <div className="navigation__logo">
                        {<Link to='/'>
                            <NavBarLogoImage />
                        </Link>}
                    </div>
                    <div className="navigation__images">
                        {<Link to='/upload'>
                            <NavBarUploadImage />
                        </Link>}
                        <img className="navigation__images--john-gibbons" src={"../../assets/Images/john_gibbons-resized.jpg"} alt="Author" />
                    </div>
                </div>
                <div className="navigation__search">
                    <input className="navigation__search--input" type="text" placeholder="Search" />
                    <div className="navigation__search--icon">
                        <img src={"../../assets/Icons/Search.svg"} alt="Search Bar Icon" />
                    </div>
                </div>      
            </nav>
        );
    }
}

export default NavBarMobile;