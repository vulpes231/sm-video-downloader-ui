import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { devUrl } from "../constants";
import axios from "axios";

const initialState = {
	getVideoLoading: false,
	getVideoError: null,
	videoInfo: null, // Now stores full response data
};

export const getVideoInfo = createAsyncThunk(
	"video/getVideoInfo",
	async (formData, { rejectWithValue }) => {
		try {
			const response = await axios.post(`${devUrl}/process`, formData, {
				headers: { "Content-Type": "application/json" },
			});
			return response.data;
		} catch (error) {
			// Proper error handling that triggers .rejected case
			return rejectWithValue(error.response?.data?.message || error.message);
		}
	}
);

const getVideoSlice = createSlice({
	name: "video",
	initialState,
	reducers: {
		resetVideoState: () => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getVideoInfo.pending, (state) => {
				state.getVideoLoading = true;
				state.getVideoError = null;
			})
			.addCase(getVideoInfo.fulfilled, (state, action) => {
				state.getVideoLoading = false;
				state.videoInfo = {
					// Preserve all response data
					...action.payload,
					directUrl: action.payload.downloadOptions?.directUrl,
					proxyUrl: action.payload.downloadOptions?.proxyUrl,
				};
			})
			.addCase(getVideoInfo.rejected, (state, action) => {
				state.getVideoLoading = false;
				state.getVideoError = action.payload || "Failed to download video";
			});
	},
});

export const { resetVideoState } = getVideoSlice.actions;
export default getVideoSlice.reducer;
