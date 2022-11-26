import React from 'react'
import "../App.css";
import "../index.css";
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 flex navbar">
      <div className="h-20 px-8 navbar-header">
        <p className="text-white font-bold">College Result Login App</p>
      
      
      <button 
              className='logout-btn'
              onClick={() => navigate("/")}
              >
              Log Out</button>
    </div>
    </div>
  );
}

export default Navigation
