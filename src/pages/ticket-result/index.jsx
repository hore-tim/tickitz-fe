import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React, { useState } from "react";
import Image from "next/image";
import branding from "assets/icons/tickitzyn.svg";
import QRCodeGenerator from "utils/qrCode";
import Title from "utils/wrapper/title";
import PrivateRoute from "utils/wrapper/privateRoute";

export default function TicketResult() {
  const [qrCodeImage, setQrCodeImage] = useState("hiphiphore");
  return (
    <>
      <PrivateRoute>
        <Title title="Ticket Result">
          <Navbar />
          <main className=" bg-[#F5F6F8] px-[15%] w-full h-full justify-center items-center py-24">
            <section className=" w-full h-full bg-white rounded-lg justify-center items-center shadow-sm px-[4.438rem] pt-14 pb-12 flex flex-col">
              <h1 className=" text-center font-bold text-2xl pb-12">
                Proof of Payment
              </h1>
              <section className=" flex flex-col-reverse lg:flex-row border-2 border-tickitz-greyBorder rounded-2xl mt-32 lg:mt-0  w-full h-[22.625rem]">
                <div className=" flex flex-col w-full lg:w-[67%]">
                  <div className=" bg-tickitz-primary hidden   bg-opacity-80 px-14 rounded-t-2xl lg:rounded-tl-2xl h-[4.813rem] justify-between items-center lg:flex">
                    <Image src={branding} alt="brand" width={115} />
                    <p className=" text-lg font-semibold leading-[34px] text-white">
                      Admit One
                    </p>
                  </div>
                  <div className=" flex flex-col px-14 py-8 gap-y-4">
                    <div className="flex flex-col gap-2">
                      <p className="text-gray-400 text-sm">Movie</p>
                      <p className=" text-base font-semibold text-tickitz-darkTitle">
                        Spider-Man: Homecoming
                      </p>
                    </div>
                    <div className="w-full flex justify-between">
                      <span className="flex-1 flex flex-col items-start gap-2">
                        <p className="text-gray-400 text-sm">Date</p>
                        <h2 className="font-bold">07 July</h2>
                      </span>
                      <span className="flex-1 flex flex-col items-start gap-2">
                        <p className="text-gray-400 text-sm">Time</p>
                        <h2 className="font-bold">02:00 PM</h2>
                      </span>
                      <span className="flex-1 flex flex-col items-start gap-2">
                        <p className="text-gray-400 text-sm">Category</p>
                        <h2 className="font-bold">PG-13</h2>
                      </span>
                    </div>
                    <div className="w-full flex justify-between">
                      <span className="flex-1 flex flex-col items-start gap-2">
                        <p className="text-gray-400 text-sm">Count</p>
                        <h2 className="font-bold">3 pieces</h2>
                      </span>
                      <span className="flex-1 flex flex-col items-start gap-2">
                        <p className="text-gray-400 text-sm">Seats</p>
                        <h2 className="font-bold">C4, C5, C6</h2>
                      </span>
                      <span className="flex-1 flex flex-col items-start gap-2">
                        <p className="text-gray-400 text-sm">Price</p>
                        <h2 className="font-bold">$30</h2>
                      </span>
                    </div>
                  </div>
                </div>
                <span className=" border-l-2 border-tickitz-greyBorder border-dashed "></span>
                <div className=" hidden lg:flex flex-row lg:flex-col bg-transparent  relative rounded-e-lg">
                  <div className="flex w-10 h-10 bg-base-100 rounded-full absolute -top-5 -left-5 border-b-4 border-tickitz-greyBorder "></div>
                  <div className="flex w-10 h-10 bg-base-100 rounded-full absolute -bottom-5 -left-5  border-t-4 border-tickitz-greyBorder  "></div>
                </div>
                <div className=" w-full lg:w-[33%] flex-col justify-center items-center">
                  <div className=" bg-tickitz-primary bg-opacity-80 px-14 rounded-t-2xl lg:rounded-tr-2xl h-[4.813rem] justify-center items-center hidden lg:flex">
                    <Image src={branding} alt="brand" width={115} />
                  </div>
                  <div className="flex justify-center items-center pt-8 flex-col">
                    <QRCodeGenerator data={qrCodeImage} />
                    {/* <p className=" text-center text-sm text-tickitz-label">
                  22/01/2022
                </p> */}
                  </div>
                </div>
              </section>
              <section className=" flex gap-4 mt-12 justify-center items-center">
                <button className=" btn bg-transparent hover:bg-tickitz-detail btn-outline rounded-md text-tickitz-basic gap-5 border border-tickitz-primary">
                  <i className="bi bi-download text-xl"></i>
                  <p>Download</p>
                </button>
                <button className=" btn bg-transparent w-40 hover:bg-tickitz-detail btn-outline rounded-md text-tickitz-basic gap-5 border border-tickitz-primary">
                  <i className="bi bi-printer text-xl"></i>
                  <p>Print</p>
                </button>
              </section>
            </section>
          </main>
          <Footer />
        </Title>
      </PrivateRoute>
    </>
  );
}
