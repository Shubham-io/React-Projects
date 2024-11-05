import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaTelegram,
  BiLogoMongodb,
  SiExpress,
  FaReact,
  FaNodeJs,
} from "./Icons";
import pic from "../../public/photo.avif";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-32"
      >
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2 mt-10 md:mt-24  space-y-2 order-2 md:order-1">
            <span className="text-2xl">Welcome In My Feed</span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1 className="text-4xl">Hello, I'm a </h1>
              <ReactTyped
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                className="text-red-700 font-bold"
                loop
              />
            </div>
            <br />
            <p className="text-sm md:text-lg text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, quia temporibus dolor tenetur et modi optio at harum
              provident a, iste vitae voluptatem, repudiandae earum facilis
              recusandae alias assumenda praesentium! Quas voluptate numquam
              fugit?
            </p>
            <br />
            {/* social media icons  */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6">
              <div className="space-y-1">
                <h2 className="text-md font-semibold">Available on</h2>
                <ul className="flex space-x-4">
                  <li>
                    <FaFacebookSquare className="text-xl cursor-pointer hover:scale-110 duration-200" />
                  </li>
                  <li>
                    <FaLinkedin className="text-xl cursor-pointer hover:scale-110 duration-200" />
                  </li>
                  <li>
                    <FaGithub className="text-xl cursor-pointer hover:scale-110 duration-200" />
                  </li>
                  <li>
                    <FaTelegram className="text-xl cursor-pointer hover:scale-110 duration-200" />
                  </li>
                </ul>
              </div>

              <div className="space-y-1">
                <h2 className="text-md font-semibold">currently working on</h2>
                <div className="flex space-x-4">
                  <BiLogoMongodb className="text-2xl cursor-pointer rounded-full border-[2px] hover:scale-110 duration-200" />
                  <SiExpress className="text-2xl cursor-pointer rounded-full border-[2px] hover:scale-110 duration-200" />
                  <FaReact className="text-2xl cursor-pointer rounded-full border-[2px] hover:scale-110 duration-200" />
                  <FaNodeJs className="text-2xl cursor-pointer rounded-full border-[2px] hover:scale-110 duration-200" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 order-1">
            <img
              src={pic}
              alt="pic"
              className="rounded-full md:mt-14 mt-4 md:ml-36 md:w-[55%]"
            />
          </div>
        </div>
      </div>
      <hr className="m" />
    </>
  );
};

export default Home;
