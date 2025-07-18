import React from "react";

const Preview = ({ videoInfo }) => {
	return (
		<div>
			<video
				src={videoInfo.downloadOptions.directUrl}
				controls
				className="h-[400px] w-full"
			/>

			<a href={videoInfo.downloadOptions.downloadUrl} download>
				Download Video
			</a>
		</div>
	);
};

export default Preview;
