import React, { Component } from 'react';
import SidebarVideo from './SidebarVideo';

class SidebarVideoContainer extends Component {
    render() {
        let videos = this.props.videoArray;
            return (
            <div className="video__container__sidebar">
                <div className="video__container__sidebar--heading">
                    <h6 className="video__container__sidebar--upnext">Up next</h6>
                </div>
                { videos.map ( (video, index) => {
                    return <SidebarVideo 
                        key={index}
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

export default SidebarVideoContainer;