import React, { Component } from 'react';

class MainVideoHeading extends Component {
    render() {
        return (
            <div className="video__container__main--text">
                <h4>{this.props.titlemain}</h4>
            </div>
        );
    }
}

export default MainVideoHeading;