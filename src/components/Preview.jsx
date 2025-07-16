import React from "react";

const Preview = ({ videoInfo }) => {
	return (
		<div>
			<video src={videoInfo.previewUrl} controls />
			<a href={videoInfo.downloadUrl} download>
				Download
			</a>
		</div>
	);
};

export default Preview;
