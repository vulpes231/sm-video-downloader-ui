import React from "react";

const Preview = ({ videoInfo }) => {
	const handleDownload = async (videoUrl, quality) => {
		try {
			const filename = `video_${quality}_${Date.now()}.mp4`;

			// Fetch the video blob and create download
			const response = await fetch(videoUrl);
			const blob = await response.blob();
			const blobUrl = URL.createObjectURL(blob);

			// Create temporary anchor element
			const link = document.createElement("a");
			link.href = blobUrl;
			link.download = filename;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			// Clean up blob URL
			URL.revokeObjectURL(blobUrl);
		} catch (error) {
			console.error("Download failed:", error);
			// Fallback to direct download
			window.open(videoUrl, "_blank");
		}
	};

	return (
		<div className="max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-lg">
			<div className="relative w-full aspect-video">
				<video
					src={videoInfo?.url?.[0]?.hd}
					controls
					className="w-full h-full object-contain bg-black"
				/>
			</div>

			<div className="p-4 bg-gray-800">
				<div className="flex flex-col space-y-4">
					{videoInfo?.title && (
						<h2 className="text-white text-lg font-semibold truncate">
							{videoInfo.title}
						</h2>
					)}

					<div className="flex flex-col space-y-2">
						{videoInfo?.url?.map((qualityObj, index) => {
							const qualityKey = Object.keys(qualityObj)[0];
							const videoUrl = qualityObj[qualityKey];

							return (
								<button
									key={index}
									onClick={() => handleDownload(videoUrl, qualityKey)}
									className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-center transition-colors duration-200"
								>
									Download {qualityKey.toUpperCase()} quality
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
