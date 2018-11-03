import React, { Component } from 'react';
import VideoContainerMain from './MainSection/VideoContainerMain';
import VideoContainerSidebar from './MainSection/VideoContainerSidebar';

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