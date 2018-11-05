import React, { Component } from 'react';
import MainVideo from './MainVideo';
import MainVideoHeading from './MainVideoHeading';
import MainVideoStats from './MainVideoStats';
import MainVideoComment from './MainVideoComment';

class VideoContainerMain extends Component {
    render() {
        let videos = this.props.videoArray;
        return (
            <div className="video__container__main">
                <MainVideo />
                <MainVideoHeading titlemain={videos[0].titlemain}/>
                <MainVideoStats 
                    viewsmain={videos[0].viewsmain}
                    thumbsup={videos[0].thumbsup}
                    thumbsdown={videos[0].thumbsdown}
                />
                <MainVideoComment />
            </div>
        );
    }
}

export default VideoContainerMain;