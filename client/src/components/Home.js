import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import StudentResultService from '../services/StudentResultService';
import StudentResultPage from './StudentResultPage';
import '../App.css';

function Home() {
  const navigate = useNavigate(); 
  const [ loading, setLoadoing] = useState(true)
  const [ studentResult, setStudentResult] = useState(null);
 
  useEffect(() => {
      const fetchData = async () => {
        setLoadoing(true);
        try{
          const response = await StudentResultService.getStudentResult();
          setStudentResult(response.data);

        } catch(error){
            console.log(error)
        }
        setLoadoing(false)
      } 
      fetchData();
  }, []);

  const deleteStudentResult = (e, id) => {
    e.preventDefault();
    StudentResultService.deleteStudentResult(id).then((response) => {
      if(studentResult){
        setStudentResult((prevElemnet) => {
          return prevElemnet.filter((studentRes) => studentRes.id !== id)
        });
      }
    });
  };

  return (
    <div className="container">
    <div className="add-btn-list">
      <button 
        onClick={() => navigate("/addStudentResult")}
        className="button-addlist">Add Student Result</button>
    </div>
  
    <Table striped bordered hover variant="dark" fontSize="12px" width="800px">
      <thead className="thead">
        <tr className="table-row">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Course Name</th>
            <th>Result</th>
            <th>Grade</th>
            <th>Email</th>
            <th className="table-header-todo">ToDo</th>
        </tr>
      </thead>
      {!loading && (
        <tbody>
            {studentResult.map((studentRes) => (
             < StudentResultPage studentRes={studentRes} deleteStudentResult={deleteStudentResult} key={studentRes.id}/>
            ))}
        </tbody>
        )}  
    </Table>
    </div>
  )
}

export default Home