import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./QuizPart/Quiz.css";
import Questions from "./QuizPart/Questions";
import Axios from "axios";


export const Quiz = () => {
 /* const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);


  useEffect(()=> {
    fetchQuestions();
  }, []) 

  const fetchQuestions = async (category = "", difficulty = "") => {
    await Axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    )
      .then((response) => setQuestions(response.data))
      .catch((error) => console.log(error));
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

  return (
    <div>
      <div className="sm:text-center md:text-center mt-4 text-sx text-sm text-base text-lg text-xl text-center sm:text-center">
        Selected Category:
      </div>
      <div className="selCat xs:text-center sm:text-center md:text-center mx-auto mt-3 pt-6 border-rounded md:w-1/2 sm:w-full xs:w-full">
      <h1>Selected Cat</h1>
      </div>
      <div className="xs:text-center sm:text-center md:text-center mx-auto mt-4">
        <input className="InpName pl-2" type="text" placeholder="Enter your Name"></input>
      </div>


      {/* Selection of difficulties starts here*
      <div className="selectDiff xs:text-center sm:textcenter md:text-center mt-10">
        <p>Select Difficulty:</p>
        <select className="startSelect mt-2" onChange={(e) => setDiff(e.target.value)} value={diff}>
        <option>Choose difficulty</option>
          <option key="easy" value="easy">Easy</option>
          <option key="medium" value="medium">Medium</option>
          <option key="hard" value="hard">Hard</option>
        </select>
      </div>
      */}

      <div className="sm:block md:flex justify-center mt-4">
        <div className="flex-row  mr-6">
          <button className="border-2 xs:ml-6 xs:mt-4 xs:text-center btnBack w-40">
            Go Back
          </button>
        </div>
        <div className="flex-row ">
          <Link
          to='./questions'
            className="block ml-6 border-2 xs:mt-4 xs:text-center red w-80"
          >
            Start Game
          </Link>
          <button className="ml-6 mt-4 border-2 xs:text-center green w-80">
            Invite Friends
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
