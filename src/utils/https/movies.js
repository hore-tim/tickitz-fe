import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getAllMovies = (limit, sort, page, search, controller) => {
	const url = `${baseUrl}/movies?limit=${limit}&sort=${sort}&page=${page}&search=${search}`;
	const config = { signal: controller.signal };
	return axios.get(url, config);
};

export const getMovies = (controller) => {
	const url = `${baseUrl}/movies?limit=5`;
	const config = {signal: controller.signal}
	return axios.get(url, config);
}