import React from "react";
import "./Users.css";
const Users = ({ users }) => {
  console.log(users)
  return users.length > 0 ? (
    
    <div className="msg">    
      <h2>Also in this room:</h2>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index} className="user-box">
            <span>{user.name}</span>
          </li>
        ))} 
      </ul>
    </div>
   ) : (
     <div className="msg">There is no one else in this room</div>
  ); 
};

export default Users;