import React from "react";
import { motion } from "framer-motion";

const Loader = ({ text = "Loading..." }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm"
		>
			<div className="flex flex-col items-center justify-center gap-4">
				<motion.div
					animate={{ rotate: 360 }}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						ease: "linear",
					}}
					className="relative h-16 w-16"
				>
					{/* Gradient donut ring */}
					<div className="absolute inset-0 rounded-full border-8 border-transparent border-t-green-500 border-r-green-500/40 border-b-green-500/60 border-l-green-500/80" />

					{/* Inner circle to create donut hole */}
					<div className="absolute inset-2 rounded-full bg-white/60" />
				</motion.div>

				<motion.h3
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="text-xl font-medium text-gray-800"
				>
					{text}
				</motion.h3>
			</div>
		</motion.div>
	);
};

export default Loader;
