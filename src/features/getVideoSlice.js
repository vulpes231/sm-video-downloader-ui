import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendError } from "../constants";
import axios from "axios";

const initialState = {
	getVideoLoading: false,
	getVideoError: false,
	videoInfo: null,
};

export const getVideoInfo = createAsyncThunk(
	"video/getVideoInfo",
	async (formData) => {
		try {
			const url = "";
			const response = await axios.post(url, formData, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			return response.data;
		} catch (error) {
			sendError(error);
		}
	}
);

const getVideoSlice = createSlice({
	name: "video",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getVideoInfo.pending, (state) => {
				state.getVideoLoading = true;
			})
			.addCase(getVideoInfo.fulfilled, (state, action) => {
				state.getVideoLoading = false;
				state.getVideoError = false;
				state.videoInfo = action.payload.info;
			})
			.addCase(getVideoInfo.rejected, (state, action) => {
				state.getVideoLoading = false;
				state.getVideoError = action.error.message;
				state.videoInfo = false;
			});
	},
});

export default getVideoSlice.reducer;
