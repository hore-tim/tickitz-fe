import React from "react";
import cover from "assets/images/spider.png";
import Image from "next/image";

export default function Details() {
  return (
    <>
      <main className=" px-8 md:px-[4.4rem] flex flex-col mt-32">
        <section className=" flex flex-col lg:flex-row gap-14 justify-center lg:justify-normal items-center lg:items-start">
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
                of his new mentor Tony Stark, Peter tries to fall back into his
                normal daily routine - distracted by thoughts of proving himself
                to be more than just your friendly neighborhood Spider-Man - but
                when the Vulture emerges as a new villain, everything that Peter
                holds most important will be threatened.{" "}
              </p>
            </div>
          </div>
        </section>
        <section className=" bg-tickitz-bgDetail"></section>
      </main>
    </>
  );
}
