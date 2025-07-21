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

const Landing = () => {
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
		<section className="p-6 min-h-screen w-full bg-[#000] text-[#fff] flex items-center justify-center flex-col gap-10 relative">
			<div className="w-full max-w-md">
				{/* <img src={logo} alt="" className="w-[50px]" /> */}
				<h3 className="text-[22px] font-semibold md:text-[30px] text-center mb-6">
					Download Video Clips from any Social Media
				</h3>

				{/* Platform icons display */}
				<div className="flex justify-center gap-4 mb-4">
					<FaTwitter
						className={`text-2xl ${form.platform === "x" && "text-cyan-500"}`}
						title="Twitter"
					/>
					<FaFacebook
						className={`text-2xl ${
							form.platform === "facebook" && "text-blue-500"
						}`}
						title="Facebook"
					/>
					<FaInstagram
						className={`text-2xl ${
							form.platform === "instagram" && "text-pink-500"
						}`}
						title="Instagram"
					/>
					{/* <FaTiktok className="text-2xl" title="TikTok" /> */}
					{/* <FaYoutube className="text-2xl" title="YouTube" /> */}
				</div>

				<form onSubmit={searchVideo} className="flex flex-col gap-4">
					<select
						className="border border-[#505050] h-[40px] md:h-[48px] w-full outline-none text-[16px] rounded-[5px] py-2 px-4 bg-black capitalize"
						name="platform"
						onChange={handleInput}
						value={form.platform}
						// required
					>
						<option value="">Select platform</option>
						{supportedPlatforms.map((platform) => (
							<option key={platform.id} value={platform.id}>
								{platform.name}
							</option>
						))}
					</select>

					<input
						type="url"
						onChange={handleInput}
						value={form.url}
						placeholder="Paste video URL"
						className="border border-[#505050] h-[40px] md:h-[48px] w-full outline-none text-[16px] placeholder:text-[14px] py-2 px-4 rounded-[5px] bg-black"
						name="url"
						// required
					/>

					<button
						className="w-full bg-[#1EA8D1] h-[40px] md:h-[48px] rounded-[5px] cursor-pointer flex items-center justify-center font-semibold text-[14px] md:text-[16px]"
						type="submit"
						disabled={getVideoLoading}
					>
						Search
					</button>
				</form>
			</div>
			<div className={!videoInfo ? "hidden" : "w-full max-w-md"}>
				{/* <p>Infoooo</p> */}
				{videoInfo && <Preview videoInfo={videoInfo} />}
			</div>
			<small className="text-[#979797] text-[12px] font-normal">
				<span className="text-[#1EA8D1]">ReelFetch</span> &copy; {currentYear}.
				All Rights Reserved
			</small>
			{getVideoLoading && <Loader text={"Loading video..."} />}
			{error && <Errormodal error={error} onClose={() => setError("")} />}
		</section>
	);
};

export default Landing;
