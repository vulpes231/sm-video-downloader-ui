import React from "react";
import { motion } from "framer-motion";
import { logo } from "../assets";

const Logo = () => {
	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	};

	const logoVariants = {
		hidden: {
			scale: 0,
			rotate: -180,
		},
		visible: {
			scale: 1,
			rotate: 0,
			transition: {
				type: "spring",
				stiffness: 260,
				damping: 20,
				duration: 0.5,
			},
		},
	};

	const textVariants = {
		hidden: {
			opacity: 0,
			x: -20,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 24,
			},
		},
	};

	const spanVariants = {
		hidden: {
			opacity: 0,
			x: 20,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 24,
				delay: 0.1,
			},
		},
	};

	return (
		<motion.div
			className="flex items-center gap-3 cursor-pointer group"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			whileHover="hover"
			whileTap="tap"
		>
			{/* Logo Image with Animation */}
			<motion.div
				className="relative"
				variants={logoVariants}
				whileHover={{
					scale: 1.1,
					rotate: 360,
					transition: { type: "spring", stiffness: 400, damping: 10 },
				}}
			>
				<motion.img
					src={logo}
					alt="Reelfetch Logo"
					className="w-12 md:w-14 lg:w-16 drop-shadow-lg"
					whileHover={{
						filter: "drop-shadow(0 0 12px rgba(6, 182, 212, 0.6))",
						transition: { duration: 0.3 },
					}}
				/>
				{/* Subtle glow effect */}
				<motion.div
					className="absolute inset-0 bg-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-30 -z-10"
					transition={{ duration: 0.3 }}
				/>
			</motion.div>

			{/* Text Container */}
			<motion.div
				className="flex sm:flex-row sm:items-baseline gap-1 sm:gap-2"
				variants={textVariants}
			>
				{/* Main Brand Name */}
				<motion.h1
					className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent tracking-tight"
					variants={textVariants}
					whileHover={{
						backgroundImage:
							"linear-gradient(to right, #06b6d4, #3b82f6, #06b6d4)",
						transition: { duration: 0.5 },
					}}
				>
					Reel
				</motion.h1>

				{/* Subtitle */}
				<motion.span
					className="text-white text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight"
					variants={spanVariants}
					whileHover={{
						color: "#f8fafc",
						transition: { duration: 0.2 },
					}}
				>
					fetch
				</motion.span>
			</motion.div>

			{/* Optional Tagline - Uncomment if you want a subtitle */}
			{/*
			<motion.span 
				className="hidden lg:block text-xs text-gray-400 ml-2 border-l border-gray-600 pl-2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8 }}
			>
				Video Downloader
			</motion.span>
			*/}
		</motion.div>
	);
};

export default Logo;
