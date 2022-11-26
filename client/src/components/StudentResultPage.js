import React from 'react';
import { useNavigate } from 'react-router-dom'
import '../index.css';
import '../App.css'

const StudentResultPage = ({studentRes, deleteStudentResult}) => {

  const navigate = useNavigate(); 

  const editStudentResult = (e, id) => {
    e.preventDefault();
    navigate(`/editStudentResult/${id}`);
  }

  return (
    <tr key={studentRes.id}>
                <td>{studentRes.firstname}</td>
                <td>{studentRes.lastname}</td>
                <td>{studentRes.course}</td>
                <td>{studentRes.result}</td>
                <td>{studentRes.grade}</td>
                <td>{studentRes.email}</td>
                <td className="todo-data">
                  <span className="span-edit"
                    onClick = {(e,id) =>  editStudentResult(e,studentRes.id)}
                    >
                    Edit</span>
                  <span 
                    className="span-delete" 
                    onClick={(e,id) => deleteStudentResult(e,studentRes.id)}>
                    Delete</span>
                </td>
             </tr> 
  )
}

export default StudentResultPage