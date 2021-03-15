const express = require('express');
const router = express.Router();
const request = require('request');

const apiKey = 'ceb54e2832fb63cce04889a55ab25178';
const apiBaseUrl = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl;
  next();
});

/* GET home page. */
router.get('/', function (req, res, next) {
  request.get(nowPlayingUrl, (error, response, movieData) => {
    // console.log(response);
    // console.log(movieData);
    // console.log(error);
    const parsedData = JSON.parse(movieData);
    res.render('index', { parsedData: parsedData.results });
  });
});

module.exports = router;
