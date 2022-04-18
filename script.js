const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
   count : numberOfFilms,
   movies : {},
   actors : {},
   genres : [],
   private : false,
}

const lastView = prompt ('Один из последних просмотренных фильмов?');
const grade = +prompt ('На сколько оцените его?');

personalMovieDB.movies[lastView] = grade;

console.log(personalMovieDB);


