import React, { Component } from "react";
import { Fragment } from "react";
import Like from "./like";
import  { Link  } from 'react-router-dom';
import MovieSave from './MovieSave';

class MoviesTable extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { movies, onLike, onDelete } = this.props;

    return (
      
      <Fragment >

         
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
            <th onClick={() => this.raiseSort()}></th>
            <th onClick={() => this.raiseSort()}></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <Link to={` movies/${movie._id}`} componenet={MovieSave}>{movie.title}</Link>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like 
                liked={movie.liked} 
                onClick={() => onLike(movie)} />
              </td>

              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </Fragment>
      
    );
  }
}

export default MoviesTable;
