import React, { Component } from 'react';

class NavBarLogoImage extends Component {
    render() {
        // Brainflix logo to be passed as prop so it can be wrapped in a Link component
        // Easier to manage this way
        return (
            <img src={"../../assets/Icons/BrainFlix Logo.svg"} alt="BrainFlix Logo" />
        );
    }
}

export default NavBarLogoImage;