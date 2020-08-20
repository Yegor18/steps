"use strict";

let answer;

const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        gentres: [],
        privat: false,
        start: function()
{
    answer = +prompt("Сколько фильмов вы просмотрели?", "");

    while (answer == '' || answer == null || isNaN(answer))
    {
        answer = +prompt("Сколько фильмов вы просмотрели?", "");
    }
},
showMyDB : function()
{
    if (personalMovieDB.privat == true)
    {
        console.log(personalMovieDB);
    }
},
toggleVisibleMyDb: function()
{
    if (personalMovieDB.privat == true)
    {
        personalMovieDB.privat = false;
    }
     
     else{
        personalMovieDB.privat = true;
     }
},

detectPersonalLevel: function()
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
            alert(`Ошибка ${personalMovieDB.count}`);
        }
        }
    },

    rememberMyFilms: function()
    {
        for (let i=0;i<2;i++)
        {
            let a = [],
                b = [];
            a[i] = prompt("Один из последних просмотренных фильмов?", "");
            if ( a[i] ==null || a[i] =="" || a[i].length>=50 )
                    {i--;
                    continue;}
                    b[i] = prompt("На сколько оцените его?", "");
                    while (b[i] ==null || b[i] =="" || b[i].length>=50 )
                    {b[i]=prompt("На сколько оцените его?", "");}
            personalMovieDB.movies[a[i]] =b[i];
            
        
            }
    },

    writeYourGentres: function ()
    {
        for (let i=0; i<1; i++)
        {
            let ans = prompt(`Ваши любимые жанры через запятую `);
            while (ans === "" || ans == "null")
            {
                ans = prompt(`Ваш любимый жанр под номером ${i+1}`);
            }
            personalMovieDB.gentres = ans.split(', ');
            personalMovieDB.gentres.sort();
            //personalMovieDB.gentres.push(ans);
        }
    personalMovieDB.gentres.forEach(
        (element, index) => {alert(`Любимый жанр ${index+1} - это ${element}`);}
    );

        
    }
} ;
//personalMovieDB.toggleVisibleMyDb();
    //personalMovieDB.showMyDB();

// personalMovieDB.start();
// personalMovieDB.count = answer;

// personalMovieDB.detectPersonalLevel();
// console.log(answer);

//    personalMovieDB.rememberMyFilms();

    