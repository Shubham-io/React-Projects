import React from "react";
import { FaFacebookSquare, FaLinkedin, FaGithub, FaTelegram } from "./Icons";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex gap-3 px-4 py-2">
            <FaFacebookSquare className="text-2xl cursor-pointer hover:scale-110 duration-200" />
            <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 duration-200" />
            <FaGithub className="text-2xl cursor-pointer hover:scale-110 duration-200" />
            <FaTelegram className="text-2xl cursor-pointer hover:scale-110 duration-200" />
          </div>
          <div className="mt-6 pt-6 text-center border-t border-gray-800 ">
            <p>&copy; Your Company. All rights reserved.</p>
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
