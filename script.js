let numberOfFilms;
function start() {
   numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?');
   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
   numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?');
   }
}
start();

const personalMovieDB = {
   count : numberOfFilms,
   movies : {},
   actors : {},
   genres : [],
   private : false
};

function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      alert('Просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count > 9 && personalMovieDB.count < 30) {
      alert('Вы классический зритель');
   } else if (personalMovieDB.count >= 30) {
      alert('Вы киноман');
   } else {
      alert('Произошла ошибка');
   } 
}
detectPersonalLevel();

function rememberMyFilms() {
   let lastView, grade;
   for (let i = 0; i < 3; i++) {
      lastView = prompt ('Один из последних просмотренных фильмов?');
      if (lastView == '' || lastView == null || lastView.length > 50) {
         alert ('Некорректное значение. Введите еще раз!');
         i--;
         continue;
      }
      grade = +prompt ('На сколько оцените его?');
      if (grade == '' || lastView == null) {
         alert ('Некорректное значение. Введите еще раз!');
         i--;
         continue;
      }
      personalMovieDB.movies[lastView] = grade;
   }
}
//rememberMyFilms ();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   } 
}

function writeYourGenres(genres) {
   for (let i = 0; i < 3; i++) {
      genres[i] = prompt (`Ваш любимый жанр под номером ${i + 1}`);
   }
}
writeYourGenres(personalMovieDB.genres);
showMyDB(personalMovieDB.private);



