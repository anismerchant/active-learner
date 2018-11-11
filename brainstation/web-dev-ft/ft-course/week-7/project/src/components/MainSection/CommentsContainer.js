import React, { Component } from 'react';
import Comment from './Comment';

class CommentsContainer extends Component {
    render() {
        let comment = this.props.commentsArray;
        let date = new Date();
        let milliSeconds = date.getTime();

        return(
            comment.map((userInfo, index) => {
                return <Comment
                    key={index}
                    userName={userInfo.name}
                    userTimestamp = {`${(Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 60 ? 'Just Now' : 'A few months ago'}`}
                    userComment= {userInfo.comment}
                />
            })
        );
    }
}

export default CommentsContainer;