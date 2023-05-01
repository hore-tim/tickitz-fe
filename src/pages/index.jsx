import Image from "next/image";

import Navbar from "components/Navbar";
import Footer from "components/Footer";

import posterHero from "assets/images/hero-poster.webp";

//* temporary
import spiderman from "assets/images/spiderman.png";
import johnWick from "assets/images/john-wick-3.png";
import lionKing from "assets/images/lion-king.png";

export default function Home({ movies }) {
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

  return (
    <div className="container w-screen">
      <Navbar />
      <main className="flex flex-col">
        {/* hero start */}
        <section className="hero min-h-screen bg-white py-10">
          <div className="flex lg:flex-row flex-col lg:items-center w-full justify-between md:px-20 px-5 gap-y-5">
            <div className="left-side">
              <p className="text-[#A0A3BD] text-2xl leading-loose">
                Nearest Cinema, Newest Movie, <br />
                <span className="text-tickitz-primary text-[3.5rem] font-bold">
                  Find out now!
                </span>
              </p>
            </div>
            <div className="right-side">
              <Image alt="movie posters" src={posterHero} />
            </div>
          </div>
        </section>
        {/* hero end */}
        {/* now showing start */}
        <section className="bg-[#F5F6F8]">
          <div className="py-10 md:px-20 px-5 flex flex-col gap-y-10">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-y-3">
                <p className="font-bold text-2xl text-tickitz-primary">
                  Now Showing
                </p>
                <div className="divider h-[3px] my-0 bg-tickitz-primary self-center w-1/2"></div>
              </div>
              <div>
                <p className="font-bold text-tickitz-primary">view all</p>
              </div>
            </div>
            <div className="relative">
              <div className="carousel pb-38 gap-x-5">
                {movies.map((movie, index) => {
                  return (
                    <div
                      key={index}
                      className="group carousel-item cursor-pointer"
                    >
                      <div className="flex flex-col gap-y-7 bg-white/20 group-hover:bg-white group-hover:absolute border-2 border-white rounded-md p-5">
                        <figure>
                          <Image
                            alt="movie-poster"
                            src={movie.image}
                            width={159}
                            height={224}
                          />
                        </figure>
                        <div className="group-hover:flex flex-col gap-y-3 hidden">
                          <p className="font-bold text-lg text-tickitz-darkTitle text-center">
                            {movie.name}
                          </p>
                          <p className="text-xs text-[#A0A3BD] text-center">
                            {movie.genre.join(", ")}
                          </p>
                        </div>
                        <div className="group-hover:flex flex-col gap-y-5 hidden">
                          <button className="btn normal-case text-tickitz-primary border-tickitz-primary bg-white hover:text-white hover:bg-tickitz-primary">
                            Details
                          </button>
                          <button className="btn normal-case text-white border-tickitz-primary bg-tickitz-primary hover:text-tickitz-primary">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* now showing end */}
        {/* upcoming movies start */}
        <section>
          <div className="py-10 md:px-20 px-5 flex flex-col gap-y-10">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-y-3">
                <p className="font-bold text-2xl text-tickitz-primary">
                  Upcoming Movies
                </p>
              </div>
              <div>
                <p className="font-bold text-tickitz-primary">view all</p>
              </div>
            </div>
            <div>
              <div className="carousel gap-x-10">
                {months.map((month, index) => {
                  return (
                    <div key={index} className="carousel-item">
                      <button className="btn bg-white text-tickitz-primary hover:text-white hover:bg-tickitz-primary hover:shadow-[0px_8px_30px_rgba(61,64,91,0.3)]">
                        {month}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="carousel gap-x-5">
                {movies.map((movie, index) => {
                  return (
                    <div key={index} className="carousel-item cursor-pointer">
                      <div className="flex flex-col gap-y-7 bg-white border-[0.5px] border-[#DEDEDE] rounded-md p-5">
                        <figure>
                          <Image
                            alt="movie-poster"
                            src={movie.image}
                            width={159}
                            height={224}
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
                        <div className="flex flex-col">
                          <button className="btn normal-case text-tickitz-primary border-tickitz-primary bg-white hover:text-white hover:bg-tickitz-primary">
                            Details
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* upcoming movies end */}
        {/* movigoers start */}
        <section className="flex justify-center items-center md:px-20 p-5 py-20">
          <div className="flex flex-col items-center gap-y-5 bg-white shadow-[0px_16px_32px_rgba(186,186,186,0.3)] rounded-lg w-full py-10 md:px-0 px-5">
            <div>
              <p className="md:text-2xl text-sm text-tickitz-basic leading-relaxed">
                Be the vanguard of the <br />{" "}
                <span className="font-bold md:text-5xl text-[2rem] text-tickitz-primary">
                  Moviegoers
                </span>
              </p>
            </div>
            <div className="flex md:flex-row flex-col gap-y-3 gap-x-3">
              <input
                type="text"
                placeholder="Type your email"
                className="appeareance-none focus:outline-none border-2 border-[#DEDEDE] rounded-[4px] pl-4 h-12"
              />
              <button className="btn normal-case bg-tickitz-primary text-white hover:text-tickitz-primary rounded-[4px]">
                Join now
              </button>
            </div>
            <div>
              <p className="text-tickitz-label md:text-sm text-xs text-center">
                By joining you as a Tickitz member, <br /> we will always send
                you the latest updates via email .
              </p>
            </div>
          </div>
        </section>
        {/* movigoers end */}
      </main>
      <Footer />
    </div>
  );
}

//* simulate fetch data from server
export async function getServerSideProps() {
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

  return {
    props: { movies },
  };
}
