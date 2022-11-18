import axios from "axios";
//This API is from our spring Boot REST API
const   studentResult_API_BASE_URL= "http://localhost:8080/api/v3/students";

class StudentResultService {

  saveStudentResult(studentResult) {
     return axios.post(studentResult_API_BASE_URL, studentResult);
  }

  getStudentResult() {
    return axios.get(studentResult_API_BASE_URL);
  }

  deleteStudentResult(id) {
    return axios.delete(studentResult_API_BASE_URL + "/" + id);
  }

  getStudentResultById(id) {
    return axios.get(studentResult_API_BASE_URL + "/" + id);
  }

  updateStudentResult(id, studentResult) {
    return axios.put(studentResult_API_BASE_URL + "/" + id, studentResult);
  }

}

export default  new StudentResultService();