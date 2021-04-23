import React from "react";
import { getMovies } from "./services/movieservies";
import Like from "./lik";
import Pagination from './pagi';
import { paginate } from '../utils/pagin';


class Movies extends React.Component {
  state = {
    pageSize:4, 
    currentPage:1,
    movies: getMovies(),
  };

  handleDelete = (movie) => {

    const movies = this.state.movies.filter((m) => m._id !== movie._id )
    this.setState({ movies })
  };

  onLiked = (movie) => {
    const movies = [...this.state.movies]; 
    const index = movies.indexOf(movie);
    movies[index] = {...movies[index]};
    movies[index].Liked = !movies[index].Liked
    this.setState({ movies })
  }

  handlePagination= (page) =>{
    this.setState({ currentPage : page})
    console.log("this is page", page)
  }


  

  render() {
    const { length: count } = this.state.movies;
    const { pageSize , currentPage , movies:allMovies } = this.state; 

    const movies = paginate( allMovies , currentPage, pageSize)
    return (
      <div className="m-4">
        <h2>Showing {this.state.movies.length} movies in the list...</h2>

        <table className="table">
          <thead>

            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>

                <td><Like
                Liked={movie.Liked}
                onClick={() =>  this.onLiked (movie)}
                d
                /></td>


                <td>
                  {" "}
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onChange={this.handlePagination}
        /> 

      </div>
    );
  }
}

export default Movies;