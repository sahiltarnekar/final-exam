import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../components/Api";


export const addMovie = createAsyncThunk("addMovie", async(data) => {
  const res = await Api.post("/movies", data);
  alert("added your movie !!!!!!!!!!");
  return res.data;
});


export const viewMovie = createAsyncThunk("viewMovie", async () => {
  const res = await Api.get("/movies");
  return res.data;
});


export const deleteMovie = createAsyncThunk("deleteMovie", async (id) => {
  const res = await Api.delete(`/movies/${id}`);
  confirm("do you want to delete this !!!!!!!!!!!")
  return res.data;
});


export const updateMovie = createAsyncThunk("updateMovie", async (data) => {
  const { id } = data;
  confirm("do you want to update this !!!!!!!!!!!")
  const res = await Api.put(`/movies/${id}`, data);
  return res.data;
});

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movieList: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movieList.push(action.payload);
      })
      .addCase(viewMovie.fulfilled, (state, action) => {
        state.movieList = action.payload;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        const { id } = action.payload;
        state.movieList = state.movieList.filter(
          (movie) => movie.id !== id
        );
      })
      .addCase(updateMovie.fulfilled, (state, action) => {
        const { id } = action.payload;
        const index = state.movieList.findIndex(
          (movie) => movie.id == id
        );
        if (index !== -1) {
          state.movieList[index] = action.payload;
        }
      });
  },
});

export default movieSlice.reducer;
