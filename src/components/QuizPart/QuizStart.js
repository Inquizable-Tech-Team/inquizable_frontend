import React, { Fragment } from 'react'
import { useHistory } from "react-router-dom";

export const QuizStart = ({ categoryName, setQuestionIndex }) => {
  let history = useHistory();

  return (
    <Fragment>
      <div className="sm:text-center md:text-center mt-4 text-sx text-sm text-base text-lg text-xl text-center sm:text-center">
        Selected Category:
      </div>
      <div className="selCat xs:text-center sm:text-center md:text-center mx-auto mt-3 pt-6 border-rounded md:w-1/2 sm:w-full xs:w-full">
        {categoryName && <h1>{categoryName}</h1>}
      </div>
      <div className="sm:block md:flex justify-center mt-4 mb-16">
        <div className="flex-row  mr-6">
          <button className="border-2 xs:ml-6 xs:mt-4 xs:text-center btnBack w-40" onClick={() => history.push('/categories')}>
            Go Back
          </button>
        </div>
        <div className="flex-row ">
          <button className="block ml-6 border-2 xs:mt-4 xs:text-center red w-80" onClick={() => setQuestionIndex(0)}>
            Start Game
          </button>
          <button className="ml-6 mt-4 border-2 xs:text-center green w-80" onClick={() => alert('Coming Soon...')}>
            Invite Friends
          </button>
        </div>
      </div>
    </Fragment>
  )
}
