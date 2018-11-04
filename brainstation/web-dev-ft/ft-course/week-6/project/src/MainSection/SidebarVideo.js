import React, { Component } from 'react';

class SidebarVideo extends Component {
    render() {
        return(
            <div className="video__container__sidebar--video">
                <div className="video__container__sidebar--video-artifact">
                    <img src="./assets/Images/hqdefault.jpg" alt="Video" />
                </div>
                <div className="video__container__sidebar--video-info">
                    <h6 className="video__container__sidebar--text">TEX @TOR Gm5: Blue Jays take lead in wild 7th inning</h6>
                    <h6 className="video__container__sidebar--name">MLB</h6>
                    <h6 className="video__container__sidebar--views">1.1M Views</h6>
                </div>
            </div>
        );
    }
}

export default SidebarVideo;