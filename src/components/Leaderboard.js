import React, {useState, useEffect} from "react";
import "./Leaderboard.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Points from "./LeaderPart/Points";
import Contribution from "./LeaderPart/Contribution";
import Percentage from "./LeaderPart/Percentage";
import { fetchUser } from "./Controller";


export const Leaderboard = ({user}) => {
  const [userData, setUserData] = useState({})

  useEffect(() => {
    fetchUser(user.id).then(res => {
      setUserData(res);
    })
  }, []);

  return (
    <Tabs>
      <TabList className="flex border-b-2">
        <Tab>Overall Points</Tab>
        <Tab>Overall Percentage</Tab>
        <Tab>Most Contribution</Tab>
      </TabList>

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
  );
};
