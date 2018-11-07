import React, { Component } from 'react';
import MainVideo from './MainVideo';
import MainVideoHeading from './MainVideoHeading';
import MainVideoStats from './MainVideoStats';
import MainVideoDesc from './MainVideoDesc';

class VideoContainerMain extends Component {
    render() {
        let videos = this.props.videoArray;
        return (
            <div className="video__container__main">
                <MainVideo 
                    mainvideo={videos[0].mainvideo} 
                    poster={videos[0].poster}
                    />
                <MainVideoHeading titlemain={videos[0].titlemain}/>
                <MainVideoStats 
                    viewsmain={videos[0].viewsmain}
                    thumbsup={videos[0].thumbsup}
                    thumbsdown={videos[0].thumbsdown}
                />
                <MainVideoDesc 
                    channel={videos[0].channel}
                    publishdate={videos[0].publishdate}
                    subscribe={videos[0].subscribe}
                    descmain={videos[0].descmain}
                />
            </div>
        );
    }
}

export default VideoContainerMain;