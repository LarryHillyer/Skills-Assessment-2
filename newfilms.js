/**
 * In this scenario you will be working with a single data set.
 * The Data set is an array of objects.
 * Each object is a film that has a name and year of release. 
 * 
 * Many of the questions will require you to finish the functions that are prewritten,
 * Add arguments when needed
 * You will not need to invoke any of the functions yourself
 * The Unit Tests should let you know when you got the function right
 * 
 * For Question 7 you will need to move everything over to VSCode and build your angular app there.
 * When you complete the app push it to your github and slack me with the url.
 * 
*/
var films=[{
  name: 'Cinderella',
  year: 1950
}, {
  name: 'Snow White and the Seven Dwarfs',
  year: 1937
}, {
  name: 'Fantasia',
  year: 1940
}, {
  name: 'The Jungle Book',
  year: 1967
}, {
  name: 'Sleeping Beauty',
  year: 1959
}, {
  name: 'Pinocchio',
  year: 1940
}, {
  name: 'One Hundred and One Dalmations',
  year: 1961
}, {
  name: 'Bambi',
  year: 1942
}, {
  name: 'Alice in Wonderland',
  year: 1951
}, {
  name: 'Peter Pan',
  year: 1953
}, {
  name: 'The Sword in the Stone',
  year: 1963
}, {
  name: 'Lady and the Tramp',
  year: 1955
}, {
  name: 'Song of the South',
  year: 1946
}, {
  name: 'Steamboat Willie',
  year: 1928
}, {
  name: 'Snow White and the Seven Dwarfs',
  year: 1937
}]

//Question 1 - Finish the function called filmCount so it will return the total number of films in the array
function filmCount(){
  return films.length
  
}

fL = filmCount()
console.log(fL)


//Question 2 - Find film by Title 
function findTitle(title){
  for(var i=0;i<films.length;i++) {
    if (title === films[i].name){
      return films[i]
    }
  }
  return {'error': ' film not found!'}
}

fF = findTitle('The Sword in the Stone')
console.log(fF)

//Question 3 - Add each of the movies in the newFilms array to the films array
var newFilms = [{
  name: 'Tangled',
  year: 2010
},{
  name: 'Aladdin',
  year: 1992
},{
  name: 'Zootopia',
  year: 2016
},{
  name: 'The Little Mermaid',
  year: 1989
},{
  name: 'Beauty and the Beast',
  year: 1991
}]

function addFilms(newFilms) {
   for(var i=0; i < newFilms.length; i++) {
     films.push(newFilms[i])
   }
}

addFilms(newFilms)
console.log(films)

// //Question 4 - Remove any duplicate titles found in the films array by name
function removeDups(){
    var iStart = 1;
    
    while (iStart < films.length) {
        var dupCan = films[iStart-1].name;
        for (var i = iStart; i < films.length; i++ ){
            if (films[i].name === dupCan) {
                films.splice(i,1);
                iStart++;
                break;
            }
        }
        iStart++
    }

    return films;
}
removeDups()
console.log(films)

//Question 5 - Find All films within a starting year and ending year
function findReleasesWithin(films, startYear, endYear){
  var queryFilms = [];
  for(var i=0;i<films.length;i++){
    if (startYear <= films[i].year && endYear>= films[i].year) {
      queryFilms.push(films[i]);
    }
  }
  
  return queryFilms;
}

qF = findReleasesWithin(1940,1950)
console.log(qF)

// //BONUS QUESTION - Arrange the films array from oldest to newest 
// function sortByYear(films){
//   var sortFilmsAscending = [];
//   var i = 0;
//   while (i < films.length) {
//     var minYear = 10000;
//     var minYearFilm = {};
//     var minIndex;
//     for (j=0;j<films.length;j++) {
//       if ( films[j].year <= minYear) {
//         minYear = films[j].year;
//         minYearFilm = films[j];
//         minIndex = j
//       }
//     }
//     sortFilmsAscending.push(minYearFilm)
//     films.splice(minIndex,1)
//     i++
//   }
//   return sortFilmsAscending
// }

// sortedFilms = sortByYear(films)
// console.log(sortedFilms)

//Question 7 - Using the films array build an angular app
//that will let you manage adding and removing films with a view




