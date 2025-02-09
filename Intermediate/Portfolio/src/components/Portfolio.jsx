import React from "react";
import clinic from "../../public/projects/Clinic.png";
import currencyCon from "../../public/projects/CurrencyCon.png";
import expenseTracker from "../../public/projects/ExpenseTracker.png";
import passManager from "../../public/projects/passManager.png";
import quizApp from "../../public/projects/QuizApp.png";

const Portfolio = () => {
  const cardItems = [
    {
      id: 1,
      logo: clinic,
      name: "Clinic Management System",
      brief: "Manages patient records, appointments, and billing.",
      Url: "https://github.com/Shubham-io/MERN-Projects/tree/master/Clinic%20Management%20System",
    },
    {
      id: 2,
      logo: currencyCon,
      name: "Currency Converter",
      brief: "Converts currencies in real-time with accurate exchange rates.",
      Url: "https://github.com/Shubham-io/React-Projects/tree/master/Mini/07CurrencyConverter",
    },
    {
      id: 3,
      logo: expenseTracker,
      name: "Expense Tracker",
      brief:
        "Tracks income and expenses for better financial management.",
      Url: "https://github.com/Shubham-io/React-Projects/tree/master/Mini/08ExpenseTracker",
    },
    {
      id: 4,
      logo: passManager,
      name: "Password Manager",
      brief: "Securely stores and manages passwords with encryption.",
      Url: "https://github.com/Shubham-io/React-Projects/tree/master/Intermediate/Password%20Manager/PassManager%20MongoDB",
    },
    {
      id: 5,
      logo: quizApp,
      name: "Quiz App",
      brief:
        "Interactive quiz app with MCQs and scoring.",
      Url: "https://github.com/Shubham-io/React-Projects/tree/master/Intermediate/Quiz%20App",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-10"
    >
      <h1 className="text-3xl font-bold mb-2">Portfolio</h1>
      <span className="text-lg">These are my Web development projects</span>

      <div className="grid grid-cols-1  md:grid-cols-4 gap-6">
        {cardItems.map(({ id, logo, name, brief, Url }) => (
          <div
            key={id}
            className="md:w-[300px] md:h-[300px] flex flex-col justify-center items-center  border-[2px] rounded-lg shadow-lg py-2 px-4 mt-6 hover:scale-105 duration-300 cursor-pointer"
          >
            <img
              src={logo}
              alt="logo"
              className="w-28 p-1 border-[2px] shadow-md rounded-lg"
            />
            <div>
              <div className="font-semibold text-lg text-center mt-2 ">
                {name}
              </div>
              <p className="mt-2  text-center">{brief}</p>
            </div>
            <div className="mt-3">
              <button
                className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-white "
                onClick={() => window.open(Url)}
              >
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
