import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	darkMode: localStorage.getItem("theme") === "dark",
	toggle: false,
};

const navSlice = createSlice({
	name: "nav",
	initialState,
	reducers: {
		setDarkMode(state) {
			state.darkMode = !state.darkMode;
			localStorage.setItem("theme", state.darkMode ? "dark" : "light");
		},
		setToggle(state) {
			state.toggle = !state.toggle;
		},
	},
});
export const selectNavSlice = (state) => state.nav;
export const { setDarkMode, setToggle } = navSlice.actions;

export default navSlice.reducer;
