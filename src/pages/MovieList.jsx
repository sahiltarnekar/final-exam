import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewMovie, deleteMovie } from "../features/MovieSlice";
import { NavLink } from "react-router-dom";

function MovieList() {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state);

  useEffect(() => {
    dispatch(viewMovie());
  }, [dispatch]);

  return (
    <div className="container row mx-auto">
      {movieList.map((movie) => (
        <div className="card m-3 mt-5 col-md-auto  shadow " key={movie.id}>
          <div className="card-body">
            <h5>{movie.name}</h5>
            <p>Year: {movie.year}</p>
            <p>Genre: {movie.genre}</p>

            <div className="btn-group">
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteMovie(movie.id))}
              >
                Delete
              </button>

              <NavLink to={`/update/${movie.id}`} className="btn btn-warning">
                Update
              </NavLink>

              <NavLink to={`/movie/${movie.id}`} className="btn btn-info">
                View
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
