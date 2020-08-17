"use strict";

let answer;

function start()
{
    answer = +prompt("Сколько фильмов вы просмотрели?", "");

    while (answer == '' || answer == null || isNaN(answer))
    {
        answer = +prompt("Сколько фильмов вы просмотрели?", "");
    }
}
start();

const personalMovieDB = {
        count: answer,
        movies: {},
        actors: {},
        gentres: [],
        privat: true,
} ;
detectPersonalLevel();
console.log(answer);
let a = [];
let b = [];

    function rememberMyFilms()
    {
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
    }

    rememberMyFilms();

    function detectPersonalLevel()
    {
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
    }
    
    function showMyDB()
    {
        if (personalMovieDB.privat == false)
        {
            console.log(personalMovieDB);
        }
    }
    showMyDB();
    function writeYourGentres()
    {
        for (let i=0; i<3; i++)
        {
            personalMovieDB.gentres.push(prompt("Ваш любимый жанр под номером ${по порядку}"));
        }
        
    }
    writeYourGentres();