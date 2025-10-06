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

export const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

export const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 100 },
	},
};

export const buttonHover = {
	scale: 1.02,
	transition: { type: "spring", stiffness: 300 },
};

export const buttonTap = {
	scale: 0.98,
};
