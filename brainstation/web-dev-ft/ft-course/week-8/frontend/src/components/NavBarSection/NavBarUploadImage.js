import React, { Component } from 'react';

class NavBarUploadImage extends Component {
    render() {
        // Brainflix upload image to be passed as prop so it can be wrapped in a Link component
        // Easier to manage this way
        return (
            <img className="navigation__images--content-upload" src={"../../assets/Icons/Content Upload.svg"} alt="Content Upload" /> 
        );
    }
}

export default NavBarUploadImage;