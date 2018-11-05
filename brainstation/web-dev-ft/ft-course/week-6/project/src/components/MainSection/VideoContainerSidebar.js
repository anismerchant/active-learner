import React, { Component } from 'react';
import SidebarVideo from './SidebarVideo';
import SidebarVideoSectionHeading from './SidebarVideoSectionHeading';

class VideoContainerSidebar extends Component {
    render() {
        let videos = this.props.videoArray;
            return (
            <div className="video__container__sidebar">
                <SidebarVideoSectionHeading />
                    { videos.map ( video => {
                        return <SidebarVideo
                            title={video.title}
                            channel={video.channel}
                            views={video.views}
                            image={video.image}
                        />
                        })
                    }
            </div>
            );
        }
    }

export default VideoContainerSidebar;