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
               viewsmain={parseFloat(videos.views).toLocaleString('en')}
               duration={videos.duration}
               poster={videos.image}
               thumbsup={parseFloat(videos.thumbsUp).toLocaleString('en')}
               thumbsdown={parseFloat(videos.thumbsDown).toLocaleString('en')}
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