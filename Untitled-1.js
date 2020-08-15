"use strict";

const answer = prompt("Сколько фильмов вы просмотрели?", "");
console.log(answer);
const a = {};
const b = {};
let c = [];
let d = [];
const personalMovieDB = {
        count: answer,
        movies: a,
        actors: b,
        gentres: c,
        privat: false,
} ;
c[0] = prompt("Один из последних просмотренных фильмов?", "");
d[0] = prompt("На сколько оцените его?", "");
c[1] = prompt("Один из последних просмотренных фильмов?", "");
d[1] = prompt("На сколько оцените его?", "");
const movies ={
    name: c,
    mark: d,
};
console.log(movies.name[0] + ":" + movies.mark[0]);
console.log(movies.name[1] + ":" + movies.mark[1]);