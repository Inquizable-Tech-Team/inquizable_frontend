import React, { useState } from "react";
import './Questions.css';
/* import {decode} from 'html-entities'; */
import arrayShuffle from "array-shuffle";

export const Questions = ({ question, questionIndex, setQuestionIndex }) => {
  const [answerShowing, setAnswerShowing] = useState(false)

  const answers = question.incorrect_answers
  if (answers.length < 4) answers.unshift(question.correct_answer)
  const shuffledAnswers = arrayShuffle(answers)
  console.log(shuffledAnswers)
  const handleAnswer = (e) => {
    if (e.target.innerHTML == question.correct_answer) alert('Correct!')
    else alert('Wrong!')
    setAnswerShowing(true)
  }

  const nextQuestion = () => {
    setAnswerShowing(false)
    setQuestionIndex(() => questionIndex + 1)
  }

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
              <button disabled={answerShowing} onClick={(e) => handleAnswer(e)} className="Questions-Box md:mr-4">{shuffledAnswers[0]}</button>
              <button disabled={answerShowing} onClick={(e) => handleAnswer(e)} className="Questions-Box md:mr-4">{shuffledAnswers[1]}</button>
              <button disabled={answerShowing} onClick={(e) => handleAnswer(e)} className="Questions-Box md:mr-4">{shuffledAnswers[2]}</button>
              <button disabled={answerShowing} onClick={(e) => handleAnswer(e)} className="Questions-Box md:mr-4">{shuffledAnswers[3]}</button>
            </div>
            {answerShowing && <button onClick={nextQuestion} className="Questions-Box">Next Question</button>}
          </div>
        </div>
        : "Loading..."}
    </div>
  );
};
