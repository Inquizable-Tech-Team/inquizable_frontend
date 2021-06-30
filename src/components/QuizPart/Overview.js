import React, {Fragment, useState, useEffect, useContext} from 'react'
import { useHistory } from "react-router-dom";
import './Overview.css';
import {updatePointsFunction, fetchUser} from '../../Controller'
import { UserContext } from '../../context/UserContext';

export const Overview = ({points, correct }) => {
    const [user] = useContext(UserContext)
    const [userData, setUserData] = useState(false)
    let history = useHistory();
    const queryString = require('query-string');

    useEffect(() => {
        fetchUser(user.id).then(res => {
            setUserData(res);
          })// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
       if(userData) {
           updatePoints()
        }// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userData])

    const updatePoints = () => {
        const info = queryString.stringify({
            points: userData.points+points,
            answered: userData.answered+10,
            correct: userData.correct+correct
            
          })
          updatePointsFunction(user.id, info).then(res => {
            if (res) {
              console.log(res)
            }
            else console.log('Oops, something went wrong...')
          })
    }

    return (
        <Fragment>
        <div className="Scoreboard xs:block xs:h-45 mx-auto xs:text-center sm:text-center md:text-center mt-6">
           <h1 className="mt-3">Great job, {user.nickname}!</h1>
           <div className="points xs:block xs:w-full xs:block md:flex lg:flex">
               <div className="awarded text-left pl-2 pt-1 xs:w-3/4 xs:mx-auto md:w-2/5 lg:w-2/5">
                   <h3>Awarded Points: {points}</h3>
               </div>
               <div className="total text-left pl-2 xs:w-3/4 xs:mx-auto md:w-2/5 lg:w-2/5 xs:mt-2 xs:block md:flex">
                   <h3>Total Points: {userData ? userData.points+points : user.points+points}</h3>
               </div>
               </div>

            <div className="points xs:block md:flex lg:flex">
               <div className="awarded text-left pl-2 xs:w-3/4 md:w-2/5 lg:w-2/5  xs:mx-auto xs:block md:flex">
                   <h3>Correct Answers: {correct}</h3>
               </div>
               <div className="total text-left pl-2 xs:w-3/4 md:w-2/5 lg:w-2/5 xs:mx-auto xs:mt-2 xs:block md:flex">
                   <h3>Overall: {userData ? Math.round((userData.correct+correct)*1000/(userData.answered+10))/10 : Math.round(user.correct*1000/user.answered)/10}%</h3>
                </div>
           </div>
        </div>
        <div className="points mb-12 xs:block md:flex lg:flex">
               <div className="awarded effectBtn  h-10 text-center red pl-2 pt-2 pb-2 pr-2 xs:mt-2 cursor-pointer xs:w-3/4 md:w-2/5 xs:mx-auto" onClick={() => history.push('/categories')}>
                   <button>Start New Game</button>
               </div>
               <div className="total h-10 text-center pl-2 pt-2 pb-2 pr-2 cursor-pointer xs:w-3/4 md:w-2/5 xs:mt-2 xs:mx-auto" onClick={() => history.push('/leaderboard')}>
                   <button>Leaderboard</button>
                </div>
           </div>

        </Fragment>
    )
}
