import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./QuizPart/Quiz.css";
import Data from './data.json'
import { QuizStart } from './QuizPart/QuizStart';
import { Questions } from "./QuizPart/Questions";
import { Overview } from "./QuizPart/Overview";
import Axios from "axios";


/* function findById(o, id) {
  let result, p; 
  for (p in o) {
      if( o.hasOwnProperty(p) && typeof o[p] === 'object' ) {
          result = findById(o[p], id);
          if(result){
              return result;
          }
      }
  }
  return result;
} */



export const Quiz = () => {
  const { qId } = useParams();
  const [questions, setQuestions] = useState();
  const [questionIndex, setQuestionIndex] = useState(false)
  const [score, setScore] = useState(0);
  const [categoryName, setCategoryName] = useState(false)

  const filterId = (qId) => {
    let result
    Data.forEach(element => {
      if (element.subcategory) {
        result = (element.subcategory.find(({ id }) => id === Number(qId)))
        if (result && (result.name != categoryName)) setCategoryName(result.name)
      }
    });
  }
  if (qId === 'community' && categoryName!=='Community') setCategoryName('Community')
  else if (qId === '0' && categoryName!=='Random') setCategoryName('Random')
  else filterId(qId)
  
  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    await Axios.get(`https://opentdb.com/api.php?amount=10&category=${qId}&type=multiple`)
      .then((response) => setQuestions(response.data.results))
      .catch((error) => console.log(error));
  };


  return (
    <div>
      {questionIndex===10 ? <Overview />
      : questionIndex || questionIndex===0 ? <Questions question={questions[questionIndex]} questionIndex={questionIndex} setQuestionIndex={setQuestionIndex}/> :
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