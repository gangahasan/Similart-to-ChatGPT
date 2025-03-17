import React,{useState} from 'react'
import "../styles/chatpage.css"
import { useNavigate } from 'react-router-dom';

const ChatPage = () => {
    const[messages,setMessages] = useState(["Hello! How can I help you today?"]);
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleSend = () => {
      if (input.trim() === "") return; 

      const userMessage =  input ;
      setMessages((prev) => [...prev, userMessage]); 

      setInput("");
      setTimeout(() => {
        const reply =  "Hello! How can I help you today?";
        setMessages((prev) => [...prev, reply]);
      }, 1000);
    };
    const handleLogout=()=>{
        alert("Would you like to logout!")
        localStorage.removeItem("user");
        navigate("/")
    }
  return (
    <div className="chatpage">
      <div className="header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/ChatGPT-Logo.png/1200px-ChatGPT-Logo.png?20230814075517"
          alt="logo"
          width="80px"
          height="50px"
        />
        <button onClick={handleLogout}>Logout</button>
      </div>

      {/* User Messages */}
      <div className="body">
          {messages.map((msg, index) => (
            <h2 key={index}>
              {msg}
            </h2>
          ))}
      </div>
      {/* Footer for enter the message and send button */}
      <div className="footer">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>send</button>
      </div>
    </div>
  );
}

export default ChatPage