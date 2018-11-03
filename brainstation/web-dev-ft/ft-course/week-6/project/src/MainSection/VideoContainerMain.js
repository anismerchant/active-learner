import React, { Component } from 'react';

class VideoContainerMain extends Component {
    render() {
        return (
            <div className="video__container__main">
            <video className="video__container__main--video" poster="./assets/Images/maxresdefault.jpg" width="100%" height="auto" controls>
                <source src="./assets/videos/BrainStation Sample Video.mp4" type="video/mp4" />
            </video>
            <div className="video__container__main--text">
                <h4>Jose Bautista hammers go-ahead three-run shot in ALDS Game 5, delivers epic bat flip</h4>
            </div>
            <div className="video__container__main--stats">
                <div className="video__container__main--views">2,304,189 views</div>
                <div className="video__container__main--reaction">
                    <div className="video__container__main--thumbsup">
                        <img src="./assets/Icons/Thumbs Up.svg" alt="Thumbs Up" />
                        <h6>6.9k</h6>
                    </div>
                    <div className="video__container__main--thumbsdown">
                        <img src="./assets/Icons/Thumbs Down.svg" alt="Thumbs Down" />
                        <h6>202</h6>
                    </div>
                    <div className="video__container__main--share">
                        <img src="./assets/Icons/Share.svg" alt="Share Button" />
                        <h6>SHARE</h6>
                    </div>
                </div>
            </div>
            <div className="video__container__main--channel"> 
                <div className="video__container__main--channel-info">
                    <div className="video__container__main--channel-info-author">
                        <img className="video__container__main--channel-info-author-image" src="./assets/Images/john_gibbons-resized.jpg" alt="Author Video" />
                        <div className="video__container__main--channel-info-publish-details">
                            <h6 className="video__container__main--channel-info-publish-details-name">MLB</h6>
                            <h6 className="video__container__main--channel-info-publish-details-date">Published on Oct 14, 2015</h6>
                        </div>
                    </div>
                    <div className="video__container__main--channel-info-subscribe">                   
                        <button className="video__container__main--channel-info-subscribe-btn">SUBSCRIBE<span>1.2M</span></button>
                    </div>
                </div>
                <div className="video__container__main--video-details">
                    <h6 className="video__container__main--video-details-desc">10/14/15: Jose Bautista crushes a long go-ahead three-run homer in the 7th inning of ALDS Game 5</h6>
                    <h4 className="video__container__main--videos-details-show-more">SHOW MORE</h4>
                </div>
            </div>
        </div>
        );
    }
}

export default VideoContainerMain;