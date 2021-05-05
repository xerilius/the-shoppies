const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const path = require("path");
const server = express();

dotenv.config();
server.set("port", process.env.PORT || 5000);
server.use(express.static(path.join(__dirname, 'client/build')));

async function fetchMoviesByTitle(query, page) {
    let response = await fetch(`http://omdbapi.com/?apikey=${process.env.OMBD_API_KEY}&s=${query}&type=movie&page=${page}`);
    return await response.json();
}

function createPromiseArray(movieResults) {
    let ids = [];
    movieResults.Search.map(
        m => {
            if (!ids.includes(m.imdbID))
            ids.push(m.imdbID)
        }
    );
    let promiseArray = [];
    for (let i = 0; i < ids.length; i++) {
        promiseArray.push(`http://omdbapi.com/?apikey=${process.env.OMBD_API_KEY}&i=${ids[i]}&type=movie&plot=full`);
    }
    return promiseArray
}

server.get('/api/movies/:query/:page', async(req, res) => {
    let query = req.params.query;
    let page = req.params.page;
    let movieResults = await fetchMoviesByTitle(query, page);

    if (movieResults.Response === 'True') {
        let promiseArray = createPromiseArray(movieResults);
        let responses = await Promise.all(
            promiseArray.map(url => fetch(url))
        );
        let data = await Promise.all(responses.map(res => res.json()));
        res.send(
            { 
                data, 
                response: movieResults.Response, 
                total: movieResults.totalResults
            }
        );
    } else {
        let data = movieResults;
        res.send({ data });
    }
});

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

// const port = process.env.PORT || 5000;
server.listen(5000);
