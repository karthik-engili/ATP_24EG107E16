/*
ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

const sciFiMovies = movies.filter(m => m.genre === "Sci-Fi");

const movieTitles = movies.map(
  m => `${m.title} (${m.rating})`
);

const averageRating =
  movies.reduce((acc, m) => acc + m.rating, 0) / movies.length;

const jokerMovie = movies.find(m => m.title === "Joker");

const indexOfAvengers = movies.findIndex(
  m => m.title === "Avengers"
);

console.log(sciFiMovies);
console.log(movieTitles);
console.log(averageRating);
console.log(jokerMovie);
console.log(indexOfAvengers);