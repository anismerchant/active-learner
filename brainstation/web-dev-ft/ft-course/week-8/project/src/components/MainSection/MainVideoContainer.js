import React, { Component } from 'react';
import MainVideo from './MainVideo';

class MainVideoContainer extends Component {
    // Logic to loop through fetched data stored in videoDetails object
    // and displays it within its child component
    render() {
        let videos = this.props.videoDetailsObject;
         
        return (
            <MainVideo
               videos={this.props.videoDetailsObject}  
               apiKey={this.props.apiKey}
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