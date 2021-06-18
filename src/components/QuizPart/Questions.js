import React, { useState, useEffect, Fragment } from "react";
import './Questions.css';
import arrayShuffle from "array-shuffle"; 
import he from 'he'

export const Questions = ({ question, questionIndex, setQuestionIndex, points, setPoints }) => {
  const [answerShowing, setAnswerShowing] = useState(false)
  const [answerArray, setAnswerArray] = useState([])

/* Takes care of states when an answer is clicked */
  const handleAnswer = (e) => {
    checkCorrect()
    if (he.decode(e.target.innerHTML) === question.correct_answer) {
      alert('Correct!')
    }
    else alert('Wrong!')
    setAnswerShowing(true)
  }
/* Resetting all the states and colors to their initial state */
  const nextQuestion = () => {
    setAnswerShowing(false)
    const buttons = document.getElementsByClassName("Questions-Box md:mr-4")
    for (let i=0; i<buttons.length; i++) {
    if(he.decode(buttons[i].innerHTML) === question.correct_answer) buttons[i].style.background=''
  }
    setAnswerArray([])
    setQuestionIndex(() => questionIndex + 1)
  }
  /* To make sure to only shuffle the questions once */
  useEffect(() => {
    const answers = question.incorrect_answers
    if (answers.length < 4) answers.unshift(question.correct_answer)
    const shuffledAnswers = arrayShuffle(answers)
    setAnswerArray(shuffledAnswers)
  },[question])

/* Function to color the correct answer green */
  const checkCorrect = () => {
    const buttons = document.getElementsByClassName("Questions-Box md:mr-4")
    for (let i=0; i<buttons.length; i++) if(he.decode(buttons[i].innerHTML) === question.correct_answer) buttons[i].style.background='#8dc561'
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
            <p className="xs:text-center sm:text-center md:text-center">
              {question.category}
            </p>
          </div>
          <div>
            <div className="quest xs:text-center sm:text-center md:text-center mt-12 w-100 border-bottom">
              <h2 dangerouslySetInnerHTML={{ __html: question.question }}></h2>
            </div>
            <div className="select-answer md:mx-auto xs:text-center sm:text-center md:text-center mt-6 sm:block md:flex ">
              <button disabled={answerShowing} onClick={(e) => handleAnswer(e)} className="Questions-Box md:mr-4" dangerouslySetInnerHTML={{ __html: answerArray[0] }}></button>
              <button disabled={answerShowing} onClick={(e) => handleAnswer(e)} className="Questions-Box md:mr-4" dangerouslySetInnerHTML={{ __html: answerArray[1] }}></button>
              {question.type==='multiple' && <Fragment>
              <button disabled={answerShowing} onClick={(e) => handleAnswer(e)} className="Questions-Box md:mr-4" dangerouslySetInnerHTML={{ __html: answerArray[2] }}></button>
              <button disabled={answerShowing} onClick={(e) => handleAnswer(e)} className="Questions-Box md:mr-4" dangerouslySetInnerHTML={{ __html: answerArray[3] }}></button>
              </Fragment>}
            </div>
            {answerShowing && <button onClick={nextQuestion} className="Questions-Box nextQ">Next Question</button>}
          </div>
        </div>
        : "Loading..."}
    </div>
  );
};
