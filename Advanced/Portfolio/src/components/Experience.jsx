import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import react from "../../public/reactjs.png";

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
      name: "ReactJS",
    },
    {
      id: 5,
      logo: html,
      name: "HTML",
    },
    {
      id: 6,
      logo: css,
      name: "CSS",
    },
    {
      id: 7,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 8,
      logo: react,
      name: "ReactJS",
    },
  ];

  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 py-4"
    >
      <div>
        <h1 className="text-3xl font-bold mb-4">Experience</h1>
        <p className="text-lg">I have experience of below Technologies</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-4 ">
          {cardItems.map(({ id, logo, name }) => (
            <div
              key={id}
              className="md:w-[180px] md:h-[180px] flex flex-col justify-center items-center border-[2px] cursor-pointer rounded-full p-2 shadow-lg hover:scale-110 duration-300"
            >
              <img src={logo} alt="logo" className="w-[130px] rounded-full " />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
