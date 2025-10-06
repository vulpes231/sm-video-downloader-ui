import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectNavSlice, setDarkMode, setToggle } from "../features/navSlice";
import Logo from "./Logo";

const navLinks = [
	{
		id: "home",
		title: "Home",
		path: "/",
	},
	{
		id: "about",
		title: "About",
		path: "/about",
	},
	{
		id: "contact",
		title: "Contact",
		path: "/contact",
	},
];

const Navbar = () => {
	const dispatch = useDispatch();
	const { darkMode, toggle } = useSelector(selectNavSlice);

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: -20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 24,
			},
		},
	};

	const mobileMenuVariants = {
		closed: {
			opacity: 0,
			scale: 0.95,
			transition: {
				duration: 0.2,
			},
		},
		open: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.3,
				staggerChildren: 0.1,
			},
		},
	};

	const mobileItemVariants = {
		closed: { x: -20, opacity: 0 },
		open: { x: 0, opacity: 1 },
	};

	return (
		<>
			{/* Desktop Navbar */}
			<motion.header
				className="fixed top-0 left-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 p-6 border-b border-gray-200 dark:border-slate-800"
				initial="hidden"
				animate="visible"
				variants={containerVariants}
			>
				<nav className="w-full max-w-7xl mx-auto flex items-center justify-between">
					{/* Logo */}
					<motion.div variants={itemVariants}>
						<Logo />
					</motion.div>

					{/* Desktop Navigation Links */}
					<motion.div
						className="hidden md:flex items-center gap-8"
						variants={containerVariants}
					>
						{navLinks.map((link, index) => (
							<motion.div key={link.id} variants={itemVariants} custom={index}>
								<Link
									to={link.path}
									className="relative text-gray-700 dark:text-gray-300 font-medium hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 px-3 py-2 group"
								>
									{link.title}
									{/* Hover underline effect */}
									<motion.div
										className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300"
										whileHover={{ width: "100%" }}
									/>
								</Link>
							</motion.div>
						))}
					</motion.div>

					{/* Desktop Controls */}
					<motion.div
						className="hidden md:flex items-center gap-4"
						variants={itemVariants}
					>
						{/* Dark Mode Toggle */}
						<motion.button
							onClick={() => dispatch(setDarkMode())}
							className="p-3 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-300 group"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{darkMode ? (
								<FaMoon
									size={18}
									className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
								/>
							) : (
								<FaSun
									size={18}
									className="text-amber-500 group-hover:text-amber-400 transition-colors"
								/>
							)}
						</motion.button>

						{/* Menu Toggle for Mobile - Hidden on desktop */}
						<motion.button
							onClick={() => dispatch(setToggle())}
							className="md:hidden p-3 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-300"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{!toggle ? (
								<MdMenu
									size={20}
									className="text-gray-700 dark:text-gray-300"
								/>
							) : (
								<MdClose
									size={20}
									className="text-gray-700 dark:text-gray-300"
								/>
							)}
						</motion.button>
					</motion.div>

					{/* Mobile Menu Button - Visible only on mobile */}
					<motion.button
						onClick={() => dispatch(setToggle())}
						className="md:hidden p-3 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors duration-300"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						variants={itemVariants}
					>
						{!toggle ? (
							<MdMenu size={20} className="text-gray-700 dark:text-gray-300" />
						) : (
							<MdClose size={20} className="text-gray-700 dark:text-gray-300" />
						)}
					</motion.button>
				</nav>
			</motion.header>

			{/* Mobile Menu */}
			<AnimatePresence>
				{toggle && (
					<motion.div
						className="fixed top-20 inset-x-0 md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-b border-gray-200 dark:border-slate-800 z-40"
						initial="closed"
						animate="open"
						exit="closed"
						variants={mobileMenuVariants}
					>
						<motion.div
							className="max-w-7xl mx-auto p-6"
							variants={containerVariants}
						>
							<div className="flex flex-col space-y-6">
								{navLinks.map((link, index) => (
									<motion.div
										key={link.id}
										variants={mobileItemVariants}
										custom={index}
									>
										<Link
											to={link.path}
											className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 py-3 border-b border-gray-100 dark:border-slate-800"
											onClick={() => dispatch(setToggle())}
										>
											{link.title}
										</Link>
									</motion.div>
								))}

								{/* Mobile Dark Mode Toggle */}
								<motion.div
									className="pt-4 border-t border-gray-100 dark:border-slate-800"
									variants={mobileItemVariants}
								>
									<button
										onClick={() => {
											dispatch(setDarkMode());
											dispatch(setToggle());
										}}
										className="flex items-center gap-3 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300 py-3"
									>
										{darkMode ? (
											<>
												<FaMoon className="text-cyan-400" />
												Light Mode
											</>
										) : (
											<>
												<FaSun className="text-amber-500" />
												Dark Mode
											</>
										)}
									</button>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Spacer for fixed navbar */}
			<div className="h-20" />
		</>
	);
};

export default Navbar;
