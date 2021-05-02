import React from "react";

const MovieSave = ({ match,history }) => {
  return (
    <div>
      <h3>Movies Form {match.params.id}</h3>
      <button className="btn btn-primary" onClick={() => history.push("/")}>save</button>
    </div>
  );
};

export default MovieSave;
