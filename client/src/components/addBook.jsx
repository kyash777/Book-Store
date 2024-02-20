import {Box,styled,Typography,Button,FormLabel} from "@mui/material"
import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

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


const initialBook={
    name:"",
    author:"",
    genre:""
}
const AddBook = () => {

    const [book,setBook]=useState(initialBook);
    const Navigate=useNavigate();
    const handleSubmit=async()=>{
      try{
        const response= await axios.post("http://localhost:8000/addbook",book);
        
        if(response.status==200){
          Navigate("/books")
        }

      }catch(error){
        console.log(error);
      }
    }

    const onBookChange=(e)=>{
        setBook({...book,[e.target.name]:e.target.value});
    }
    return (
      <LoginPage>
        <LoginContainer>
          <Heading>Add Book</Heading>
          <FormGroup>
            <Label htmlFor="Book Name">Book Name :</Label>
            <Input
            name="name"
            onChange={(e)=>{onBookChange(e)}}
              type="text"
              placeholder="Enter Book Name "
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Author">Author :</Label>
            <Input
            name="author"
             onChange={(e)=>{onBookChange(e)}}
              type="text"
              placeholder="Enter Author Name"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Genre">Genre :</Label>
            <Input
            name="genre"
             onChange={(e)=>{onBookChange(e)}}
              type="text"
              placeholder="Enter Genre"
            />
          </FormGroup>
          <LoginButton onClick={handleSubmit} variant="contained">
            Add
          </LoginButton>
        </LoginContainer>
      </LoginPage>
    );
  };
export default AddBook;