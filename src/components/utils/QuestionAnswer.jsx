import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

function QuestionAnswer({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  function toggleAnswer() {
    setShowAnswer(!showAnswer);
  }
  return (
    <>
      <div className="w-full question flex justify-between px-[7.7rem] py-6">
        <p className="text-base font-bold text-gray_10">{question}</p>
        <button
          className=" text-2xl font-bold text-gray_10 hover:text-mainPrimary"
          onClick={toggleAnswer}
        >
          {showAnswer ? <CiCircleMinus /> : <CiCirclePlus />}
        </button>
      </div>
      {showAnswer && (
        <div className="answer px-[7.7rem] py-6 text-sm font-light">
          <p>{answer}</p>
        </div>
      )}
    </>
  );
}

export default QuestionAnswer;
