import React from "react";
import "./Users.css";
const Users = ({ users }) => {
  return users.length > 0 ? (
    
    <div className="msg">    
      <h2>Online:</h2>
      <ul className="user-list">
        {users.map((user, index) => (
          <li key={index} className="user-box">
            <span>{user.name}</span>
          </li>
        ))} 
      </ul>
    </div>
   ) : (
     <div className="msg">There is no one else Online</div>
  ); 
};

export default Users;