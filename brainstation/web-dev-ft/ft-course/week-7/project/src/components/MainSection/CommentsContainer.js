import React, { Component } from 'react';
import Comment from './Comment';

class CommentsContainer extends Component {
    render() {
        let comment = this.props.commentsArray;
        console.log(comment);
        return(
            comment.map((userInfo, index) => {
                return <Comment
                    key={index}
                    userName={userInfo.name}
                    userTimestamp={`${Math.floor((userInfo.timestamp)/1000/60/60/24/365)} years ago`}  
                    userComment= {userInfo.comment}
                />
            })
        );
    }
}

export default CommentsContainer;