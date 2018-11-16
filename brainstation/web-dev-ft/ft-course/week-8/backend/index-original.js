const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const videoRoutes = require('./routes/videos');

//console.log(videoObjects);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(express.static('public'));

app.use('/videos', videoRoutes);

app.listen(8080, () => {
    console.log('Server runnig on 8080...');
});