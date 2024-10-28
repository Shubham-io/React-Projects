import React, { useRef, useState } from "react";
import { data } from "../../public/data";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [currentQuestion, setCurrentQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];
  console.log(option_array);

  const chekAns = (e, ans) => {
    if (lock === false) {
      if (currentQuestion.ans === ans) {
        setScore((prev) => prev + 1);
        e.target.classList.add("correct");
      } else {
        e.target.classList.add("wrong");
          option_array[currentQuestion.ans - 1].current.classList.add("correct");
      }
      setLock(true);
    }
  };

  const prev = () => {
    if (index >= 1) {
      setIndex(--index);
      setCurrentQuestion(data[index]);
    }
  };
  const next = () => {
    if (index === data.length - 1) {
      setResult(true);
      return 0;
    }
    setIndex(++index);
    setCurrentQuestion(data[index]);
    setLock(false);
    option_array.map((option) => {
      option.current.classList.remove("correct");
      option.current.classList.remove("wrong");
      return null;
    });
  };

  const reset = () => {
    setIndex(0);
    setCurrentQuestion(data[index]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  return (
    <div className="container bg-white w-[80%] lg:w-[40%] flex flex-col gap-4 mx-auto mt-16 py-6 px-12 rounded-xl">
      <h1 className="text-4xl font-bold hover:cursor-pointer w-fit mb-1">
        Quiz App
      </h1>

      <hr className="h-[2px] bg-gray-500" />
      {result ? (
        <>
          <p className="text-2xl">
            You score is {score} out of {data.length}
          </p>

          <button
            className="bg-purple-500 text-xl font-medium text-white w-[100px] py-3  rounded-md hover:cursor-pointer"
            onClick={reset}
          >
            Reset
          </button>
        </>
      ) : (
        <>
          <p className="text-2xl">
            {index + 1}. {currentQuestion.question}
          </p>
          <ul className="w-full my-2 space-y-4 text-lg">
            <li
              className="py-3 px-2 border border-gray-700 rounded-xl hover:cursor-pointer"
              onClick={(e) => chekAns(e, 1)}
              ref={Option1}
            >
              {currentQuestion.option1}
            </li>
            <li
              className="py-3 px-2 border border-gray-700 rounded-xl hover:cursor-pointer"
              onClick={(e) => chekAns(e, 2)}
              ref={Option2}
            >
              {currentQuestion.option2}
            </li>
            <li
              className="py-3 px-2 border border-gray-700 rounded-xl hover:cursor-pointer"
              onClick={(e) => chekAns(e, 3)}
              ref={Option3}
            >
              {currentQuestion.option3}
            </li>
            <li
              className="py-3 px-2 border border-gray-700 rounded-xl hover:cursor-pointer"
              onClick={(e) => chekAns(e, 4)}
              ref={Option4}
            >
              {currentQuestion.option4}
            </li>
          </ul>
          <div className="w-full flex justify-between px-1">
            <button
              className="bg-purple-500 text-xl font-medium text-white w-[100px] py-3  rounded-md hover:cursor-pointer"
              onClick={prev}
            >
              Previous
            </button>
            <button
              className="bg-purple-500 text-xl font-medium text-white w-[100px] py-3  rounded-md hover:cursor-pointer"
              onClick={next}
            >
              Next
            </button>
          </div>
          <span className="text-center">
            {index + 1} to {data.length}
          </span>
        </>
      )}
    </div>
  );
};

export default Quiz;
