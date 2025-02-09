import React from "react";
import SocialHandles from "./SocialHandles";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="flex gap-3 px-4 py-2">
            <SocialHandles />
          </div>
          <div className="mt-2 pt-6 text-center border-t border-gray-800 ">
            <p>&copy; Shubham Vishwakarma | All rights reserved.</p>
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
