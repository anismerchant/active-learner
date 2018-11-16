import React, { Component } from 'react';
import SidebarVideo from './SidebarVideo';
import { Link } from 'react-router-dom';

class SidebarVideoContainer extends Component {
    // Logic to loop through fetched data stored in videos array
    // of objects and displays it within its child component
    render() {
        let videos = this.props.videoArray;
        let {match} = this.props;
            return (
                <div className="video__container__sidebar">
                    <div className="video__container__sidebar--heading">
                        <h6 className="video__container__sidebar--upnext">Up next</h6>
                    </div>
                    { videos.filter((removeSelectedVid) => {
                        return match.params.id !== removeSelectedVid.id
                    }).map((video, index) => {  
                        return <Link className="video__container__sidebar--video-link-container" to={`/videos/${video.id}`}
                                key={index}>
                                    <SidebarVideo 
                                        key={index}
                                        title={video.title}
                                        channel={video.channel}
                                        views={parseFloat(video.views).toLocaleString('en')}
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