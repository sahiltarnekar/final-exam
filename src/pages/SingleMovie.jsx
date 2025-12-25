import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SingleMovie = () => {
  const { id } = useParams();
  const { movieList } = useSelector((state) => state);

  const movie = movieList.find((movie) => movie.id == id);

  if (!movie) {
    return <h4 className="text-center mt-4">Movie not found</h4>;
  }

  return (
    <div className="container mt-4">
      <div className="card col-md-6 mx-auto shadow">
          <h3 className="card-title">{movie.name}</h3>
        <div className="card-body">
          <p>Year: {movie.year}</p>
          <p>Genre: {movie.genre}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
