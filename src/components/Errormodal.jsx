import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const Errormodal = ({ error }) => {
	return (
		<div className="absolute top-[20px] right-[10px] text-red-500 p-4 border rounded-[10px] flex flex-col gap-2 items-center justify-center">
			<div className="flex justify-end w-full">
				<MdClose className="w-5 h-5" />
			</div>
			<BiSolidErrorAlt className="w-5 h-5 md:w-6 md:h-6" />
			<h3 className="text-[13px] font-normal w-[70%] text-center">{error}</h3>
		</div>
	);
};

export default Errormodal;
