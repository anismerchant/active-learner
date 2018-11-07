import React, { Component } from 'react';

class MainVideo extends Component {
    render() {
        return( 
            <div className="video__container__main">
                <video className="video__container__main--video" poster={this.props.poster} width="100%" height="auto" controls>
                    <source src={this.props.mainvideo} type="video/mp4" />
                </video>
                <div className="video__container__main--text">
                    <h4>{this.props.titlemain}</h4>
                </div>
                <div className="video__container__main--stats">
                    <div className="video__container__main--views">{this.props.viewsmain} views</div>
                    <div className="video__container__main--reaction">
                        <div className="video__container__main--thumbsup">
                            <img src="./assets/Icons/Thumbs Up.svg" alt="Thumbs Up" />
                            <h6>{this.props.thumbsup}</h6>
                        </div>
                        <div className="video__container__main--thumbsdown">
                            <img src="./assets/Icons/Thumbs Down.svg" alt="Thumbs Down" />
                            <h6>{this.props.thumbsdown}</h6>
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
                                <h6 className="video__container__main--channel-info-publish-details-name">{this.props.channel}</h6>
                                <h6 className="video__container__main--channel-info-publish-details-date">{this.props.publishdate}</h6>
                            </div>
                        </div>
                        <div className="video__container__main--channel-info-subscribe">                   
                            <button className="video__container__main--channel-info-subscribe-btn">SUBSCRIBE<span>{this.props.subscribe}</span></button>
                        </div>
                    </div>
                    <div className="video__container__main--video-details">
                        <h6 className="video__container__main--video-details-desc">{this.props.descmain}</h6>
                        <h4 className="video__container__main--videos-details-show-more">SHOW MORE</h4>
                    </div>
                </div>
                <div className="video__container__main--comments">
                    <img className="video__container__main--subscriber-pic" src="./assets/Images/john_gibbons-resized.jpg" alt="Subscriber" />
                    <form id="video__container__main--grabComment">    
                        <input name="comment" className="video__container__main--comment" placeholder="Add a public comment"></input>                        
                        <div className="video__container__main--comment-buttons"> 
                            <button className="video__container__main--cancel" type="cancel">CANCEL</button>
                            <button className="video__container__main--submit" type="submit">COMMENT</button>  
                        </div>         
                    </form>
                </div>
            </div>
        );
    }
}

export default MainVideo;