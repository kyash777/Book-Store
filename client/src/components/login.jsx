import { Box, Button, FormLabel, Typography, styled } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const LoginPage = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #301934;
`;
const LoginContainer = styled(Box)`
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormGroup = styled(Box)`
  margin-bottom: 15px;
`;

const Heading = styled(Typography)`
  margin-bottom: 20px;
  text-align: center;
  font-size: 2rem;
`;
const LoginButton = styled(Button)`
  background-color: blue;
  width: 50%;
  color: black;
  height: 30px;
`;
const Input = styled("input")({
  boxSizing: "border-box",
  marginTop: "5px",
  width: "100%",
  padding: "5px",
});

const Label = styled(FormLabel)`
  display: block;
  font-size: 14px;
  font-weight: bold;
`;

const Login = ({setAuthenticated}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        email: email,
        password: password,
      });
      if (response.status === 200) {
        setAuthenticated(true);
        navigate("/books")
      } else {
        console.log(response)
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LoginPage>
      <LoginContainer>
        <Heading>Login</Heading>
        <FormGroup>
          <Label htmlFor="username">Email:</Label>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Enter Username"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="Password">Password:</Label>
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="Password"
            placeholder="Enter Password"
          />
        </FormGroup>
        <LoginButton onClick={handleSubmit} variant="contained">
          Login
        </LoginButton>
      </LoginContainer>
    </LoginPage>
  );
};

export default Login;
