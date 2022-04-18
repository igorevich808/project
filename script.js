const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
   count : numberOfFilms,
   movies : {},
   actors : {},
   genres : [],
   private : false
};

if (personalMovieDB.count < 10) {
   alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 9 && personalMovieDB.count < 30) {
   alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
   alert('Вы киноман');
} else {
   alert('Произошла ошибка');
}

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


console.log(personalMovieDB);


