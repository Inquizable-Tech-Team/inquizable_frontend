import React/* , { useState, useEffect } */ from "react";
import './Questions.css';
/* import {decode} from 'html-entities'; */

export const Questions = ({ question, questionIndex, setQuestionIndex }) => {
  let answers = question.incorrect_answers
  answers.unshift(question.correct_answer)
  console.log(answers)

  const handleAnswer = () => {
    setQuestionIndex(() => questionIndex + 1)
  }

  const randomNoRepeats = (array) => {
    let copy = array.slice(0)
    return () => {
      if (copy.length < 1) { copy = array.slice(0); }
      let index =  Math.floor(Math.random() * copy.length);
      let item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }

  const chooser = randomNoRepeats(answers)
  let answer1 = chooser()
  let answer2 = chooser()
  let answer3 = chooser()
  let answer4 = chooser()
  return (
    <div>
      {question
        ?
        <div>
          <div>
            <h1 className="xs:text-center sm:text-center md:text-center mt-12">
              Hello User
            </h1>
            <p className="xs:text-center sm:text-center md:text-center ">
              {question.category}
            </p>
          </div>
          <div>
            <div className="quest xs:text-center sm:text-center md:text-center mt-12 w-100 border-bottom">
              <h2>
                {question.question}
              </h2>
            </div>
            <div className="select-answer md:mx-auto xs:text-center sm:text-center md:text-center mt-6 sm:block md:flex ">
              <button onClick={handleAnswer} className="Questions-Box md:mr-4">{answer1}</button>
              <button onClick={handleAnswer} className="Questions-Box md:mr-4">{answer2}</button>
              <button onClick={handleAnswer} className="Questions-Box md:mr-4">{answer3}</button>
              <button onClick={handleAnswer} className="Questions-Box">{answer4}</button>
            </div>
          </div>


        </div>
        : "Loading..."}
    </div>
  );
};
