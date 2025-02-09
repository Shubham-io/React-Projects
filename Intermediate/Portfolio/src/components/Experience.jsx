import React from "react";
import {
  html,
  css,
  javascript,
  react,
  nodejs,
  mongodb,
  cpp,
  python,
  postman,
  git,
  tailwind,
} from "../../public/techStack/icons.js";

const Experience = () => {
  const cardItems = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "React",
    },
    {
      id: 5,
      logo: nodejs,
      name: "NodeJs",
    },
    {
      id: 6,
      logo: mongodb,
      name: "MongoDb",
    },
    {
      id: 7,
      logo: tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 8,
      logo: python,
      name: "Python",
    },
    {
      id: 9,
      logo: cpp,
      name: "C++",
    },
    {
      id: 10,
      logo: git,
      name: "Git",
    },
    {
      id: 11,
      logo: postman,
      name: "Postman",
    },
  ];

  return (
    <div
      name="Tech Stack"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 py-4"
    >
      <div>
        <h1 className="text-3xl font-bold mb-2">Tech Stack</h1>
        <p className="text-lg">
          I have worked with mentioned tools and technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 my-4">
          {cardItems.map(({ id, logo, name }) => (
            <div
              key={id}
              className="md:w-[170px] md:h-[170px] flex flex-col justify-center items-center border-[2px] cursor-pointer rounded-lg p-2 shadow-lg hover:scale-105 duration-300"
            >
              <img src={logo} alt="logo" className="w-[130px]  " />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
