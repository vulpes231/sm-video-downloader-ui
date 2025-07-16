import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideoInfo } from "../features/getVideoSlice";

const Landing = () => {
	const dispatch = useDispatch();
	const [form, setForm] = useState({
		url: "",
	});

	const searchVideo = (e) => {
		e.preventDefault();
		console.log(form);
		dispatch(getVideoInfo(form));
	};

	const handleInput = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	return (
		<section className="p-6 h-screen w-full bg-[#000] text-[#fff]">
			<div>
				<h3 className="text-[22px] font-semibold md:text-[30px]">
					Download Video Clips from any social media
				</h3>
				<form action="" onSubmit={searchVideo} className="flex flex-col gap-4">
					<input
						type="text"
						onChange={handleInput}
						value={form.url}
						placeholder="Paste video URL"
						className="border border-[#505050] h-[40px] md:h-[48px] w-full outline-none text-[16px] placeholder:text-[14px] p-2 rounded-[5px]"
						name="url"
					/>
					<button
						className="w-full bg-[#2ba61e] h-[40px] md:h-[48px] rounded-3xl cursor-pointer"
						type="submit"
					>
						search
					</button>
				</form>
			</div>
		</section>
	);
};

export default Landing;
