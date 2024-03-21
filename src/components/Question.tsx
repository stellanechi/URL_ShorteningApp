// Question.js

import { useState } from "react";
// import { FaPlus } from "react-icons/fa6";
import { IoIosArrowDropdownCircle } from "react-icons/io";

interface QuestionProps {
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" mb-4">
      <button
        className="w-full text-left font-semibold focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between w-[100%] md:text-lg md:w-[50%] p-1 px-4 bg-slate-300 rounded">
          {question} <IoIosArrowDropdownCircle className="text-2xl" />
        </div>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-700 w-[100%] md:text-md md:w-[50%] p-1 px-4 bg-slate-300 rounded ">
          {answer}
        </div>
      )}
    </div>
  );
};

export default Question;
