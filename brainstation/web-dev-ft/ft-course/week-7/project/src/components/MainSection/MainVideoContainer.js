import React, { Component } from 'react';
import MainVideo from './MainVideo';

class MainVideoContainer extends Component {
    render() {
        let videos = this.props.videoDetailsObject;
         
        return (
            <MainVideo 
               mainvideo={`${videos.video}${this.props.apiKey}`}
               poster={videos.image}
               titlemain={videos.title}
               description={videos.description}
               viewsmain={videos.views}
               thumbsup={videos.thumbsUp}
               thumbsdown={videos.thumbsDown}
               channel={videos.channel} 
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