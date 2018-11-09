import React, { Component } from 'react';
import SidebarVideo from './SidebarVideo';
import { Link } from 'react-router-dom'

class SidebarVideoContainer extends Component {
    render() {
        let videos = this.props.videoArray;
            return (
            <div className="video__container__sidebar">
                <div className="video__container__sidebar--heading">
                    <h6 className="video__container__sidebar--upnext">Up next</h6>
                </div>
                { videos.map ( (video, index) => {
                    return <Link className="link" to={`/videos/${video.id}`}
                            key={index}>
                        <SidebarVideo 
                            key={index}
                            title={video.title}
                            channel={video.channel}
                            views={video.views}
                            duration={video.duration}
                            image={video.image}
                        />
                    </Link>
                    })
                }
            </div>
            );
        }
    }

export default SidebarVideoContainer;