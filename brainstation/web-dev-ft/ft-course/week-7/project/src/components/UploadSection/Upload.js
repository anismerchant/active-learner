import React, { Component } from 'react';

class Upload extends Component {
    render() {
        return (         
            <form id="upload__container__form">
                <label className= "upload__container__form--title">
                    Title:
                    <input className="upload__container__form--title-input" name="title" placeholder="Please input a title" />
                </label>
                <label className= "upload__container__form--description">
                    Description:
                    <input className="upload__container__form--description-input" name="description" placeholder="Please input a description" />
                </label>                   
                <div className="upload__container__form--button"> 
                    <button className="upload__container__form--button-submit" type="submit">PUBLISH</button>  
                </div>         
            </form>        
        );
    }
}

export default Upload;