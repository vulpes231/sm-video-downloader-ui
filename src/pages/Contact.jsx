import React from "react";

const Contact = () => {
	return (
		<div className="w-full p-6 text-[#fff] bg-[#000] min-h-screen">
			<h1 className="text-3xl font-bold mb-6 text-[#1EA8D1]">Contact Us</h1>

			<div className="space-y-4">
				<p>Have questions or feedback? Use the form below:</p>

				{/* Replace with your Google Form embed code */}
				<iframe
					src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
					width="100%"
					height="800"
					frameBorder="0"
					marginHeight="0"
					marginWidth="0"
					className="rounded-lg"
				>
					Loading...
				</iframe>

				<p className="text-sm text-gray-400">
					Alternatively, email us at{" "}
					<a href="mailto:support@reelfetch.com" className="text-[#1EA8D1]">
						support@reelfetch.com
					</a>
				</p>
			</div>
		</div>
	);
};

export default Contact;
