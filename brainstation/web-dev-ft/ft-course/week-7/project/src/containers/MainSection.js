import React, { Component } from 'react';
//import MainVideoContainer from '../components/MainSection/MainVideoContainer';
import SidebarVideoContainer from '../components/MainSection/SidebarVideoContainer';

const API_KEY='23b1b3fd-dfe1-493c-87e2-41469e77de7f';
const baseUrl ='https://project-2-api.herokuapp.com';
const videosPath ='/videos'; 
const queryString = '?api_key=';


class MainSection extends Component {
    state = {
        videos: []
      }

    componentDidMount() {
        fetch(baseUrl + videosPath + queryString + API_KEY)
        .then((response) => {
        return response.json();
        })
        .then((data) => {
            this.setState({videos: data})
        })
        // .catcht( (e) => {
        //     console.log(e);
        // });    
    }
    

    render() {
        return(
            <main id="video__container">
                {/* <MainVideoContainer videoArray={this.state.videos} /> */}
                <SidebarVideoContainer videoArray={this.state.videos} />
            </main>
        );
    }
}

export default MainSection;