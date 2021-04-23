export const movies = [
  {
    _id: 1,
    title: "terminator",
    genre: { id: "123", name: "Action" },
    numberInStock: 1,
    dailyRentalRate: 2.5,
    publishDate: "2019-01-03T19:04:28.809Z",
  },

  {
    _id: 2,
    title: "Die hard",
    genre: { id: "124", name: "Action" },
    numberInStock: 1,
    dailyRentalRate: 2.5,
    publishDate: "2019-01-03T19:04:28.809Z",
  },
  {
    _id: 3,
    title: "Get out",
    genre: { id: "125", name: "Thriller" },
    numberInStock: 1,
    dailyRentalRate: 2.5,
    publishDate: "2019-01-03T19:04:28.809Z",
  },
  {
    _id: 4,
    title: "Trip to Itly",
    genre: { id: "126", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 2.5,
    publishDate: "2019-01-03T19:04:28.809Z",
  },
  {
    _id: 5,
    title: "Titanic",
    genre: { id: "127", name: "Thriller" },
    numberInStock: 1,
    dailyRentalRate: 3.4,
    publishDate: "2019-01-03T19:04:28.809Z",
  },
  {
    _id: 6,
    title: "Las vegas",
    genre: { id: "123", name: "Comedy" },
    numberInStock: 4,
    dailyRentalRate: 2.2,
    publishDate: "2019-01-03T19:04:28.809Z",
  },
  {
    _id: 7,
    title: "Vactaion",
    genre: { id: "1234", name: "Comedy" },
    numberInStock: 4,
    dailyRentalRate: 2.2,
    publishDate: "2019-01-03T19:04:28.809Z",
  },
  {
    _id: 8,
    title: "Joker",
    genre: { id: "1235", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 2.2,
    publishDate: "2019-01-03T19:04:28.809Z",
  },
  {
    _id: 9,
    title: "Mission Impossible",
    genre: { id: "1236", name: "Action" },
    numberInStock: 4,
    dailyRentalRate: 2.2,
    publishDate: "2019-01-03T19:04:28.809Z",
  },
];

export function getMovies() {
  return movies.filter((m) => m);
}
