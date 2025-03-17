import React from 'react'
import LoginPage from './pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import ChatPage from './pages/ChatPage'

const App = () => {
  const user = localStorage.getItem("user") || null;
  return (
    <div>
      
    <Routes>
        <Route path="/" element={<LoginPage />}/>
        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chatpage" element={<ChatPage />} />
      </Routes>

    </div>
  )
}

export default App