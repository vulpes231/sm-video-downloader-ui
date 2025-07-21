import React from "react";

const Terms = () => {
	return (
		<div className="w-full p-6 text-[#fff] bg-[#000] min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-[#1EA8D1]">
				ReelFetch Terms of Service
			</h1>

			<div className="space-y-4">
				<h2 className="text-xl font-semibold">Acceptable Use</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						<strong>Allowed:</strong> Personal, non-commercial use of downloaded
						content
					</li>
					<li>
						<strong>Prohibited:</strong> Downloading copyrighted content without
						permission from the rights holder
					</li>
					<li>
						<strong>Prohibited:</strong> Automated scraping or mass downloading
						of content
					</li>
					<li>
						<strong>Prohibited:</strong> Any illegal activities using our
						service
					</li>
				</ul>

				<h2 className="text-xl font-semibold mt-6">Service Disclaimer</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>
						ReelFetch does not host any video content - we only fetch publicly
						available content
					</li>
					<li>
						We are not responsible for how users utilize downloaded content
					</li>
					<li>
						Service availability is not guaranteed and may be discontinued at
						any time
					</li>
				</ul>

				<h2 className="text-xl font-semibold mt-6">Copyright</h2>
				<ul className="list-disc pl-6 space-y-2">
					<li>Respect all copyright laws in your jurisdiction</li>
					<li>DMCA takedown requests should be sent to our contact email</li>
					<li>Repeat infringers may have their access terminated</li>
				</ul>

				<p className="mt-8 text-sm text-gray-400">
					Last updated: {new Date().toLocaleDateString()}
				</p>
			</div>
		</div>
	);
};

export default Terms;
