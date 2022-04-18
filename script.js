const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
   count : numberOfFilms,
   movies : {},
   actors : {},
   genres : [],
   private : false
};

let lastView = prompt ('Один из последних просмотренных фильмов?');
let grade = +prompt ('На сколько оцените его?');

personalMovieDB.movies[lastView] = grade;

lastView = prompt ('Один из последних просмотренных фильмов?');
grade = +prompt ('На сколько оцените его?');

personalMovieDB.movies[lastView] = grade;

console.log(personalMovieDB);


