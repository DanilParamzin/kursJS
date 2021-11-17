"use strict";


//const result = confirm("Вы здесь?");
//console.log(result);


//const answer = +prompt("Тоби есть 18 лет?", "18");
//console.log(answer + 5);



//const answers = [];

//answers[0] = prompt('Какое ваше имя ?', '');
//answers[1] = prompt('ваша Фамилия ?', '');
//answers[2] = prompt('Сколько вам лет ?', '');

//console.log(typeof(answers));




//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`);


//const user = "Danil";
//alert(`Привет, ${user}`);




//let incr = 10,
//    decr = 10;
//incr++;
//decr--;

//console.log(++incr);
//console.log(--decr);
//console.log(5%2);
//console.log(2*4 == 8);

//const isChecked = true,
//      isClose = false;
//console.log(isChecked && isClose);
//console.log(isChecked || isClose);


//ПЕРВОЕ ЗАДАНИЕ 

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',"");
 

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его ?', ''),
      c = prompt('Один из последних просмотренных фильмов?',''),
      d = prompt('На сколько оцените его ?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log(personalMovieDB);