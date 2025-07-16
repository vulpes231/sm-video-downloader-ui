import React from "react";

const Loader = ({ text }) => {
	return (
		<div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center bg-white/80">
			<div>
				<span></span>
				<h3 className="text-[#fff]">{text}</h3>
			</div>
		</div>
	);
};

export default Loader;
