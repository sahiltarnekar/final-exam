import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./MovieSlice";

export const store = configureStore({
  reducer: movieSlice,
});


export default store;