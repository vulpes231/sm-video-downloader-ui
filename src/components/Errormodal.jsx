import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

const ErrorModal = ({ error, onClose }) => {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0, y: -20, scale: 0.95 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				exit={{ opacity: 0, y: -20, scale: 0.95 }}
				transition={{ type: "spring", damping: 20, stiffness: 300 }}
				className="fixed top-5 right-5 z-50 bg-white dark:bg-black shadow-lg rounded-xl overflow-hidden border border-red-100 max-w-xs"
			>
				<div className="relative p-4">
					<div className="flex items-start gap-3">
						<div className="flex-shrink-0">
							<BiSolidErrorAlt className="w-6 h-6 text-red-500" />
						</div>
						<div className="flex-1 min-w-0">
							<p className="text-sm font-medium text-gray-900">Error</p>
							<p className="text-sm text-gray-500 mt-1">{error}</p>
						</div>
						<button
							onClick={onClose}
							className="text-gray-400 hover:text-gray-500 transition-colors"
						>
							<MdClose className="w-5 h-5" />
						</button>
					</div>
				</div>
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 4, ease: "linear" }}
					className="h-1 bg-red-500 origin-left"
				/>
			</motion.div>
		</AnimatePresence>
	);
};

export default ErrorModal;
