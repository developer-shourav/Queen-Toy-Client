import React from "react";
import {BsChevronDown} from 'react-icons/bs';
const SingleQuestion = (props) => {
  const { question, ans } = props.questionData;
  return (
    <div className="shadow-lg py-4 rounded-lg border">
      <div className="collapse">
        <input type="checkbox" />


        <div className="collapse-title text-xl  font-medium text-black">
          <div className="flex items-center justify-between">
          <span>{question}</span>  <button className="font-bold text-xl"><BsChevronDown className="" /></button>
          </div>
        </div>

        <div className="collapse-content">
          <p>{ans} </p>
        </div>
      </div>
    </div>
  );
};

export default SingleQuestion;
