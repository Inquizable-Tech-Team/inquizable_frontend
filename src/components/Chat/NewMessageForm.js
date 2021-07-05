import React, { useState } from 'react'
import "./NewMessageForm.css";
import Picker from 'emoji-picker-react';
import Emojis from "./emojis";


const NewMessageForm = ({
  newMessage,
  handleNewMessageChange,
  handleStartTyping,
  handleStopTyping,
  handleSendMessage,


}) => {

  
  return (
    <>
      <div className='emoBtn' id='emoji-btn'>
        <button className='btn' >
          <svg xmlns="http://www.w3.org/2000/svg"className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
          </svg>
        
        </button>
        
        <form className="new-message-form">

          <input
            
            type="text"
            value={newMessage}
            onChange={handleNewMessageChange}
            placeholder="Type Here"
            className="new-message-input-field"
            onKeyPress={handleStartTyping}
            onKeyUp={handleStopTyping}
          />
          <input type='emojis' >

          </input>
          <button
            type="submit"
            onClick={handleSendMessage}
            className="send-message-button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 plane" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default NewMessageForm;