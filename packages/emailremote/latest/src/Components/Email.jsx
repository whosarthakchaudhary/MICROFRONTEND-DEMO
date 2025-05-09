import React, { useState } from 'react';
import './Button.css';

const Email = () => {
  const [email, setEmail] = useState('');
  const [emailList, setEmailList] = useState([]);

  const handleAddEmail = () => {
    if (email.trim() !== '' && validateEmail(email)) {
      setEmailList([...emailList, email]);
      setEmail(''); // Clear the input field after submission
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email here..."
        className="shared-btn"
      />
      <button onClick={handleAddEmail} className="shared-btn">
        Submit
      </button>
      <div className="output-area">
        <h3>Email List:</h3>
        <ul>
          {emailList.map((email, index) => (
            <li key={index}>{email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Email;