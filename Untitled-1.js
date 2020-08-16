"use strict";

const answer = +prompt("Сколько фильмов вы просмотрели?", "");
console.log(answer);
const personalMovieDB = {
        count: answer,
        movies: {},
        actors: {},
        gentres: [],
        privat: false,
} ;
let a = [];
let b = [];
if (personalMovieDB.count<10)
    {
        alert("Маловато");
    }
    else{
        if (personalMovieDB.count>=10 && personalMovieDB.count<30)
        {
            alert("Молодец");
        }
        if (personalMovieDB.count>=30)
    {
        alert("Киноман");
    }
    else
    {
        alert("Ошибка");
    }
    }
for (let i=0;i<2;i++)
{
    a[i] = prompt("Один из последних просмотренных фильмов?", "");
    if ( a[i] ==null || a[i] =="" || a[i].length>=50 )
            {i--;
            continue;}
            b[i] = prompt("На сколько оцените его?", "");
            while (b[i] ==null || b[i] =="" || b[i].length>=50 )
            {b[i]=prompt("На сколько оцените его?", "");}
    personalMovieDB.movies[a[i]] =b[i];
    

    }
    
    
console.log(personalMovieDB);