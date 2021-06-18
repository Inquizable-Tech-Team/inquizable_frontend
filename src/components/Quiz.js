import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./QuizPart/Quiz.css";
import Data from './data.json'
import { QuizStart } from './QuizPart/QuizStart';
import { Questions } from "./QuizPart/Questions";
import { Overview } from "./QuizPart/Overview";
import Axios from "axios";


export const Quiz = () => {
  const { qId } = useParams();
  const [questions, setQuestions] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(false)
  const [points, setPoints] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [categoryName, setCategoryName] = useState(false)

  const filterId = (qId) => {
    let result
    Data.forEach(element => {
      if (element.subcategory) {
        result = (element.subcategory.find(({ id }) => id === Number(qId)))
        if (result && (result.name !== categoryName)) setCategoryName(result.name)
      }
    });
  }
  if (qId === 'community' && categoryName!=='Community') setCategoryName('Community')
  else if (qId === '0' && categoryName!=='Random') setCategoryName('Random')
  else filterId(qId)
  
  useEffect(() => {
    if (categoryName==='Community') fetchCommunityQuestions()
    else fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    await Axios.get(`https://opentdb.com/api.php?amount=10&category=${qId}`)
      .then((response) => setQuestions(response.data.results))
      .catch((error) => console.log(error));
  };

  const fetchCommunityQuestions = async () => {
    await Axios.get('https://inquizable.herokuapp.com/questions')
      .then((response) => setQuestions(response.data))
      .catch((error) => console.log(error));
  };


  return (
    <div>
      {questions && questionIndex===10 ? <Overview points={points} correct={correct}/>
      : questions && (questionIndex || questionIndex===0) ? <Questions correct={correct} setCorrect={setCorrect} points={points} setPoints={setPoints} question={questions[questionIndex]} questionIndex={questionIndex} setQuestionIndex={setQuestionIndex}/> :
      <QuizStart categoryName={categoryName} setQuestionIndex={setQuestionIndex} />}
    </div>
  );
};
  /*const [timer, setTimer] = useState(5);

  const id =useRef(null);
  const clear=()=>{
  window.clearInterval(id.current)
}
useEffect(()=>{
  handleStart();
},[])

const handleStart = () => {
  const handleStart = () =>{
    id.current=window.setInterval(()=>{
     setTimer((time)=>time-1)
   },1000)
   return ()=>clear();
}

useEffect(()=>{
  if(timer===0){
    clear()
  }

},[timer])

*/