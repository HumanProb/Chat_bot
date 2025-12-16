import React, { useState } from "react";

const InputBox = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSend(input);
      setInput("");
    }
  };

  return (
    <input
      type="text"
      className="input-box"
      placeholder="Type your message..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleKeyPress}
    />
  );
};

export default InputBox;
