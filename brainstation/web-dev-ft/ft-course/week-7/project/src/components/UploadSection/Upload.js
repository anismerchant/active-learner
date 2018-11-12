import React, { Component } from 'react';

class Upload extends Component {
    render() {
        return (
            <div id="upload__container">       
                <form id="upload__container__form">
                    <label className= "upload__container__form--title">
                    <span className= "upload__container__form--title-heading">Title:</span>
                        <input className="upload__container__form--title-input" name="title" placeholder="Add a title to your video" />
                    </label>
                    <label className= "upload__container__form--description">
                        <span className= "upload__container__form--desription-heading">Description:</span>
                        <textarea className="upload__container__form--description-input" name="description" placeholder="Add a description of your video"></textarea>
                    </label>                   
                    <div className="upload__container__form--button"> 
                        <button className="upload__container__form--button-submit" type="submit">PUBLISH</button>  
                    </div>         
                </form>
            </div>          
        );
    }
}

export default Upload;