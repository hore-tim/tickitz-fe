import React from "react";
import cover from "assets/images/spiderman.png";
import Image from "next/image";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ebv from "assets/icons/ebv.id.svg";
import hiflix from "assets/icons/hiflix.svg";
import cineone from "assets/icons/CineOne21.svg";
import CardBrand from "components/CardBrand";
import Title from "utils/wrapper/title";
export default function Details() {
  const cardData = [
    {
      name: "Ebv",
      address: "Whatever street No.12, South Purwokerto",
      image: ebv,
      price: 30000,
      showtime: [
        "08.10am",
        "09.20am",
        "10.00am",
        "11.10am",
        "12.40am",
        "14.10am",
        "14.50am",
      ],
    },
    {
      name: "Hiflix",
      address: "Whatever street No.12, South Purwokerto",
      image: hiflix,
      price: 30000,
      showtime: [
        "08.10am",
        "09.20am",
        "10.00am",
        "11.10am",
        "12.40am",
        "14.10am",
        "14.50am",
      ],
    },
    {
      name: "Ebv",
      address: "Whatever street No.12, South Purwokerto",
      image: ebv,
      price: 30000,
      showtime: [
        "08.10am",
        "09.20am",
        "10.00am",
        "11.10am",
        "12.40am",
        "14.10am",
        "14.50am",
      ],
    },
    {
      name: "Hiflix",
      address: "Whatever street No.12, South Purwokerto",
      image: hiflix,
      price: 30000,
      showtime: [
        "08.10am",
        "09.20am",
        "10.00am",
        "11.10am",
        "12.40am",
        "14.10am",
        "14.50am",
      ],
    },
    {
      name: "Ebv",
      address: "Whatever street No.12, South Purwokerto",
      image: ebv,
      price: 30000,
      showtime: [
        "08.10am",
        "09.20am",
        "10.00am",
        "11.10am",
        "12.40am",
        "14.10am",
        "14.50am",
      ],
    },
    {
      name: "Hiflix",
      address: "Whatever street No.12, South Purwokerto",
      image: hiflix,
      price: 30000,
      showtime: [
        "08.10am",
        "09.20am",
        "10.00am",
        "11.10am",
        "12.40am",
        "14.10am",
        "14.50am",
      ],
    },
    {
      name: "Ebv",
      address: "Whatever street No.12, South Purwokerto",
      image: ebv,
      price: 30000,
      showtime: [
        "08.10am",
        "09.20am",
        "10.00am",
        "11.10am",
        "12.40am",
        "14.10am",
        "14.50am",
      ],
    },
    {
      name: "CineOne21",
      address: "Whatever street No.12, South Purwokerto",
      image: cineone,
      price: 30000,
      showtime: [
        "08.10am",
        "09.20am",
        "10.00am",
        "11.10am",
        "12.40am",
        "14.10am",
        "14.50am",
      ],
    },
  ];

  return (
    <>
      <Title title="Movie Details">
        <Navbar />
        <main className=" flex flex-col mt-32">
          <section className=" flex flex-col lg:flex-row gap-14 justify-center lg:justify-normal items-center lg:items-start px-8 md:px-[4.4rem]">
            <div className=" border-2 border-solid border-tickitz-greyBorder rounded-3xl p-12 justify-center items-center flex w-fit">
              <div className=" w-[14.75rem] h-[22.625] rounded-[0.68rem] overflow-hidden">
                <Image
                  src={cover}
                  alt="pp"
                  className=" w-full h-full object-cover"
                  width={236}
                  height={362}
                />
              </div>
            </div>
            <div className=" flex flex-col  flex-wrap justify-center items-center pb-20 lg:justify-normal lg:items-start">
              <div className=" flex flex-col gap-2 text-center lg:text-left mb-4">
                <p className=" text-[1.7rem] md:text-3xl lg:text-[2rem] font-bold leading-9">
                  Spider-Man: Homecoming
                </p>
                <p className=" text-lg text-tickitz-basic pl-1">
                  Adventure, Action, Sci-Fi
                </p>
                <p></p>
              </div>
              <div className=" grid mt-8 grid-cols-2 gap-y-8 w-full flex-wrap xl:w-[50%]">
                <div className=" flex flex-col w-max">
                  <h3 className=" text-tickitz-detail">Release Date</h3>
                  <p className=" text-[#121212] text-lg">June 28, 2017</p>
                </div>
                <div className=" flex flex-col w-max">
                  <h3 className=" text-tickitz-detail">Duration</h3>
                  <p className=" text-[#121212] text-lg">2 hours 13 minutes </p>
                </div>
                <div className=" flex flex-col w-max">
                  <h3 className=" text-tickitz-detail">Directed by</h3>
                  <p className=" text-[#121212] text-lg">Jon Watss</p>
                </div>
                <div className=" flex flex-col w-[11.8rem] md:w-[18.8rem] xl:w-[25.875rem] flex-wrap">
                  <h3 className=" text-tickitz-detail">Cast</h3>
                  <p className=" text-[#121212] text-lg">
                    Tom Holland, Michael Keaton, Robert Downey Jr
                  </p>
                </div>
              </div>
              <hr className=" bg-tickitz-label w-full my-6" />
              <div className=" flex gap-2 flex-col">
                <h3 className=" text-xl text-black font-bold">Synopsis</h3>
                <p className=" text-lg leading-8 text-tickitz-basic">
                  Thrilled by his experience with the Avengers, Peter returns
                  home, where he lives with his Aunt May, under the watchful eye
                  of his new mentor Tony Stark, Peter tries to fall back into
                  his normal daily routine - distracted by thoughts of proving
                  himself to be more than just your friendly neighborhood
                  Spider-Man - but when the Vulture emerges as a new villain,
                  everything that Peter holds most important will be threatened.{" "}
                </p>
              </div>
            </div>
          </section>
          <section className=" bg-tickitz-bgDetail w-full py-[4.5rem]  px-8 md:px-[4.4rem]">
            <h1 className=" text-2xl text-tickitz-darkTitle font-bold text-center">
              Showtimes and Tickets
            </h1>
            <div className=" flex gap-7 mt-10 justify-center cursor-pointer px-3">
              <div className=" flex justify-center items-center gap-3 bg-[#EFF0F6] w-72 h-14 rounded-md px-6">
                <i className="bi bi-calendar4 text-[1.5rem]"></i>
                <input
                  name="date"
                  type="date"
                  className=" outline-none bg-[#EFF0F6] cursor-pointer"
                />
              </div>
              <div className="flex justify-between items-center gap-3 bg-[#EFF0F6] w-72 h-14 rounded-md px-6 cursor-pointer">
                <div className=" flex gap-1 justify-center items-center">
                  <i className="bi bi-geo-alt-fill text-[1.2rem]"></i>
                  <p className="text-[1rem]">Purwokerto</p>
                </div>
                <div>
                  <i className="bi bi-chevron-compact-down"></i>
                </div>
              </div>
            </div>
            <section className=" flex mt-[4.6rem] justify-center gap-8 flex-wrap w-full">
              {cardData.map((data, idx) => {
                return (
                  <CardBrand
                    key={idx}
                    name={data.name}
                    address={data.address}
                    image={data.image}
                    price={data.price}
                    showtime={data.showtime}
                  />
                );
              })}
            </section>
            <div className=" flex gap-12 py-12 w-full items-center">
              <div className=" w-full h-[1px] bg-tickitz-label"></div>
              <div className=" w-max">
                <p className=" text-tickitz-primary font-bold w-max">
                  View More
                </p>
              </div>
              <div className=" w-full h-[1px] bg-tickitz-label"></div>
            </div>
          </section>
        </main>
        <Footer />
      </Title>
    </>
  );
}
