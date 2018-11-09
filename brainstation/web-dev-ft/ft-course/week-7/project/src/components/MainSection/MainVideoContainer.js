import React, { Component } from 'react';
import MainVideo from './MainVideo';

class MainVideoContainer extends Component {
    render() {
        let videos = this.props.videoDetailsArray;
        return (
            <MainVideo 
               mainvideo={`${videos.video}${this.props.apiKey}`}
               poster={videos.image}
               titlemain={videos.title}
               viewsmain={videos.views}
               thumbsup={videos.thumbsUp}
               thumbsdown={videos.thumbsDown}
               channel={videos.channel} 
               subscribe={videos.subscriberCount}
            />
        );
    }
}

export default MainVideoContainer;