const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const videoArray = require('./videos');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE');
    next();
});

app.use(express.static('public'));

// a GET endpoint at /videos that returns an array of videos
app.get('/videos', (req, res) => {
    res.json(videoArray);
});

//a GET endpoint for the path /videos/:id that returns an object 
// with the details of the video whose id matches :id. This detailed 
// response includes the array of comments for that video.
app.get('/videos/:id', (req, res) => {
    let videoId = req.params.id;
    let targetVideo = videoArray.find(
        (videoDetails) => {
        if (videoDetails.id === videoId) {
            return true;
        } else {
            return false;
        } 
})
    targetVideo === null ? res.status(400).send("Oops, no such video!") :  res.json(targetVideo);
});

// a POST endpoint for the path /videos/:id/comments. This adds a new comment to the video whose id matches :id
app.post('/videos/:id/comments', (req, res) => {
    let videoId = req.params.id;
    let date = new Date();
    let milliSeconds = date.getTime();
    let targetVideo = videoArray.find(
        (videoDetails) => {
        if (videoDetails.id === videoId) {
            return true;
        } else {
            return false;
        }
        
    })
    let newObject = {
        name: "Julia",
        comment: req.body.comment,
        id: String(milliSeconds),
        timestamp: milliSeconds,
    }    

    targetVideo.comments.push(newObject);
    res.json(newObject);
});

app.listen(8080, () => {
    console.log('Server runnig on 8080...');
});