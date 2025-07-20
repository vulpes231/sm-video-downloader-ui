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
				<h3 className="text-[22px] font-semibold md:text-[30px] text-center mb-6">
					Download Video Clips from any Social Media
				</h3>

				{/* Platform icons display */}
				<div className="flex justify-center gap-4 mb-4">
					<FaTwitter className="text-2xl" title="Twitter" />
					<FaFacebook className="text-2xl" title="Facebook" />
					<FaInstagram className="text-2xl" title="Instagram" />
					{/* <FaTiktok className="text-2xl" title="TikTok" /> */}
					{/* <FaYoutube className="text-2xl" title="YouTube" /> */}
				</div>

				<form onSubmit={searchVideo} className="flex flex-col gap-4">
					<select
						className="border border-[#505050] h-[40px] md:h-[48px] w-full outline-none text-[16px] rounded-[5px] p-2 bg-black"
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
						className="border border-[#505050] h-[40px] md:h-[48px] w-full outline-none text-[16px] placeholder:text-[14px] p-2 rounded-[5px] bg-black"
						name="url"
						// required
					/>

					<button
						className="w-full bg-[#2ba61e] h-[40px] md:h-[48px] rounded-3xl cursor-pointer flex items-center justify-center"
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
				SM Video Downloader &copy; {currentYear}. All Rights Reserved
			</small>
			{getVideoLoading && <Loader text={"Loading video..."} />}
			{error && <Errormodal error={error} />}
		</section>
	);
};

export default Landing;
