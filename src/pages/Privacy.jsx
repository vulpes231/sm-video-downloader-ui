import React from "react";

const Privacy = () => {
	return (
		<section className="w-full p-6 text-[#fff] bg-[#000] min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-[#1EA8D1]">
				ReelFetch Privacy Policy
			</h1>

			<div className="space-y-6">
				<section>
					<h2 className="text-xl font-semibold mb-3">Data We Collect</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>
							<strong>Download Counts:</strong> We track total number of
							downloads for analytics
						</li>
						<li>
							<strong>Request Metadata:</strong> For each download, we log:
							<ul className="list-[circle] pl-6 mt-2 space-y-1">
								<li>Timestamp of the request</li>
								<li>IP address (anonymized after processing)</li>
								<li>User agent (browser/device information)</li>
							</ul>
						</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">How We Use This Data</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>Monitor service usage and performance</li>
						<li>Prevent abuse and rate limiting</li>
						<li>Improve service reliability</li>
						<li>Aggregate statistics (no personal identification)</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">Data Retention</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>Raw IP addresses are deleted after 30 days</li>
						<li>Aggregated statistics are kept indefinitely</li>
					</ul>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-3">Third-Party Sharing</h2>
					<ul className="list-disc pl-6 space-y-2">
						<li>We do not sell or share your data with advertisers</li>
						<li>Data may be shared if required by law</li>
					</ul>
				</section>

				<p className="text-sm text-gray-400 mt-8">
					Last updated: {new Date().toLocaleDateString()}
				</p>
			</div>
		</section>
	);
};

export default Privacy;
