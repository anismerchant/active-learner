import React, { Component } from 'react';

class MainVideoStats extends Component {
    render() {
        return (
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
        );
    }
}

export default MainVideoStats;