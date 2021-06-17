import React/* , { useState, useEffect } */ from "react";
import './Questions.css';
import {decode} from 'html-entities';
import arrayShuffle from "array-shuffle";

export const Questions = ({ question, questionIndex, setQuestionIndex }) => {
  
  let answers = question.incorrect_answers
  answers.unshift(question.correct_answer)
  let shuffledAnswers = arrayShuffle(answers)
  console.log(answers)
  console.log(shuffledAnswers)
  
  const handleAnswer = () => {
    setQuestionIndex(() => questionIndex + 1)
  }

/*   const randomNoRepeats = (array) => {
    let copy = array.slice(0)
    return () => {
      let index = Math.floor(Math.random() * copy.length);
      let item = copy[index];
      copy.splice(index, 1);
      return item;  
    };
  }

  const chooser = randomNoRepeats(answers)
  let answerArray = []
  answerArray.push(chooser())
  answerArray.push(chooser())
  answerArray.push(chooser())
  answerArray.push(chooser()) */
/*   let answer1 = chooser()
  console.log(answer1)
  let answer2 = chooser()
  console.log(answer2)
  let answer3 = chooser()
  console.log(answer3)
  let answer4 = chooser()
  console.log(answer4) */
  /* console.log(answerArray) */


/*   return(
    <div>{console.log(answerArray)}
    {answerArray.length===4 && <h1>{answerArray[0]} | {answerArray[1]} | {answerArray[2]} | {answerArray[3]}</h1>}

    </div>
  )
 */
  return (
    <div>{/* {console.log(answerArray)} */}
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
              <button onClick={handleAnswer} className="Questions-Box md:mr-4">{shuffledAnswers[0]}</button>
              <button onClick={handleAnswer} className="Questions-Box md:mr-4">{shuffledAnswers[1]}</button>
              <button onClick={handleAnswer} className="Questions-Box md:mr-4">{shuffledAnswers[2]}</button>
              <button onClick={handleAnswer} className="Questions-Box">{shuffledAnswers[3]}</button>
            </div>
          </div>
        </div>
        : "Loading..."}
    </div>
  );
};
