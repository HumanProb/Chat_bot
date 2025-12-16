import React from "react";
import Message from "./Message";

const ChatWindow = ({ history }) => {
  return (
    <div className="chat-window">
      {history.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
};

export default ChatWindow;
