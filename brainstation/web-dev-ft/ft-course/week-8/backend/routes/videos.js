const express = require('express');
const router = express.Router();
const videoArray = require('../brainflix-api/videos').videos;
const videoObjects = require('../brainflix-api/videoDetails').videoDetails;

// a GET endpoint at /videos that returns an array of videos
//console.log(videoObjects);
router.get('/', (req, res) => {
    res.json(videoArray);
    console.log(videoArray);

});

//a GET endpoint for the path /videos/:id that returns an object 
// with the details of the video whose id matches :id. This detailed 
// response includes the array of comments for that video.
router.get('/:id', (req, res) => {
    let videoId = req.params.id;
    //console.log(videoId);
    let targetVideo = videoObjects.find(
        (videoDetailsId) => { if (+videoDetailsId.id === +videoId) {
            return true;
        } else {
            return false;
        } 
})
    targetVideo == null ? res.status(400).send("Oops, no such video yo!") :  res.json(targetVideo);
    // console.log(targetVideo);
    // res.json(targetVideo);
});

module.exports = router;

