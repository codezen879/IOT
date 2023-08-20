import React, { useState } from 'react';
import './txte.css'; // Import the CSS file for styling

function MessageInput() {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any actions with the message here, like sending it to a server.
    console.log('Message submitted:', message);
  };

  return (
    <div className="message-input">
      <h2>Message Input</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your message:
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Type your message here"
            className="message-input__field"
          />
        </label>
        <button type="submit" className="message-input__button">Submit</button>
      </form>
    </div>
  );
}

export default MessageInput;
