import Image from "next/image";

import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Layout from "components/Layout";

import spiderman from "assets/images/spiderman.png";
import johnWick from "assets/images/john-wick-3.png";
import lionKing from "assets/images/lion-king.png";

export default function MovieList() {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const movies = [
		{
			name: "Spiderman",
			image: spiderman,
			genre: ["Action", "Adventure", "Sci-Fi"],
		},
		{
			name: "Lion King",
			image: lionKing,
			genre: ["Action", "Adventure"],
		},
		{
			name: "John Wick",
			image: johnWick,
			genre: ["Action", "Adventure"],
		},
		{
			name: "Spiderman",
			image: spiderman,
			genre: ["Action", "Adventure", "Sci-Fi"],
		},
		{
			name: "Lion King",
			image: lionKing,
			genre: ["Action", "Adventure"],
		},
		{
			name: "John Wick",
			image: johnWick,
			genre: ["Action", "Adventure"],
		},
		{
			name: "Spiderman",
			image: spiderman,
			genre: ["Action", "Adventure", "Sci-Fi"],
		},
		{
			name: "Lion King",
			image: lionKing,
			genre: ["Action", "Adventure"],
		},
		{
			name: "John Wick",
			image: johnWick,
			genre: ["Action", "Adventure"],
		},
	];

	return (
		<Layout title={"Movies List"}>
			<div className="">
				<Navbar />
				<main className="flex flex-col">
					<section className="flex md:flex-row flex-col gap-y-5 justify-between md:px-20 px-5 py-10 bg-[#F5F6F8]">
						<div>
							<p className="font-bold text-2xl text-tickitz-primary">Movies List</p>
						</div>
						<div className="relative">
							<i className="bi bi-search absolute top-[7px] left-2 text-xl text-tickitz-primary"></i>
							<input
								type="text"
								placeholder="Search here..."
								className="appearance-none focus:outline-none border-transparent pl-10 pr-4 py-2 rounded-md"
							/>
						</div>
					</section>
					<section className="py-10">
						<div className="md:px-20 px-5">
							<div className="carousel gap-x-10">
								{months.map((month, index) => {
									return (
										<div key={index} className="carousel-item">
											<button className="btn normal-case bg-white text-tickitz-primary hover:text-white hover:bg-tickitz-primary hover:shadow-[0px_8px_30px_rgba(61,64,91,0.3)]">
												{month}
											</button>
										</div>
									);
								})}
							</div>
						</div>
					</section>
					<section className="py-10 min-h-screen">
						<div className="md:px-20 px-5">
							<div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-10 gap-5">
								{movies.map((movie, index) => {
									return (
										<div
											key={index}
											className="flex flex-col items-center gap-y-7 bg-white border-[0.5px] border-[#DEDEDE] rounded-md p-5"
										>
											<figure>
												<Image
													alt="movie-poster"
													src={movie.image}
													width={159}
													height={224}
													className="rounded-md"
												/>
											</figure>
											<div className="flex flex-col">
												<p className="font-bold text-lg text-tickitz-darkTitle text-center">
													{movie.name}
												</p>
												<p className="text-xs text-[#A0A3BD] text-center">
													{movie.genre.join(", ")}
												</p>
											</div>
											<div className="flex flex-col gap-y-3">
												<button className="btn normal-case text-tickitz-primary border-tickitz-primary bg-white hover:text-white hover:bg-tickitz-primary">
													Details
												</button>
												<button className="btn normal-case text-white border-tickitz-primary bg-tickitz-primary hover:text-tickitz-primary">
													Book Now
												</button>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</section>
					<section className="py-10">
						<div className="flex flex-col items-center gap-y-3">
							<div className="btn-group">
								<button className="btn normal-case border-[0.5px] bg-tickitz-primary text-white hover:bg-white hover:text-tickitz-primary">
									Prev
								</button>
								<button className="btn normal-case border-[0.5px] bg-tickitz-primary text-white hover:bg-white hover:text-tickitz-primary">
									Next
								</button>
							</div>
							<div>
								<p className="text-tickitz-label">Page 1 of 1</p>
							</div>
						</div>
					</section>
				</main>
				<Footer />
			</div>
		</Layout>
	);
}
