import React from 'react'
import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddStudentResult from './components/AddStudentResult';
import Navigation from './components/Navigation';
// import StudentResultList from './components/StudentResultList';
import UpdateStudentResult from './components/UpdateStudentResult';
import Login from './components/Login'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
          <Route path="/" element={<Login />} />
          { <Route path="/home" element={ <Home />} /> }
          {/* <Route index element={ <StudentResultList />} /> */}
          {/* <Route path="/" element={ <StudentResultList />} /> */}
          {/* <Route path="/studentResultList" element={<StudentResultList />} /> */}
          <Route path="/addStudentResult" element={ <AddStudentResult />} />
          <Route path="/editStudentResult/:id" element={ <UpdateStudentResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
