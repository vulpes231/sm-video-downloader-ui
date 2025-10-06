import axios from "axios";
import { devUrl, liveUrl } from "../constants";

const api = axios.create({
	baseURL: `${liveUrl}`,
	headers: {
		"Content-Type": "application/json",
	},
});

export async function downloadVideo(formData) {
	try {
		const response = await api.post("/process", formData);
		return response.data.data;
	} catch (error) {
		console.log(error);
		const err = error?.response?.data?.message || "Download Failed!";
		throw new Error(error);
	}
}
