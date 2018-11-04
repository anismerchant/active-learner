import React, { Component } from 'react';

class MainVideo extends Component {
    render() {
        return( 
            <video className="video__container__main--video" poster="./assets/Images/maxresdefault.jpg" width="100%" height="auto" controls>
                <source src="./assets/videos/BrainStation Sample Video.mp4" type="video/mp4" />
            </video>
        );
    }
}

export default MainVideo;