import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../assets/features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
