import React from "react";
import { useDispatch } from "react-redux";

const App = () => {
	const dispatch = useDispatch();

	const searchVideo = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<div>
				<h3>Enter video URL</h3>
				<form action="" onSubmit={searchVideo}>
					<input type="text" />
					<button type="submit">search</button>
				</form>
			</div>
		</div>
	);
};

export default App;
