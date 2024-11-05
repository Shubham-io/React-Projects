import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

const Portfolio = () => {
  const cardItems = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: express,
      name: "Express",
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },
    {
      id: 5,
      logo: python,
      name: "Python",
    },
    {
      id: 6,
      logo: java,
      name: "Java",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-10"
    >
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <span>Featured Projects</span>

      <div className="grid grid-cols-1  md:grid-cols-4 gap-4">
        {cardItems.map(({ id, logo, name }) => (
          <div
            key={id}
            className="md:w-[300px] md:h-[300px]  border-[2px] rounded-lg shadow-lg py-2 px-4 mt-6 hover:scale-110 duration-300 cursor-pointer"
          >
            <img
              src={logo}
              alt="logo"
              className="w-[120px] h-[120px] p-1 border-[2px] shadow-md rounded-full"
            />
            <div>
              <div className="font-bold text-lg mt-2 ml-6">{name}</div>
              <p className="mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="mt-3">
              <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-white ">
                GitHub Repo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
