import React, { Component } from 'react';
import MainVideo from './MainVideo';

class MainVideoContainer extends Component {
    render() {
        let videos = this.props.videoDetailsObject;
         
        return (
            <MainVideo 
               mainvideo={`${videos.video}${this.props.apiKey}`}
               titlemain={videos.title}
               description={videos.description}
               channel={videos.channel} 
               viewsmain={videos.views}
               duration={videos.duration}
               poster={videos.image}
               thumbsup={videos.thumbsUp}
               thumbsdown={videos.thumbsDown}
               subscribe={videos.subscriberCount}
               comments={
                   videos.comments.map((comment) => {
                        return comment;
                    })
               }
            />

        );
    }
}

export default MainVideoContainer;