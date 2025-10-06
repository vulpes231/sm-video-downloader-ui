import axios from "axios";
import { devUrl } from "../constants";

const api = axios.create({
	baseURL: `${devUrl}`,
	headers: {
		"Content-Type": "application/json",
	},
});

export async function downloadVideo(formData) {
	try {
		// console.log(formData);
		const response = await api.post("/process", formData);
		// console.log(response.data);
		return response.data.data;
	} catch (error) {
		console.log(error);
		const err = error?.response?.data?.message || "Download Failed!";
		throw new Error(error);
	}
}
