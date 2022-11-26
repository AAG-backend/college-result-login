import React, {useState} from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Card, Form } from 'react-bootstrap'


import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlelogin = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8383/api/auth/login", {
      email,
      password
    }).then((response) => {
      console.log("response", response);
      localStorage.setItem("login", JSON.stringify({
        userLogin: true,
        token: response.data.access_token
      }))
      setError("");
      setEmail("");
      setPassword("");
      navigate("/home");
    }).catch((err) => setError(err.response.data.message));

    }


  return (
    <>
      <Card>
      <Card.Body id="card-body">
          <h2 className="text-center mb-4">Login Page</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handlelogin}>
            <Form.Group id="user">
                <Form.Label className="form-label-email">User Name</Form.Label>
                <Form.Control 
                  autoComplete='off'
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
            </Form.Group>
            <Form.Group id="password">
                <Form.Label className="form-label-password">Password</Form.Label>
                <Form.Control 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
            </Form.Group>
            <Button className="w-100 signin-btn" type="submit">
              Sign In
            </Button>
          </Form>
      </Card.Body>
    </Card>
    </>
  )
}


export default Login