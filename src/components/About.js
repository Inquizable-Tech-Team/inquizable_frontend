import React, {Fragment, useEffect, useState, useContext} from "react";
import "./About.css";
import { fetchAllUsers, fetchQuestionAmount, fetchAnswered, fetchCorrect } from "./Controller";
import Navbar from "./Navbar";
import { UserContext } from "../context/UserContext";

const About = () => {
  const [user] = useContext(UserContext)
  const [users, setUsers] = useState()
  const [questions, setQuestions] = useState()
  const [answered, setAnswered] = useState()
  const [correct, setCorrect] = useState()



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
    }
  }, [])

  return (
    <Fragment>
      {user && <Navbar />}
      <div className={"aboutMain"}>
        <div className={"aboutLeft"}>
          <div className={"aboutContainer"}>
            <div className={"aboutLeftInside"}>
              <div className={"aboutLeftInsideTitle"}>
                <p>VALUABLE METRICS</p>
              </div>
              <div className={"aboutLeftInsideBigTitle"}>
                <h1>Get actionable data that will help grow your business</h1>
              </div>
              <div className={"aboutLeftInsideParagraph"}>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here', making it look like readable English.
                </p>
              </div>
              <div className={"aboutLeftInsideSplit"}>
                <div className={"aboutSplit"}>
                  <div className={"aboutSplitLeft"}>
                    <h1>{users}</h1>
                    <p>
                      <span>Users</span> that already registered.
                    </p>
                  </div>
                  <div className={"aboutSplitRight"}>
                    <h1>{Number(questions) + 4050}</h1>
                    <p>
                      <span>Questions</span> in the Database.
                    </p>
                  </div>
                </div>
              </div>
              <div className={"aboutLeftInsideSplit"}>
                <div className={"aboutSplit"}>
                  <div className={"aboutSplitLeft"}>
                    <h1>{answered}</h1>
                    <p>
                      <span>Answered</span> Questions.
                    </p>
                  </div>
                  <div className={"aboutSplitRight"}>
                    <h1>{Math.round((correct)*1000/(answered))/10}%</h1>
                    <p>
                      <span>Correctly</span> answered Questions by all Users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"aboutRight"}></div>
      </div>
    </Fragment>
  );
};
export default About;
