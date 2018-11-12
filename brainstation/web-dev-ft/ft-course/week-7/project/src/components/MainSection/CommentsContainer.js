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
                    userTimestamp = {
                        `${(Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 60 ? 'Just Now' 
                        : (Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 120 ? 'A minute ago' 
                        : (Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 180 ? 'About 2 minutes ago'
                        : (Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 240 ? 'About 3 minutes ago'
                        : (Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 300 ? 'About 4 minutes ago'
                        : (Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 360 ? 'About 5 minutes ago'
                        : ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) > 360) && ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 900) ? 'About 10 minutes ago'
                        : ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) > 900) && ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 1800) ? 'About 15 minutes ago'
                        : ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) > 1800) && ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 2700) ? 'About 30 minutes ago'
                        : ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) > 2700) && ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 3600) ? 'About 45 minutes ago'
                        : ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) > 3600) && ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 7200) ? 'More than an hour ago'
                        : ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) > 7200) && ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 10800) ? 'More than 2 hours ago'
                        : ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) > 10800) && ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 43200) ? 'More than 6 hours ago'
                        : ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) > 43200) && ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 86400) ? 'More than 12 hours ago'
                        : ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) > 86400) && ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 172800) ? 'More than a day ago'
                        : ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) > 172800) && ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 345600) ? 'More than 2 days ago'
                        : ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) > 172800) && ((Math.floor((milliSeconds - userInfo.timestamp)/1000)) < 345600) ? `${(Math.floor((milliSeconds - userInfo.timestamp)/1000/3600/24))} days ago`
                        : `${(Math.floor((milliSeconds - userInfo.timestamp)/1000/3600/24/30))} months ago` }
                    `}
                    userComment= {userInfo.comment}
                />
            })
        );
    }
}

export default CommentsContainer;