import React, { Fragment } from 'react'
import { useHistory } from "react-router-dom";

export const QuizStart = ({ categoryName, setQuestionIndex }) => {
  let history = useHistory();

  return (
    <Fragment>
      <div className="xs:mt-6 xs:mr-12 sm:mt-2 sm:text-center md:text-center md:mt-12 text-sx text-sm text-base text-lg text-xl text-center sm:text-center">
        Selected Category:
      </div>
      <div className="selCat xs:mt-12 sm:mt-6 md:mt-8 lg:mt-8 xs:text-center sm:text-center md:text-center mx-auto mt-3 pt-6 border-rounded md:w-1/2 sm:w-full xs:w-full">
        {categoryName && <h1>{categoryName}</h1>}
      </div>
      <div className="sm:block md:flex justify-center mt-4 mb-16">
        <div className="flex-row ">
          <div>
          <button className="block xs:ml-4 xs:w-3/4 border-2 xs:mt-4 xs:text-center red md:w-80 lg:w-80" onClick={() => setQuestionIndex(0)}>
            Start Game
          </button>
          </div>
          <div>
          <button className="ml-6 xs:ml-4 xs:w-3/4 mt-4 border-2 xs:text-center green md:w-80 lg:w-80" onClick={() => alert('Coming Soon...')}>
            Invite Friends
          </button>
          </div>
        </div>
        <div className="flex-row xs:ml-2">
          <button className="border-2 xs:ml-2 xs:mt-4 xs:text-center btnBack w-40" onClick={() => history.push('/categories')}>
            Go Back
          </button>
        </div>
      </div>
    </Fragment>
  )
}
