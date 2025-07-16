import { configureStore } from "@reduxjs/toolkit";
import getVideoReducer from "../features/getVideoSlice";

const store = configureStore({
	reducer: {
		video: getVideoReducer,
	},
});

export default store;
