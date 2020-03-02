'use strict';

const axios = require('axios');
const express = require('express');
const cors = require('cors');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const urlTmdb = 'https://api.themoviedb.org/3';
const token = '1f54bd990f1cdfb230adb312546d765d';

// App
const app = express();
app.use(cors());

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


//Get Movies by Id
app.get('/movies/:id', (req, res) => { 
    axios.get(`${urlTmdb}/movie/${req.params.id}?api_key=${token}`)
        .then((movie) => {
            res.json(movie.data);
        })
        .catch(error => {
            console.log(error);
        })
});

//Get Movies List
  app.get('/movies', (req, res) => {
    axios.get(`${urlTmdb}/movie/upcoming/?api_key=${token}&page=${req.query.page}`)
        .then((movies) => {
            res.json(movies.data);
        })
        .catch(error => {
            console.log(error);
        })
});

//Search Movie
app.get('/search/movies', (req, res) => {
    console.log(req.query);
    axios.get(`${urlTmdb}/search/movie?api_key=${token}&page=${req.query.page}&query=${req.query.query}`)
        .then((movies) => {
            res.json(movies.data);
        })
        .catch(error => {
            console.log(error);
        })
});