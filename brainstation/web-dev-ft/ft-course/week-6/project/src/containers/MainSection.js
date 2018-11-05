import React, { Component } from 'react';
import videos from '../videoData';
import VideoContainerMain from '../components/MainSection/VideoContainerMain';
import VideoContainerSidebar from '../components/MainSection/VideoContainerSidebar';

class MainSection extends Component {
    state = {
        videos: videos
      }

    render() {
        return(
            <main id="video__container">
                <VideoContainerMain videoArray={this.state.videos} />
                <VideoContainerSidebar videoArray={this.state.videos} />
            </main>
        );
    }
}

export default MainSection;