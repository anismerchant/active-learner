import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div className="video__container__main--user-comment">
                <img className="video__container__main--user-pic" src="../../assets/Images/john_gibbons-resized.jpg" alt="Subscriber" />
                <div className="video__container__main--user">
                    <div className="video__container__main--user-name-and-timestamp">
                        <div className="video__container__main--user-name">
                            {this.props.userName}
                        </div>
                        <div className="video__container__main--user-timestamp">
                            {this.props.userTimestamp}
                        </div>
                    </div>
                    <div className="video__container__main--user-comment">
                            {this.props.userComment}
                    </div>
                </div>
            </div>
        );
    }

}

export default Comment;