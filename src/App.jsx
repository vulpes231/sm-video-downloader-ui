import React from "react";
import { Route, Routes } from "react-router-dom";
import { Contact, Privacy, Terms, Landing } from "./pages";

const App = () => {
	return (
		<div>
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
