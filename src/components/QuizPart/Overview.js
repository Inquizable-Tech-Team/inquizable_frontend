import React, {Fragment, useState, useEffect, useContext} from 'react'
import { useHistory } from "react-router-dom";
import './Overview.css';
import Axios from 'axios'
import {updatePointsFunction} from '../Controller'
import { UserContext } from '../../context/UserContext';

export const Overview = ({points, correct }) => {
    const [user] = useContext(UserContext)
    const [userData, setUserData] = useState(false)
    let history = useHistory();
    const queryString = require('query-string');

    useEffect(() => {
        fetchUserData()
    }, [])

    useEffect(() => {
        updatePoints()
    }, [userData])

    const updatePoints = () => {
        const info = queryString.stringify({
            points: userData.points+points,
            answered: userData.answered+10,
            correct: userData.correct+correct
            
          })
          updatePointsFunction(userData.id, info).then(res => {
            if (res) {
              console.log(res)
            }
            else console.log('Oops, something went wrong...')
          })
    }

    const fetchUserData = async () => {
        await Axios.get(`https://inquizable.herokuapp.com/users/${user.id}`)
          .then((response) => setUserData(response.data[0]))
          .catch((error) => console.log(error));
      };

    return (
        <Fragment>
        <div className="Scoreboard mx-auto xs:text-center sm:text-center md:text-center mt-6">
           <h1 className="mt-3">Great job, {user.nickname}!</h1>
           <div className="points">
               <div className="awarded text-left pl-2">
                   <h3>Awarded Points: {points}</h3>
               </div>
               <div className="total text-left pl-2">
                   <h3>Total Points: {userData.points ? userData.points+points : user.points+points}</h3>
               </div>
               </div>

            <div className="points">
               <div className="awarded text-left pl-2">
                   <h3>Correct Answers: {correct}</h3>
               </div>
               <div className="total text-left pl-2">
                   <h3>Overall: {userData.correct ? Math.round((userData.correct+correct)*1000/(userData.answered+10))/10 : Math.round(user.correct*1000/user.answered)/10}%</h3>
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
