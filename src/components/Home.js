import React, {useState, useEffect} from 'react';
import './Home.css';
import Axios from 'axios';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';


const User_DB = process.env.USERS;


export const Home = () => {
    useEffect(() => {
        fetchUsersData();
      }, []);
    
      const fetchUsersData = async () => {
        await Axios.get(User_DB)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
      };



    return (
        <div>
            <div className="xs:text-center sm:text-left bg-color">
            <h2 className="home-title">A fun learning platform where anyone can contribute</h2>
            </div>
            
            
        </div>
    )
}
