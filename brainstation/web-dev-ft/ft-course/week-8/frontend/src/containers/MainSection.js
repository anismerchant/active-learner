import React, { Component } from 'react';
import MainVideoContainer from '../components/MainSection/MainVideoContainer';
import SidebarVideoContainer from '../components/MainSection/SidebarVideoContainer';

const API_KEY='23b1b3fd-dfe1-493c-87e2-41469e77de7f';
const baseUrl ='http://localhost:8080';
const videosPath ='/videos';
const queryString = '?api_key=';


class MainSection extends Component {
    // setup state object structure to match brainflix API object structure
    // as needed for fetch requests
    state = {
        videos: [],
        videoDetails: {
            comments: []
      }
    }

    // Two fetch requests once components mount: 
    //  1. First fetch request to brainflix API to grab sidebar, first-level data
    //  2. Second fetch request to brainflix API to grab main video, second-level data
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
    

    // Two fetch requests to check if DOM changed of mounted components: 
    //  1. First fetch request only if current state via route props (i.e. match.praams.id) 
    //     does not 'match' videoDetials object's previous state; thus, update videos object's
    //     state
    //  2. second fetch request to update videoDetails object's state
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
            //console.log(baseUrl + videosPath + '/' + match.params.id + queryString + API_KEY);
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
                <SidebarVideoContainer {...this.props} videoArray={this.state.videos} />
            </main>
        );
    }
}

export default MainSection;