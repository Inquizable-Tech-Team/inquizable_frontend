import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ChatRoom.css";
import useChat from "./useChat";
import ChatMessage from "./ChatMessage";
import useTyping from "./useTyping";
import NewMessageForm from "./NewMessageForm";
import TypingMessage from "./TypingMessage";
import Users from "./Users";
const ChatRoom = () => {
 
  
    const { roomId } = useParams();
  const {
    messages,
    user,
    users,
    typingUsers,
    sendMessage,
     startTypingMessage,
     stopTypingMessage,
     

  } = useChat(roomId);
  
  const [newMessage, setNewMessage] = useState("");

  const { isTyping, startTyping, stopTyping, cancelTyping } = useTyping();

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    cancelTyping();
    sendMessage(newMessage);
    setNewMessage("");
  };


   useEffect(() => {
   
     if (isTyping) startTypingMessage();
     else stopTypingMessage();// eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isTyping]);

   

  return (
    <>
    <div className="chat-room-container">
      <div className="chat-room-top-bar">
        <h1 className="room-name">Welcome to Chat: {roomId}</h1>
      </div>
      <Users users={users}></Users>
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li key={i}>
              <ChatMessage message={message}></ChatMessage>
            </li>
          ))}
          {typingUsers.map((user, i) => (
            <li key={messages.length + i}>
               <TypingMessage user={user}></TypingMessage> 
            </li>
          ))}
        </ol>
      </div>
      <NewMessageForm
        newMessage={newMessage}
        handleNewMessageChange={handleNewMessageChange}
         handleStartTyping={startTyping}
        handleStopTyping={stopTyping}
        handleSendMessage={handleSendMessage}
      ></NewMessageForm>
    </div>
    </>
  );
};

export default ChatRoom;