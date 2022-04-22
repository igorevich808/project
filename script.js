
const personalMovieDB = {
   start: function() {    
      let numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?');
      while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?');
      }
      this.count = numberOfFilms;
   }, 
   detectPersonalLevel: function() {
      if (this.count < 10) {
         alert('Просмотрено довольно мало фильмов');
      } else if (this.count > 9 && this.count < 30) {
         alert('Вы классический зритель');
      } else if (this.count >= 30) {
         alert('Вы киноман');
      } else {
         alert('Произошла ошибка');
      } 
   },
   rememberMyFilms: function() {
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
      this.movies[lastView] = grade;
   }
   },
   writeYourGenres: function() {
      for (let i = 0; i < 3; i++) {
         this.genres[i] = prompt (`Ваш любимый жанр под номером ${i + 1}`);
         if (this.genres[i] == '' || this.genres[i] == null) {
            alert ('Некорректное значение. Введите еще раз!');
            i--;
         }
      }
      this.genres.forEach(function(elem, index) {
         console.log(`Любимый жанр №${index+1} - это ${elem}`);
      });
   },
   showMyDB: function() {
      if (!this.private) {
         console.log(this);
      }
   },
   count: '',
   movies: {},
   actors: {},
   genres: [],
   private: false
};


personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
//personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();




