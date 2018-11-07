import React, { Component } from 'react';
import MainVideo from './MainVideo';

class VideoContainerMain extends Component {
    render() {
        let videos = this.props.videoArray;
        return (
            <MainVideo 
                mainvideo={videos[0].mainvideo} 
                poster={videos[0].poster}
                titlemain={videos[0].titlemain}
                viewsmain={videos[0].viewsmain}
                thumbsup={videos[0].thumbsup}
                thumbsdown={videos[0].thumbsdown}
                channel={videos[0].channel}
                publishdate={videos[0].publishdate}
                subscribe={videos[0].subscribe}
                descmain={videos[0].descmain}
            />
        );
    }
}

export default VideoContainerMain;