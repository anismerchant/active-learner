import React, { Component } from 'react';
import MainVideo from './MainVideo';
import MainVideoHeading from './MainVideoHeading';
import MainVideoStats from './MainVideoStats';
import MainVideoComment from './MainVideoComment';

class VideoContainerMain extends Component {
    render() {
        return (
            <div className="video__container__main">
                <MainVideo />
                <MainVideoHeading />
                <MainVideoStats />
                <MainVideoComment />
            </div>
        );
    }
}

export default VideoContainerMain;