import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import "./QuizPart/Quiz.css";


export const Quiz = () => {
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
        Selected Name
      </div>
      <div className="sm:block md:flex justify-center mt-4">
        <div className="flex-row  mr-6">
          <button className="border-2 xs:ml-6 xs:mt-2 xs:text-center btnBack w-40">Go Back</button>
        </div>
        <div className="flex-row ">
        <Link to="./QuizPart/QuizStart"><button className="block ml-6 border-2 xs:mt-2 xs:text-center red w-80">
            Start Game
          </button> 
         </Link> 
          <button className="ml-6 mt-4 border-2 xs:text-center green w-80">Invite Friends</button>
        </div>
      </div>
      <div></div>
    </div>
  );
  }

