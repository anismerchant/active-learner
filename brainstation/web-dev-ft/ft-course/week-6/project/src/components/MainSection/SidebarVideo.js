import React, { Component } from 'react';

class SidebarVideo extends Component {
    render() {
        return(
            <div className="video__container__sidebar--video">
                <div className="video__container__sidebar--video-artifact">
                    <img src={this.props.image} alt="Video" />
                </div>
                <div className="video__container__sidebar--video-info">
                    <h6 className="video__container__sidebar--text">{this.props.title}</h6>
                    <h6 className="video__container__sidebar--name">{this.props.channel}</h6>
                    <h6 className="video__container__sidebar--views">{this.props.views} Views</h6>
                </div>
            </div>
        );
    }
}

export default SidebarVideo;