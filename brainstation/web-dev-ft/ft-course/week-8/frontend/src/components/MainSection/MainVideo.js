import React, { Component } from 'react';
import CommentsContainer from './CommentsContainer';

class MainVideo extends Component {
    constructor(){
        super();
        // Creating a 'ref' for comment input and storing
        // it in 'this', which is the instance that's created.
        this.userCommentInput = React.createRef();
    }

    commentSubmit = (e) => {
        //e.preventDefault();

        // using 'ref' to access the DOM objects of 
        // our user comment inputs and pull out the .value
        
        let userComment = this.userCommentInput.current.value;
        console.log(userComment);
        let userCommentObject = {
            comment: userComment
        }
        this.submitHandler(userCommentObject);
    }

    submitHandler = (comment) => {
        // Make a POST request to the server

        const init = {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }
    
        const urlComments = `http://localhost:8080/videos/${this.props.videos.id}/comments`;
        fetch(urlComments, init).then((response) => {
            return response.json();
        })
        .then((data) => {
           return data;
        })
        .catch( (err) => {
            console.log(err);
        });
    }

    cancelComment = (e) => {
        e.preventDefault();
        document.getElementById("cancel").innerHTML= "";
    }

    render() {
        // Receives props (i.e. data) from its parent component
        let {videos} = this.props;
        return ( 
            <div className="video__container__main">
                <video  src={`${videos.video}${this.props.apiKey}`} className="video__container__main--video" poster={videos.image} width="100%" height="auto" controls></video>
                <div className="video__container__main--text">
                    <h4>{videos.title}</h4>
                </div>
                <div className="video__container__main--stats">
                    <div className="video__container__main--views">{parseFloat(videos.views).toLocaleString('en')} views</div>
                    <div className="video__container__main--reaction">
                        <div className="video__container__main--thumbsup">
                            <img src="../../assets/Icons/Thumbs Up.svg" alt="Thumbs Up" />
                            <h6>{parseFloat(videos.thumbsUp).toLocaleString('en')}</h6>
                        </div>
                        <div className="video__container__main--thumbsdown">
                            <img src="./../assets/Icons/Thumbs Down.svg" alt="Thumbs Down" />
                            <h6>{parseFloat(videos.thumbsDown).toLocaleString('en')}</h6>
                        </div>
                        <div className="video__container__main--share">
                            <img src="../../assets/Icons/Share.svg" alt="Share Button" />
                            <h6>SHARE</h6>
                        </div>
                    </div>
                </div>
                <div className="video__container__main--channel"> 
                    <div className="video__container__main--channel-info">
                        <div className="video__container__main--channel-info-author">
                            <img className="video__container__main--channel-info-author-image" src="../../assets/Images/john_gibbons-resized.jpg" alt="Author Video" />
                            <div className="video__container__main--channel-info-publish-details">
                                <h6 className="video__container__main--channel-info-publish-details-name">{videos.channel}</h6>
                                <h6 className="video__container__main--channel-info-publish-details-date">Published on Oct 14, 2018</h6>
                            </div>
                        </div>
                        <div className="video__container__main--channel-info-subscribe">                   
                            <button className="video__container__main--channel-info-subscribe-btn">SUBSCRIBE<span>{videos.subscriberCount}</span></button>
                        </div>
                    </div>
                    <div className="video__container__main--video-details">
                        <h6 className="video__container__main--video-details-desc">{videos.description}</h6>
                        <h4 className="video__container__main--videos-details-show-more">SHOW MORE</h4>
                    </div>
                </div>
                <div className="video__container__main--comments">
                    <div className = "video__container__main--video-descriptions">
                        <img className="video__container__main--subscriber-pic" src="../../assets/Images/john_gibbons-resized.jpg" alt="Subscriber" />
                        <form id="video__container__main--grabComment" onSubmit={this.commentSubmit}>
                            <label className= "video__container__main--comment">
                                <input id="cancel" className="video__container__main--comment-input" name="comment" placeholder="Add a public comment" ref={this.userCommentInput}></input>
                            </label>                  
                            <div className="video__container__main--comment-buttons"> 
                                <button className="video__container__main--cancel" type="cancel" onClick={this.cancelComment}>CANCEL</button>
                                <button className="video__container__main--submit" type="submit">COMMENT</button>  
                            </div>         
                        </form>
                    </div>
                    <CommentsContainer commentsArray={videos.comments} />
                </div>
            </div>
        );
    }
}

export default MainVideo;