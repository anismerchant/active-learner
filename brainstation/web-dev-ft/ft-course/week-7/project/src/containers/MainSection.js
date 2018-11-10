import React, { Component } from 'react';
import MainVideoContainer from '../components/MainSection/MainVideoContainer';
import SidebarVideoContainer from '../components/MainSection/SidebarVideoContainer';

const API_KEY='23b1b3fd-dfe1-493c-87e2-41469e77de7f';
const baseUrl ='https://project-2-api.herokuapp.com';
const videosPath ='/videos';
const queryString = '?api_key=';


class MainSection extends Component {
    state = {
        videos: [],
        videoDetails: {
            comments: []
      }
    }

    componentDidMount() {
        fetch(baseUrl + videosPath + queryString + API_KEY)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return this.setState({videos: data})
        })
        .catch( (err) => {
            console.log(err);
        });
        
        let {match} = this.props;
        fetch(baseUrl + videosPath + '/' + match.params.id + queryString + API_KEY)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return this.setState({videoDetails: data})
        })
        .catch( (err) => {
            console.log(err);
        });
    }
    
    componentDidUpdate() {
        let {match} = this.props;
        if(match.params.id !== this.state.videoDetails.id) {
            fetch(baseUrl + videosPath + queryString + API_KEY)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return this.setState({videos: data})
            })
            .catch( (err) => {
                console.log(err);
            });
            
            let {match} = this.props;
            fetch(baseUrl + videosPath + '/' + match.params.id + queryString + API_KEY)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return this.setState({videoDetails: data})
            })
            .catch( (err) => {
                console.log(err);
            });
        } 
    }

    render() {
        return(
            <main id="video__container">
                <MainVideoContainer videoDetailsObject={this.state.videoDetails} apiKey={queryString + API_KEY} /> 
                <SidebarVideoContainer {...this.props} videoObject={this.state.videos} />
            </main>
        );
    }
}

export default MainSection;