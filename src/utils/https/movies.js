import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getAllMovies = (limit, sort, page, search, controller) => {
	const url = `${baseUrl}/movies?limit=${limit}&sort=${sort}&page=${page}&search=${search}`;
	const config = { signal: controller.signal };
	return axios.get(url, config);
};

<<<<<<< HEAD
export const getMovies = (controller) => {
	const url = `${baseUrl}/movies?limit=5`;
	const config = {signal: controller.signal}
=======
export const getSingleMovie = (id, controller) => {
	const url = `${baseUrl}/movies/${id}`
	const config = { signal: controller.signal };
>>>>>>> 954be6b54b0701ebc67409707dec8ba08b1266d2
	return axios.get(url, config);
}