import React, {Fragment, useEffect, useState } from "react";
import "./About.css";
import { fetchAllUsers, fetchQuestionAmount, fetchAnswered, fetchCorrect } from "../Controller";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import Teams from './Teams'
import Stack from './Stack/Stack'

const About = () => {
  const [users, setUsers] = useState()
  const [questions, setQuestions] = useState()
  const [answered, setAnswered] = useState()
  const [correct, setCorrect] = useState()

  let location = useLocation();

  useEffect(() => {
    if (!users) {
      fetchAllUsers().then(res => {
      setUsers(res.count)
    });
    }
    if (!questions) {
      fetchQuestionAmount().then(res => {
      setQuestions(res.count)
    });
    }
    if (!answered) {
      fetchAnswered().then(res => {
      setAnswered(res.sum)
    });
    }
    if (!correct) {
      fetchCorrect().then(res => {
      setCorrect(res.sum)
    });
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      {location.pathname.toLowerCase()==='/about' && <Navbar />}
      <div className={"aboutMain"}>
        <div className={"aboutLeft"}>
          <div className={"aboutContainer"}>
            <div className={"aboutLeftInside"}>
              <div className={"aboutLeftInsideTitle"}>
                <p>COOL STATISTICS</p>
              </div>
              <div className={"aboutLeftInsideBigTitle"}>
                <h1>We are proud of our Inquizers and Community</h1>
              </div>
              <div className={"aboutLeftInsideParagraph"}>
                <p>
                  Below are some real-time stats from our Website. Our community
                  is growing from day to day. Join now, have fun doing quizzes and start collecting points.
                </p>
              </div>
              <div className={"aboutLeftInsideSplit"}>
                <div className={"aboutSplit"}>
                  <div className={"aboutSplitLeft"}>
                    <h1>{users && users}</h1>
                    <p>
                      <span>Inquizers</span> that already registered.
                    </p>
                  </div>
                  <div className={"aboutSplitRight"}>
                    <h1>{questions && <>{Number(questions) + 4050}</>}</h1>
                    <p>
                      <span>Questions</span> in the Database.
                    </p>
                  </div>
                </div>
              </div>
              <div className={"aboutLeftInsideSplit"}>
                <div className={"aboutSplit"}>
                  <div className={"aboutSplitLeft"}>
                    <h1>{answered && answered}</h1>
                    <p>
                      <span>Answered</span> Questions.
                    </p>
                  </div>
                  <div className={"aboutSplitRight"}>
                    <h1>{correct && answered && <>{Math.round((correct)*1000/(answered))/10}% </>}</h1>
                    <p>
                      <span>Correctly</span> answered Questions by all Inquizers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"aboutRight"}></div>
      </div>
      {location.pathname.toLowerCase()==='/about' && <Teams />}
      {location.pathname.toLowerCase()==='/about' && <Stack />}
    </Fragment>
  );
};
export default About;
