import React, { useEffect, useState, Fragment } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Axios from "axios";
import "./Admin.css";

export const Admin = () => {
  const [questions, setQuestions] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchQuestions();
    fetchUsers();
  }, []);

  const fetchQuestions = async () => {
    await Axios.get("https://inquizable.herokuapp.com/questions/all")
      .then((response) => setQuestions(response.data))
      .catch((error) => console.log(error));
  };
  const fetchUsers = async () => {
    await Axios.get("https://inquizable.herokuapp.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <Tabs>
      <div className="Admin">
        <div className="AdminLeft">
          <div className="InsideLeft">
            <TabList>
              <div className="LinksInside">
                <Tab
                  style={{
                    outline: "none",
                    border: "none",
                    textDecoration: "none",
                  }}
                >
                  Users
                </Tab>
                <Tab
                  style={{
                    outline: "none",
                    border: "none",
                    textDecoration: "none",
                  }}
                >
                  Questions
                </Tab>
              </div>
            </TabList>
          </div>
        </div>
        <div className="AdminRight">
          <div className="InsideRight">
            <div className="AdminContainer">
              <TabPanel>
                <h1>List of All users</h1>
                {users.map((u) => {
                  return (
                    <Fragment>
                      <div className="InsideUser">
                        <p>
                          <b>User name: </b> <small>{u.nickname}</small>
                        </p>
                        <p>
                          <b>user Id: </b> <small>{u.id}</small>
                        </p>
                        <p>
                          <b>User Email: </b> <small>{u.email}</small>
                        </p>
                        <p>
                          <b>User Points: </b> <small>{u.points}</small>
                        </p>
                        <div>
                          <button className="BTN">Delete User</button>
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </TabPanel>
              <TabPanel>
                <h1>Questions</h1>
                {questions.map((q) => {
                  return (
                    <Fragment>
                      <div className="InsideQuestion">
                        <p>
                          <b>Question:</b> <small>{q.question}</small>
                        </p>
                        <p>
                          <b>Type:</b> <small>{q.type}</small>
                        </p>
                        <p>
                          <b>Difficulty:</b> <small>{q.difficulty}</small>
                        </p>
                        <p>
                          <b>Answer:</b> <small> {q.correct_answer}</small>
                        </p>
                        <p>
                          <b>Wrong Answers:</b> {q.incorrect_answers[0]}{" "}
                          {q.incorrect_answers[1] && (
                            <Fragment>
                              | {q.incorrect_answers[1]} |{" "}
                              {q.incorrect_answers[2]}
                            </Fragment>
                          )}
                        </p>
                        <p>
                          <b>From user ID:</b> <small>{q.users_id} </small>
                        </p>
                        <p>
                          <b>Approved:</b> <small> {q.approved}</small>
                        </p>
                        <div>
                          <button className="BTN">Edit</button>
                        </div>
                        <div>
                          <button className="BTN">Remove</button>
                        </div>
                        <div>
                          <button className="BTN">Approve</button>
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
      <div className="FULLSCREEN">
        <h1>YOU NEED TO ACCESS THIS VIA COMPUTER</h1>
      </div>
    </Tabs>
  );
};
