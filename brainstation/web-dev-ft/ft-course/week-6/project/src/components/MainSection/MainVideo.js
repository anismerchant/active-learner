import React, { Component } from 'react';

class MainVideo extends Component {
    render() {
        return( 
            <video className="video__container__main--video" poster={this.props.poster} width="100%" height="auto" controls>
                <source src={this.props.mainvideo} type="video/mp4" />
            </video>
        );
    }
}

export default MainVideo;