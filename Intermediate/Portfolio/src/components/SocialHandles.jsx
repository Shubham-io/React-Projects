import { FaInstagramSquare, FaLinkedin, FaGithub, FaTelegram } from "./Icons";

import React from "react";

const SocialHandles = () => {
  return (
    <ul className="flex space-x-4">
      <a href="https://www.instagram.com/shubh_4m/" target="_blank">
        <li>
          <FaInstagramSquare className="size-8 cursor-pointer hover:scale-110 duration-200" />
        </li>
      </a>

      <a
        href="https://in.linkedin.com/in/shubhamvishwakarma2002"
        target="_blank"
      >
        <li>
          <FaLinkedin className="size-8 cursor-pointer hover:scale-110 duration-200" />
        </li>
      </a>

      <a href="https://github.com/Shubham-io" target="_blank">
        <li>
          <FaGithub className="size-8 cursor-pointer hover:scale-110 duration-200" />
        </li>
      </a>

      <a href="https://t.me/shubham_v8" target="_blank">
        <li>
          <FaTelegram className="size-8 cursor-pointer hover:scale-110 duration-200" />
        </li>
      </a>
    </ul>
  );
};

export default SocialHandles;
