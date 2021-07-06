import React from "react";
import TypingAnimation from "./TypingAnimation";

import "./TypingMessage.css";

const TypingMessage = ({ user }) => {
  return (
    <div className="message-item">
       <div className="message-avatar-container">
       <h6 >{user.name}</h6>
         {/* <img
          src="https://cdn.pixabay.com/photo/2017/06/10/07/21/chat-2389223_960_720.png"
          alt={user.name}
          className={"message-avatar"}
        ></img>  */}
        
      </div> 

      <TypingAnimation></TypingAnimation>
    </div>
  );
};

export default TypingMessage;