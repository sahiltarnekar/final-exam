import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieForm from "./pages/MovieForm";
import MovieList from "./pages/MovieList";
import Navbar from "./components/Navbar";
import SingleMovie from "./pages/SingleMovie";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieForm />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/update/:id" element={<MovieForm />} />
         <Route path="/movie/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
