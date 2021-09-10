'use strict';

let numberOfFilms = +prompt('How many films have you watched?', '100');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    provat: false
};




for (let i = 0; i < 2; i++) {
    let movie = prompt('What is one of the latest films you have seen?');
    let assesment = prompt('How do you assess it? From ');
    personalMovieDB.movies[movie] = assesment;
    // personalMovieDB.movies.movie = assesment;//does not work
}