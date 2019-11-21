/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {

    let x = array;

    x.sort(function (a, b) {
        if (a.year - b.year == 0) {
            if (a.title.charAt(0) > b.title.charAt(0)) {
                return 1;
            }
            else if (a.title.charAt(0) < b.title.charAt(0)) {
                return -1;
            }
        }
        else {
            return a.year - b.year;
        }

    });
    return x;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    let x = [];

    array.forEach(element => {
        if (element.director == "Steven Spielberg" && element.genre.includes("Drama")) {
            x.push(element);
        }
    })

    return x.length;


}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let x = [];

    array.forEach(element => {
        x.push(element.title);

    });


    let y = x.slice(0).sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        else if (a < b) {
            return -1;
        }
    });

    if (y.length > 20) {
        let z = [];

        for (let i = 0; i < 20; i++) {
            z.push(y[i]);
        }

        return z;
    }

    return y;

};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {

    let x = [];

    let noRate = 0;
    let num = 0;
    let avg = 0;

    array.forEach(element => {
        if ("rate" in element) {
            x.push(element.rate);
        }
        else {
            noRate++;
        }
    });

    for (let i = 0; i < x.length; i++) {
        num += x[i];
    }

    if (x.length > 1) {
        avg = (num / (x.length + noRate));
    }
    else {
        avg = num;
    }

    return (Math.round(avg * 100) / 100);

};

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {

    let avgMovies = array.filter(element => {
        return element.genre.includes("Drama");
    })

    let fin = ratesAverage(avgMovies);

    return fin;

    // let x = [];

    // let noRate = 0;
    // let num = 0;
    // let avg = 0;

    // array.forEach(element => {
    //     if ("rate" in element && "Drama" in element.genre) {
    //         x.push(element.rate);
    //     }
    //     else {
    //         noRate++;
    //     }
    // });

    // for (let i = 0; i < x.length; i++) {
    //     num += x[i];
    // }

    // if (x.length > 1) {
    //     avg = (num / (x.length + noRate));
    // }
    // else {
    //     avg = num;
    // }

    // let finAvg = (Math.round(avg * 100) / 100);

    // return finAvg;


}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    // let copy = [...array];

  let copy = array.map((eachMovie) => {



    let hourMovies = eachMovie.duration;

    let minutes = 0;
    let hours = 0;
    let fin = 0;
    let temp;
    if (hourMovies.indexOf("h") >= 0 && hourMovies.indexOf("min") >= 0) {
      // 2h 22min
      hour = hourMovies.substring(0, hourMovies.indexOf("h"));
      minutes = hourMovies.substring(hourMovies.indexOf(" ") + 1, hourMovies.indexOf("min"));
      fin = Number(hours) * 60 + Number(minutes);
    }
    else if ((hourMovies.indexOf("h") >= 0)) {

      hour = hourMovies.substring(0, hourMovies.indexOf("h"));
      fin = Number(hours) * 6
    }
    else if (hourMovies.indexOf("min") >= 0) {

      minutes = hourMovies.substring(hourMovies.indexOf(" ") + 1, hourMovies.indexOf("min"));
      fin = Number(minutes);

    }

    console.log(fin);

    return {
    title : eachMovie.title,
    year: eachMovie.year,
    director: eachMovie.director,
    duration: fin,
    genre: eachMovie.genre,
    rate: eachMovie.rate

    }

  })

  return copy;



}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
