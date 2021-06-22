import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./Admin.css";
export const Admin = () => {
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
                <div className="InsideUser">
                  <p>User name</p>
                  <p>user Id</p>
                  <p>User Email</p>
                  <p>User Score</p>
                  <a>Edit User</a>
                  <a>Delete User</a>
                </div>
              </TabPanel>
              <TabPanel>
                <h1>Questions</h1>
                <div className="InsideQuestion">
                  <p>Question : </p>
                  <p>Answers :</p>
                  <p>Edit :</p>
                  <p>Remove :</p>
                </div>
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