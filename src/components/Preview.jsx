import React from "react";

const Preview = ({ videoInfo }) => {
	const BACKEND_BASE_URL =
		import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
	return (
		<div className="border border-[#fff] flex flex-col gap-4 p-4">
			<video
				src={videoInfo.downloadOptions.directUrl}
				controls
				className="h-[400px] w-full"
			/>

			<a
				href={`${BACKEND_BASE_URL}${videoInfo.downloadOptions.downloadUrl}`}
				download
				className="bg-blue-400 w-full"
			>
				Download Video
			</a>
		</div>
	);
};

export default Preview;
