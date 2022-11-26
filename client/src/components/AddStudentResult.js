import React, { useState } from 'react'
import StudentResultService from '../services/StudentResultService';
import { useNavigate } from 'react-router-dom'

const AddStudentResult = () => {

 const [studentResult, setStudentResult] = useState({
      id: "",
      firstname: "",
      lastname: "",
      course: "",
      result: "",
      grade: "",
      email: ""
 })

 //We use useNavigate to redirect after saving the added data
  const navigate = useNavigate();

 //This is the value I'm getting so I need to set this for my state
  //so whenever the input is updated the state will be updated based on the value changed
  const handleChange = (e) => {
    const value = e.target.value; 
    setStudentResult({...studentResult, [e.target.name]: value}); 
  }

  const saveStudentResult = (e) => {
    //First I need to prevent page from being refreshed
    e.preventDefault();
    //Next to this I need to call the API using axios
    StudentResultService.saveStudentResult(studentResult)
      .then((response) => {
        console.log(response);
        //after saving the data we want to see the newly added Student Result in the List
        navigate("/home")
      }).catch((error) => {
        console.log(error);
      });
  }

  const handleClean = (e) => {
    e.preventDefault();
    //We want the AddStudentList to be clean when we click Clean button 
      // or it's changing the state to its initial state
    setStudentResult({
      id: "",
      firstname: "",
      lastname: "",
      course: "",
      result: "",
      grade: "",
      email: ""
    })
  }

  return (
    <div className="add-result-table">
      <div className="result-table-row">
        <div className="result-table-row">
            <h1>Register Student Results</h1>
        </div>
        <div className="result-data">
          <label className="label">First Name</label>
          <input className="input" 
            type="text" 
            name="firstname" 
            value={studentResult.firstname} 
            onChange={(e) => handleChange(e)}></input>
          <label className="label">Last Name</label>
          <input className="input" 
            type="text" name="lastname" 
            value={studentResult.lastname} 
            onChange={(e) => handleChange(e)}></input>
          <label className="label">Course Name</label>
          <input className="input" 
            type="text" 
            name="course" 
            value={studentResult.course} 
            onChange={(e) => handleChange(e)}></input>
          <label className="label">Result</label>
          <input className="input" 
            type="text" name="result" 
            value={studentResult.result} 
            onChange={(e) => handleChange(e)}></input>
          <label className="label">Grade</label>
          <input className="input" 
            type="text" name="grade" 
            value={studentResult.grade} 
            onChange={(e) => handleChange(e)}></input>
          <label className="label">Email</label>
          <input className="input" 
            type="text" name="email" 
            value={studentResult.email} 
            onChange={(e) => handleChange(e)}></input>
        </div>
        <div className="button">
            <button 
              onClick={saveStudentResult}
              className="button-save">
                Save
              </button>
            <button 
                className="button-clean"
                onClick={handleClean}
                >
                Clean</button>
              <button 
                className="button-cancel"
                onClick={() => navigate("/home")}
                >
              Cancle
              </button>
        </div>
      </div>
    </div>
  )
}

export default AddStudentResult