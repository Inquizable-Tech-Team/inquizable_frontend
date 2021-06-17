import { useHistory } from "react-router-dom";
import './Overview.css';

export const Overview = () => {
    let history = useHistory();
    return (
        <div>
        <div className="Scoreboard mx-auto xs:text-center sm:text-center md:text-center mt-6">
           <h1 className="mt-3">Hello, User!</h1>
           <div className="points">
               <div className="awarded text-left pl-2">
                   <h3>Awarded Points: 300</h3>
               </div>
               <div className="total text-left pl-2">
                   <h3>Total Points: 4456</h3>
               </div>
               </div>

            <div className="points">
               <div className="awarded text-left pl-2">
                   <h3>Correct Answers: 6</h3>
               </div>
               <div className="total text-left pl-2">
                   <h3>Overall: 60%</h3>
                </div>
           </div>
        </div>
        <div className="points">
               <div className="awarded text-center red pl-2 pt-2 pb-2 pr-2" onClick={() => history.push('/categories')}>
                   <button>Start New Game</button>
               </div>
               <div className="total text-center pl-2 pt-2 pb-2 pr-2">
                   <button>Leaderboard</button>
                </div>
           </div>

        </div>
    )
}
