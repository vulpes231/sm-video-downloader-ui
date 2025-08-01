const sendError = (err) => {
	if (err.response) {
		const errMsg = err.response.data.message;
		throw new Error(errMsg);
	} else {
		throw err;
	}
};

const devUrl = "http://localhost:3000";
const liveUrl = "https://sm-video-server.onrender.com";

export { sendError, devUrl, liveUrl };
