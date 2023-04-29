/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import branding from "assets/icons/tickitzyn.svg";
import brandingFill from "assets/icons/tickitzyn2.svg";
import google from "assets/icons/google.svg";
import facebook from "assets/icons/fb.svg";

export default function Signup() {
  const [iconEye, setIconEye] = useState(false);
  const toggleIcon = () => {
    iconEye ? setIconEye(false) : setIconEye(true);
  };
  return (
    <>
      <main className=" flex w-full h-full ">
        <section className=" hero-auth hidden lg:flex w-[58%] flex-col ">
          <section className=" flex flex-col w-full h-full bg-tickitz-primary  px-28 bg-opacity-80">
            <div className=" pt-20  mb-[6rem] ">
              <Image src={branding} width={276} height={104} alt="brand" />
            </div>
            <div className=" flex flex-col gap-5">
              <p className=" text-white font-bold text-5xl lg:text-[2rem] xl:text-5xl leading-[60px]">
                Lets build your account
              </p>
              <p className=" text-white opacity-70 text-sm xl:text-2xl  xl:leading-[40px]">
                To be a loyal moviegoer and access all of features,
                <br /> your details are required.
              </p>
            </div>
            <div className=" flex flex-col mt-14 mb-[17.5rem] ">
              <div className=" flex flex-col">
                <div className=" flex">
                  <div className="flex flex-col justify-center">
                    <div className=" flex gap-12">
                      <div className="bg-white rounded-full w-12 h-12 justify-center items-center flex text-xl ">
                        <p className=" text-center text-tickitz-label font-bold">
                          1
                        </p>
                      </div>
                      <div className=" text-white font-medium xl:text-2xl flex items-center lg:text-base">
                        <p>Fill your additional details</p>
                      </div>
                    </div>

                    <div className=" w-12 h-12 justify-center border-l-2 flex border-white ml-[1.438rem] "></div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col">
                <div className=" flex">
                  <div className="flex flex-col justify-center">
                    <div className=" flex gap-12">
                      <div className="bg-transparent border-white border-2 rounded-full w-12 h-12 justify-center items-center flex text-xl ">
                        <p className=" text-center text-white font-bold">2</p>
                      </div>
                      <div className=" text-white font-medium xl:text-2xl flex items-center lg:text-base">
                        <p>Activate your account</p>
                      </div>
                    </div>

                    <div className=" w-12 h-12 justify-center border-l-2 flex border-white ml-[1.438rem] "></div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col">
                <div className=" flex">
                  <div className="flex flex-col justify-center">
                    <div className=" flex gap-12">
                      <div className="bg-transparent border-white border-2 rounded-full w-12 h-12 justify-center items-center flex text-xl ">
                        <p className=" text-center text-white font-bold">3</p>
                      </div>
                      <div className=" text-white font-medium xl:text-2xl flex items-center lg:text-base">
                        <p>Done</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className=" flex w-full lg:w-[47%] xl:w-[42%]  flex-col ">
          <div className=" flex lg:hidden px-[10%] mt-[5rem] mb-[4.2rem] lg:inset-0">
            <Image src={brandingFill} width={200} alt="brandd" />
          </div>
          <form action="" className=" w-full  flex flex-col px-[10%]">
            <h1 className=" text-[1.7rem] font-semibold lg:mt-[9.5rem] flex text-tickitz-basic">
              Fill your additional details
            </h1>
            <div className=" flex flex-col gap-7">
              <div className=" flex flex-col justify-center  w-full mt-5 lg:mt-12 ">
                <label
                  htmlFor=""
                  className=" mb-3 text-base text-tickitz-basic"
                >
                  Email
                </label>
                <input
                  type="text"
                  className=" h-16 rounded-md border border-tickitz-label flex w-full p-5"
                  placeholder="Input Your Email"
                />
              </div>
              <div className=" flex flex-col justify-center relative">
                <label
                  htmlFor=""
                  className=" mb-3 text-base text-tickitz-basic"
                >
                  Password
                </label>
                <input
                  type={`${iconEye ? "text" : "password"}`}
                  className=" h-16 rounded-md border border-tickitz-label flex w-full p-5  "
                  placeholder="Input Your Password"
                />
                <i
                  className={` text-[#A9A9A9] absolute text-2xl cursor-pointer top-[50%] right-[1.5rem]  ${
                    iconEye ? "bi bi-eye-fill" : "bi bi-eye-slash-fill"
                  }`}
                  onClick={toggleIcon}
                ></i>
              </div>
              <div className=" flex justify-normal">
                <label className="label cursor-pointer gap-3">
                  <input
                    type="checkbox"
                    name="agree"
                    className="checkbox outline-tickitz-primary checked:bg-tickitz-primary "
                  />
                  <span className="label-text text-lg text-tickitz-label">
                    I agree to terms & conditions
                  </span>
                </label>
              </div>
              <div className=" w-full">
                <button
                  type="submit"
                  className=" w-full h-16 btn bg-tickitz-primary hover:bg-tickitz-primary rounded-md text-white font-bold"
                >
                  Join for free now
                </button>
              </div>
            </div>
          </form>
          <div className=" flex gap-1 text-lg px-[10%] w-full mt-8 text-center justify-center items-center">
            <p className=" text-tickitz-label ">
              Do you already have an account?{" "}
              <Link
                href={"/login"}
                className=" text-tickitz-basic font-semibold underline"
              >
                Log in
              </Link>
            </p>
          </div>
          <div className=" flex gap-9 justify-center items-center text-center opacity-70 my-11 ">
            <div className="w-36 h-[0.13rem] bg-tickitz-label flex justify-center items-center"></div>
            <div className=" flex text-tickitz-label font-medium ">
              <p>Or</p>
            </div>
            <div className="w-36 h-[0.13rem] bg-tickitz-label flex justify-center items-center"></div>
          </div>
          <div className=" flex justify-center items-center px-[10%] gap-9 pb-20">
            <button className="bg-white shadow-md rounded-xl w-[11.375rem] h-16 flex justify-center items-center gap-3">
              <div className="flex">
                <Image src={google} width={24} height={24} alt="google" />
              </div>
              <p className=" flex text-tickitz-label font-semibold">Google</p>
            </button>
            <button className="bg-white shadow-md rounded-xl w-[11.375rem] h-16 flex justify-center items-center gap-3">
              <div className="flex">
                <Image src={facebook} width={24} height={24} alt="google" />
              </div>
              <p className=" flex text-tickitz-label font-semibold">Facebook</p>
            </button>
          </div>
        </section>
      </main>
    </>
  );
}