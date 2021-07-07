import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import "./QuizPart/Quiz.css";
import Data from './data.json'
import { QuizStart } from './QuizPart/QuizStart';
import { Questions } from "./QuizPart/Questions";
import { Overview } from "./QuizPart/Overview";
import Navbar from "./Navbar";
import { fetchCommunityQuestions, fetchDataBaseQuestions } from "../Controller";

export const Quiz = () => {
  const { qId } = useParams();
  const [questions, setQuestions] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(false)
  const [points, setPoints] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [categoryName, setCategoryName] = useState(false)

  const filterId = (qId) => { /* Function to find the corresponding ID from our DATA.JSON */
    let result
    Data.forEach(element => {
      if (element.subcategory) {
        result = (element.subcategory.find(({ id }) => id === Number(qId)))
        if (result && (result.name !== categoryName)) setCategoryName(result.name)
      }
    });
  }
/* Could probably should have been put in a useEffect, categoryName then in the Dependency Array of useEffect below, but works like it is right now :) */
  if (qId === 'community' && categoryName!=='Community') setCategoryName('Community')
  else if (qId === '0' && categoryName!=='Random') setCategoryName('Random')
  else filterId(qId)
  
  useEffect(() => {/* Use Effect for fetching the right set of Questions */
    if (categoryName==='Community') {
      fetchCommunityQuestions().then(res => {
        setQuestions(res)
      })
    }
    else {
      fetchDataBaseQuestions(qId).then(res => {
        setQuestions(res)
      })
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Navbar />
      {questions && questionIndex===10 ? <Overview points={points} correct={correct}/>
      : questions && (questionIndex || questionIndex===0) ? <Questions setCorrect={setCorrect} points={points} setPoints={setPoints} question={questions[questionIndex]} questionIndex={questionIndex} setQuestionIndex={setQuestionIndex}/> :
      <QuizStart categoryName={categoryName} setQuestionIndex={setQuestionIndex} />}
    </Fragment>
  );
};