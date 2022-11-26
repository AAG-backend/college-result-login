import React from 'react'
import "../App.css";
import "../index.css";
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 navbar">
      <div className="h-16 px-8 flex items-center navbar-header">
        <p className="text-white font-bold">College Result CRUD App</p>
      </div>
      <div>
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
