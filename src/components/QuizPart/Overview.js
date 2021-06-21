import React, {Fragment} from 'react'
import { useHistory } from "react-router-dom";
import './Overview.css';

export const Overview = ({points, correct, user}) => {
    let history = useHistory();
    return (
        <Fragment>
        <div className="Scoreboard mx-auto xs:text-center sm:text-center md:text-center mt-6">
           <h1 className="mt-3">Great job, {user.nickname}!</h1>
           <div className="points">
               <div className="awarded text-left pl-2">
                   <h3>Awarded Points: {points}</h3>
               </div>
               <div className="total text-left pl-2">
                   <h3>Total Points: {user.points}</h3>
               </div>
               </div>

            <div className="points">
               <div className="awarded text-left pl-2">
                   <h3>Correct Answers: {correct}</h3>
               </div>
               <div className="total text-left pl-2">
                   <h3>Overall: {Math.round(user.correct*1000/user.answered)/10}%</h3>
                </div>
           </div>
        </div>
        <div className="points mb-12">
               <div className="awarded text-center red pl-2 pt-2 pb-2 pr-2 cursor-pointer" onClick={() => history.push('/categories')}>
                   <button>Start New Game</button>
               </div>
               <div className="total text-center pl-2 pt-2 pb-2 pr-2 cursor-pointer" onClick={() => history.push('/leaderboard')}>
                   <button>Leaderboard</button>
                </div>
           </div>

        </Fragment>
    )
}
