import React from "react";
import Pagination from "./pagination";
import { paginate } from "./utils/paginate";
import { getGenres } from "./services/genreservice";
import { getMovies } from "./services/movieservies";
import MoviesTable from "./moviesTable";
import ListGroup from "./common/filter";
import _ from "lodash";

class Movies extends React.Component {
  state = {
    genres: [],
    movies: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asr" },
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", id: " " }, ...getGenres()];
    this.setState({ movies: getMovies(), genres }); 
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
    console.log(movies);
  };


  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movie[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
    console.log('likeeeeeeeeeeee....', movie)
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenresSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {

    this.setState({ sortColumn });
  };
 
  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      selectedGenre,
      sortColumn,
      movies: allMovies,
    } = this.state;

    if (count === 0)
      return <p className="m-4">There are no movie in the list... </p>;

    const filtered = selectedGenre && selectedGenre._id
      ? allMovies.filter((m) => m.genre.id === selectedGenre._id)
      : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2 m-4">
          <ListGroup
            items={this.state.genres}
            onItemSelect={this.handleGenresSelect}
            selectItem={this.state.selectedGenre}
          />
        </div>

        <div className="col">
          <p className="m-4">Showing {filtered.length} movies in the list...</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />

          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;