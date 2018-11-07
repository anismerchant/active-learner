import React, { Component } from 'react';
import videos from '../videoData';
import MainVideoContainer from '../components/MainSection/MainVideoContainer';
import SidebarVideoContainer from '../components/MainSection/SidebarVideoContainer';

class MainSection extends Component {
    state = {
        videos: videos
      }

    render() {
        return(
            <main id="video__container">
                <MainVideoContainer videoArray={this.state.videos} />
                <SidebarVideoContainer videoArray={this.state.videos} />
            </main>
        );
    }
}

export default MainSection;