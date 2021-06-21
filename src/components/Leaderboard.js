import React from "react";
import './Leaderboard.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Points from './LeaderPart/Points';
import Contribution from './LeaderPart/Contribution';
import Percentage from './LeaderPart/Percentage';


export const Leaderboard = () => {
    return (
        <Tabs>
        <TabList className="flex border-b-2">
          <Tab>Overall Points</Tab>
          <Tab>Overall Percentage</Tab>
          <Tab>Most Contribution</Tab>
        </TabList>
    
        <TabPanel>
          <Points />
        </TabPanel>
        <TabPanel>
          <Contribution />
        </TabPanel>
        <TabPanel>
          <Percentage />
        </TabPanel>
      </Tabs>
    );
};
