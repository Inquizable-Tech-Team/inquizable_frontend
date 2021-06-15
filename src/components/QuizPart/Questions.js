import React, { useState, useEffect } from "react";
import Axios from "axios";

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

  console.log(typeof questions);
  console.log(questions);
  console.log(Array.isArray(questions));

  return (
    <div>
      <div>
        <h1 className="xs:text-center sm:text-center md:text-center mt-12">
          Hello User
        </h1>
        <p className="xs:text-center sm:text-center md:text-center">
          The Quiz started
        </p>
      </div>
      {/*{questions.map(question => console.log(question))}*/}
      {questions
        ? questions.map((question) => ( 
            <div>
        <div className="quest xs:text-center sm:text-center md:text-center mt-12 w-100">
        <p>
         {question.question}
        </p>
      </div>
      <div className="ans xs:text-center sm:text-center md:text-center">
        <button>{question.correct_answer}</button>
        <button>{question.incorrect_answers[0]}</button>
        <button>{question.incorrect_answers[1]}</button>
        <button>{question.incorrect_answers[2]}</button>
      </div>
     </div>
          ))
        : "Loading..."}

    </div>
  );
};
