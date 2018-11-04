import React, { Component } from 'react';
import SidebarVideo from './SidebarVideo';
import SidebarVideoSectionHeading from './SidebarVideoSectionHeading';

class VideoContainerSidebar extends Component {
    render() {
        return (
        <div className="video__container__sidebar">
            <SidebarVideoSectionHeading />
            <SidebarVideo />
            <SidebarVideo />
            <SidebarVideo />
            <SidebarVideo />
            <SidebarVideo />
            <SidebarVideo />
            <SidebarVideo />
            <SidebarVideo />
        </div>
        );
    }
}

export default VideoContainerSidebar;