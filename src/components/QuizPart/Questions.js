import React, { useState, useEffect } from "react";
import Axios from "axios";
import './Questions.css';

export const Questions = () => {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async (category = "", difficulty = "") => {
    await Axios.get(
      `https://opentdb.com/api.php?amount=1${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    )
      .then((response) => setQuestions(response.data.results))
      .catch((error) => console.log(error));
  };


  return (
    <div>
      <div>
        <h1 className="xs:text-center sm:text-center md:text-center mt-12">
          Hello User
        </h1>
        <p className="xs:text-center sm:text-center md:text-center ">
          The Quiz started
        </p>
      </div>
      {/*{questions.map(question => console.log(question))}*/}
      {questions
        ? questions.map((question, index) => ( 
            <div>
        <div className="quest xs:text-center sm:text-center md:text-center mt-12 w-100 border-bottom">
        <h2 key={index}>
         {question.question}
        </h2>
      </div>
      <div className="select-answer md:mx-auto xs:text-center sm:text-center md:text-center mt-6 sm:block md:flex ">
        <button className="Questions-Box md:mr-4" key={index}>{question.correct_answer}</button>
        <button className="Questions-Box md:mr-4" key={index}>{question.incorrect_answers[0]}</button>
        <button className="Questions-Box md:mr-4" key={index}>{question.incorrect_answers[1]}</button>
        <button className="Questions-Box" key={index}>{question.incorrect_answers[2]}</button>
      </div>
     </div>
          ))
        : "Loading..."}

    </div>
  );
};
