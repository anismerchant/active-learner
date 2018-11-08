import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import NavBarMobile from '../components/NavBarSection/NavBarMobile';
import NavBarDesktopLaptop from '../components/NavBarSection/NavBarDesktopLaptop';

class NavBarSection extends Component {
    render() {
        return (
            <MediaQuery maxDeviceWidth={600}>
            {
                (matches) => (matches) ? <NavBarMobile /> : <NavBarDesktopLaptop /> 
            }
            </MediaQuery>
        );
    }
}

export default NavBarSection;