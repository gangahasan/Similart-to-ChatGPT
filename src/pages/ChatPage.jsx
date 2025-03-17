import React from 'react'
import "../styles/chatpage.css"

const ChatPage = () => {
  return (
    <div className='chatpage'>
      <div className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/ChatGPT-Logo.png/1200px-ChatGPT-Logo.png?20230814075517"
          alt="logo"
          width="80px"
          height="50px"
        />
        <button>Logout</button>
      </div>
      <div>
        Body
      </div>
      <div className='footer'>
        <textarea />
        <button>send</button>
      </div>
    </div>
  );
}

export default ChatPage