import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import NavBarMobile from '../components/NavBarSection/NavBarMobile';
import NavBarDesktopLaptop from '../components/NavBarSection/NavBarDesktopLaptop';

class NavBar extends Component {
    render() {
        return (
            <MediaQuery maxDeviceWidth={600}>
                {
                    (matches) => {
                        if (matches) {
                            return (
                                <NavBarMobile />
                            );
                        } else {
                            return (
                                <NavBarDesktopLaptop />
                            );
                        }
                    }
                }
            </MediaQuery>
        );
    }
}

export default NavBar;