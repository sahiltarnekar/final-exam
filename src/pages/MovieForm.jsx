import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, updateMovie } from "../features/MovieSlice";
import { useNavigate, useParams } from "react-router-dom";

function MovieForm() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const redirect = useNavigate();
  const { id } = useParams();

  const { movieList } = useSelector((state) => state);

  useEffect(() => {
    const findData = movieList.find((movie) => movie.id == id);
    reset(findData);
  }, [id, movieList, reset]);

  function submit(data) {
    if (id == null) {
      dispatch(addMovie(data));
    } else {
      dispatch(updateMovie(data));
      redirect("/movies");
    }
    reset();
  }

  return (
    <form
      className="col-lg-8 mx-auto my-5 shadow p-3 " onSubmit={handleSubmit(submit)}>
      <h3>{id ? "Update Movie" : "Add Movie"}</h3>

      <input type="text"
        className="form-control mb-2"
        placeholder="Movie Name"
        {...register("name")}
        required
      />

      <input
        type="number"
        className="form-control mb-2 "
        placeholder="Release Year"
        {...register("year")}
        required
      />

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Genre"
        {...register("genre")}
        required
      />

      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default MovieForm;
;
