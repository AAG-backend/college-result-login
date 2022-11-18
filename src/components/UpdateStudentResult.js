
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import StudentResultService from '../services/StudentResultService';

function UpdateStudentResult() {

  const { id } = useParams(); //Whatever id we pass we need that value

  const navigate = useNavigate();

  const [studentResult, setStudentResult] = useState({
    //When the data is being rendered we will get the data for the following particular id
    //That is going to be obtained from the parameter to update our state
    id: id, // We will get the id when our page is loaded
    firstname: "",
    lastname: "",
    course: "",
    result: "",
    grade: "",
    email: ""
})

const handleChange = (e) => {
  const value = e.target.value; 
  setStudentResult({...studentResult, [e.target.name]: value}); 
}
// We use useEffect to re-render our updated data/ component
useEffect ( () => {
  const fetchData = async () => {
    try{
      const response = await StudentResultService.getStudentResultById(id);
      //then we will update our database as well via state
      setStudentResult(response.data);
    } catch(error){
      console.log(error);
    }
  };
  fetchData();
}, [])

//Update our datalist
const updateStudentResult = (e) => {
  e.preventDefault();
  StudentResultService.updateStudentResult(id, studentResult)
    .then((response) => {
      navigate("/studentResultList");
    }).catch((error) => {
      console.log(error);
    });
}

  return (
    <div className="add-result-table">
    <div className="result-table-row">
      <div className="result-table-row">
          <h1>Update Student Results</h1>
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
            onClick={updateStudentResult}
            className="button-save">
            Update
            </button>
          <button 
              className="button-clean"
              onClick={() => navigate("/studentResultList")}
              >
              Cancle</button>
      </div>
    </div>
  </div>
  )
}

export default UpdateStudentResult