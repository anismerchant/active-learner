const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const videoArray = require('./videos');
// const videoArray = require('./brainflix-api/videos').videos;
// const videoObjects = require('./brainflix-api/videoDetails').videoDetails;

//console.log(videoObjects);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(express.static('public'));

// a GET endpoint at /videos that returns an array of videos
//console.log(videoObjects);
app.get('/videos', (req, res) => {
    //console.log(videoArray);
    res.json(videoArray);
});

//a GET endpoint for the path /videos/:id that returns an object 
// with the details of the video whose id matches :id. This detailed 
// response includes the array of comments for that video.
app.get('/videos/:id', (req, res) => {
    let videoId = req.params.id;
    let targetVideo = videoArray.find(
        (videoDetails) => {
            //console.log(videoDetails) 
        if (videoDetails.id === videoId) {
            return true;
        } else {
            return false;
        } 
})
    targetVideo == null ? res.status(400).send("Oops, no such video yo!") :  res.json(targetVideo);
    // console.log(targetVideo);
    //res.json(targetVideo);
});

app.listen(8080, () => {
    console.log('Server runnig on 8080...');
});