// Question.js

import { useState } from "react";

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="w-full text-left font-semibold focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </button>
      {isOpen && <div className="mt-2 text-gray-700">{answer}</div>}
    </div>
  );
};

export default Question;
