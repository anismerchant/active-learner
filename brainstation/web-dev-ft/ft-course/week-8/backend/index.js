const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const videoArray = require('./brainflix-api/videos').videos;
const videoObjects = require('./brainflix-api/videoDetailss').videoDetails;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// a GET endpoint at /videos that returns an array of videos
app.get('/videos', (req, res) => {
    res.json(videoArray);
});

//a GET endpoint for the path /videos/:id that returns an object 
// with the details of the video whose id matches :id. This detailed 
// response includes the array of comments for that video.
app.get('/videos/:id', (req, res) => {
    let videoId = req.params.id;
    res.send(videoId);
});


app.listen(8080, () => {
    console.log('Server runnig on 8080...');
});