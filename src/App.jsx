import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Contact, Privacy, Terms, Landing } from "./pages";
import { Navbar } from "./components";
import { useSelector } from "react-redux";
import { selectNavSlice } from "./features/navSlice";

const App = () => {
	const { darkMode } = useSelector(selectNavSlice);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/privacy" element={<Privacy />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
};

export default App;
