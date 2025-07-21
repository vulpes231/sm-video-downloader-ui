import React from "react";

const Preview = ({ videoInfo }) => {
	const BACKEND_BASE_URL =
		import.meta.env.VITE_BACKEND_URL || "https://sm-video-server.onrender.com";

	return (
		<div className="max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg">
			<div className="relative w-full aspect-video">
				<video
					src={videoInfo.downloadOptions.directUrl}
					controls
					className="w-full h-full object-contain bg-black"
					poster={videoInfo.thumbnail || ""}
				/>
			</div>

			<div className="p-4 bg-gray-800">
				<div className="flex flex-col space-y-4">
					{videoInfo.title && (
						<h2 className="text-white text-lg font-semibold truncate">
							{videoInfo.title}
						</h2>
					)}

					<a
						href={`${BACKEND_BASE_URL}${videoInfo.downloadOptions.downloadUrl}`}
						download
						className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors duration-200"
					>
						Download Video
					</a>

					{videoInfo.metadata && (
						<div className="grid grid-cols-2 gap-2 text-gray-300 text-sm">
							{videoInfo.metadata.duration && (
								<div>Duration: {videoInfo.metadata.duration}</div>
							)}
							{videoInfo.metadata.resolution && (
								<div>Resolution: {videoInfo.metadata.resolution}</div>
							)}
							{videoInfo.metadata.size && (
								<div>Size: {videoInfo.metadata.size}</div>
							)}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Preview;
