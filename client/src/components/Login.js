import React, { useState } from "react";
import axios from "axios";
import { Form, FormInput, FormGroup, Button } from "shards-react";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(response => {
        localStorage.setItem("token", response.data.payload);
        props.history.push("/protected");
      })
      .catch(error => console.log("Error:", error.response.data.error));
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <Form>
        <FormGroup>
          <label htmlFor="#username">Username</label>
          <FormInput
            type="text"
            name="username"
            id="#username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="#password">Password</label>
          <FormInput
            type="password"
            name="password"
            id="#password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={login}>Login</Button>
      </Form>
    </>
  );
};
export default Login;
