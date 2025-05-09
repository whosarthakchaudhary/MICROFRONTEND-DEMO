import React, { useState } from 'react';
import './Button.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setChatHistory([...chatHistory, message]);
      setMessage(''); // Clear the text area after sending the message
    }
  };

  return (
    <div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
        rows="4"
        cols="50"
        className="shared-btn"
      />
      <button onClick={handleSendMessage} className="shared-btn">
        Send
      </button>
      <div className="output-area">
        <h3>Chat History:</h3>
        <ul>
          {chatHistory.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chat;