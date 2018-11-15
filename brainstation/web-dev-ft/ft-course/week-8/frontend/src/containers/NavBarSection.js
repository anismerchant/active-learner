import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import NavBarMobile from '../components/NavBarSection/NavBarMobile';
import NavBarDesktopLaptop from '../components/NavBarSection/NavBarDesktopLaptop';

class NavBarSection extends Component {
    render() {
        return (
            // Display different nav bar section's html and css based on device width
            <MediaQuery maxDeviceWidth={800}>
            {
                (matches) => (matches) ? <NavBarMobile /> : <NavBarDesktopLaptop /> 
            }
            </MediaQuery>
        );
    }
}

export default NavBarSection;