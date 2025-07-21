import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideoInfo } from "../features/getVideoSlice";
import {
	FaFacebook,
	FaInstagram,
	FaTiktok,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { Errormodal, Loader, Preview } from "../components";
import { motion } from "framer-motion";
// import { logo } from "../assets";

const supportedPlatforms = [
	{
		id: "x",
		name: "twitter",
	},
	{
		id: "facebook",
		name: "facebook",
	},
	{
		id: "instagram",
		name: "instagram",
	},
	// {
	// 	id: "tiktok",
	// 	name: "tiktok",
	// },
	// {
	// 	id: "youtube",
	// 	name: "youtube",
	// },
];

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { type: "spring", stiffness: 100 },
	},
};

const buttonHover = {
	scale: 1.02,
	transition: { type: "spring", stiffness: 300 },
};

const buttonTap = {
	scale: 0.98,
};

const Landing = () => {
	const PlatformIcon = ({ icon: Icon, active, platform, color }) => (
		<motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.9 }}>
			<Icon
				className={`text-2xl cursor-pointer transition-colors ${
					active === platform ? color : "text-gray-400 hover:text-gray-300"
				}`}
				title={platform.charAt(0).toUpperCase() + platform.slice(1)}
			/>
		</motion.div>
	);

	const dispatch = useDispatch();
	const [form, setForm] = useState({
		url: "",
		platform: "",
	});
	// const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const { getVideoLoading, getVideoError, videoInfo } = useSelector(
		(state) => state.video
	);

	const currentYear = new Date().getFullYear();

	const searchVideo = (e) => {
		e.preventDefault();

		if (!form.url || !form.platform) {
			setError("Please select a platform and paste a URL");
			return;
		}

		dispatch(getVideoInfo(form));
	};

	const handleInput = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	useEffect(() => {
		if (getVideoError) {
			setError(getVideoError);
		}
	}, [getVideoError]);

	useEffect(() => {
		if (videoInfo) {
			console.log(videoInfo);
		}
	}, [videoInfo]);

	useEffect(() => {
		let timeout;
		if (error) {
			timeout = setTimeout(() => {
				setError("");
			}, 3000);
		}
		return () => clearTimeout(timeout);
	}, [error]);

	return (
		<motion.section
			initial="hidden"
			animate="visible"
			variants={containerVariants}
			className="p-6 min-h-screen w-full bg-[#000] text-[#fff] flex items-center justify-center flex-col gap-10 relative"
		>
			<motion.div variants={itemVariants} className="w-full max-w-md">
				<motion.h3
					variants={itemVariants}
					className="text-[22px] font-semibold md:text-[30px] text-center mb-6"
				>
					Download Video Clips from any Social Media
				</motion.h3>

				{/* Platform icons with animation */}
				<motion.div
					variants={itemVariants}
					className="flex justify-center gap-6 mb-6"
				>
					<PlatformIcon
						icon={FaTwitter}
						active={form.platform}
						platform="x"
						color="text-cyan-500"
					/>
					<PlatformIcon
						icon={FaFacebook}
						active={form.platform}
						platform="facebook"
						color="text-blue-500"
					/>
					<PlatformIcon
						icon={FaInstagram}
						active={form.platform}
						platform="instagram"
						color="text-pink-500"
					/>
				</motion.div>

				<motion.form
					variants={itemVariants}
					onSubmit={searchVideo}
					className="flex flex-col gap-4"
				>
					<motion.select
						whileFocus={{ scale: 1.01 }}
						className="border border-[#505050] h-[40px] md:h-[48px] w-full outline-none text-[16px] rounded-[5px] py-2 px-4 bg-black capitalize"
						name="platform"
						onChange={handleInput}
						value={form.platform}
					>
						<option value="">Select platform</option>
						{supportedPlatforms.map((platform) => (
							<option key={platform.id} value={platform.id}>
								{platform.name}
							</option>
						))}
					</motion.select>

					<motion.input
						whileFocus={{ scale: 1.01 }}
						type="url"
						onChange={handleInput}
						value={form.url}
						placeholder="Paste video URL"
						className="border border-[#505050] h-[40px] md:h-[48px] w-full outline-none text-[16px] placeholder:text-[14px] py-2 px-4 rounded-[5px] bg-black"
						name="url"
					/>

					<motion.button
						whileHover={buttonHover}
						whileTap={buttonTap}
						className="w-full bg-[#1EA8D1] h-[40px] md:h-[48px] rounded-[5px] cursor-pointer flex items-center justify-center font-semibold text-[14px] md:text-[16px]"
						type="submit"
						disabled={getVideoLoading}
					>
						{getVideoLoading ? (
							<motion.span
								animate={{ opacity: [0.6, 1, 0.6] }}
								transition={{ repeat: Infinity, duration: 1.5 }}
							>
								Searching...
							</motion.span>
						) : (
							"Search"
						)}
					</motion.button>
				</motion.form>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{
					opacity: videoInfo ? 1 : 0,
					y: videoInfo ? 0 : 20,
				}}
				className="w-full max-w-md"
			>
				{videoInfo && <Preview videoInfo={videoInfo} />}
			</motion.div>

			<motion.footer
				className="text-center py-4 text-gray-400 text-sm"
				variants={itemVariants}
			>
				<div className="flex justify-center gap-4 mb-2">
					<a href="/terms" target="_blank" className="hover:text-[#1EA8D1]">
						Terms
					</a>
					<a href="/privacy" target="_blank" className="hover:text-[#1EA8D1]">
						Privacy
					</a>

					<a href="/contact" target="_blank" className="hover:text-[#1EA8D1]">
						Contact
					</a>
				</div>
				<p>© {currentYear} ReelFetch. All rights reserved.</p>
			</motion.footer>

			{getVideoLoading && <Loader text={"Loading video..."} />}
			{error && <Errormodal error={error} onClose={() => setError("")} />}
		</motion.section>
	);
};

export default Landing;
