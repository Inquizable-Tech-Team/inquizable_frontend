import React, {useState, useEffect, Fragment, useContext} from "react";
import "./Leaderboard.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Points from "./LeaderPart/Points";
import Contribution from "./LeaderPart/Contribution";
import Percentage from "./LeaderPart/Percentage";
import { fetchUser } from "../Controller";
import Navbar from "./Navbar";
import { UserContext } from "../context/UserContext";
import PopupBtn from './Chat/popupBtn'

export const Leaderboard = () => {
  const [user] = useContext(UserContext)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    fetchUser(user.id).then(res => {
      setUserData(res);
    })// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <Fragment>
    <Tabs>
      <TabList className="flex border-b-2">
        <Tab>Overall Points</Tab>
        <Tab>Overall Percentage</Tab>
        <Tab>Most Contribution</Tab>
      </TabList>
      <Navbar />
      <TabPanel>
        <Points user={userData} />
      </TabPanel>
      <TabPanel>
        <Percentage user={userData} />
      </TabPanel>
      <TabPanel>
        <Contribution user={userData} />
      </TabPanel>
    </Tabs>
    
    </Fragment>
    
  );
};
