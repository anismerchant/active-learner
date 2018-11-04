import React, { Component } from 'react';
import VideoContainerMain from './components/MainSection/VideoContainerMain';
import VideoContainerSidebar from './components/MainSection/VideoContainerSidebar';

class MainSection extends Component {
    render() {
        return(
            <main id="video__container">
                <VideoContainerMain />
                <VideoContainerSidebar />
            </main>
        );
    }
}

export default MainSection;