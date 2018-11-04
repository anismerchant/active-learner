import React, { Component } from 'react';

class MainVideoComment extends Component {
    render() {
        return (
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
        );
    }
}

export default MainVideoComment;