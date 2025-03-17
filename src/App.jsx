import React from 'react'
import LoginPage from './pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'

const App = () => {
  const user = localStorage.getItem("user") || null;
  return (
    <div>
      
    <Routes>
        <Route path="/login" element={<LoginPage />}/>
        
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </div>
  )
}

export default App