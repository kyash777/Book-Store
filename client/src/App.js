import {BrowserRouter,Routes,Route, Outlet,Navigate} from "react-router-dom"
import Home from "./components/home";
import Books from "./components/books";
import Login from "./components/login";
import Dashbord from "./components/dashbord";
import AddBook from "./components/addBook";
import { useState } from "react";

const PrivateRoute=({isAuthenticated,...props})=>{
  return isAuthenticated?
  <Outlet/>
  :
  <Navigate to="/login"/>
}

function App() {
  const [isAuthenticated,setAuthenticated]=useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login setAuthenticated={setAuthenticated}/>}></Route>
          <Route path="/books" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
            <Route path="/books" element={<Books/>}></Route>
          </Route>
          <Route path="/addbook" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
            <Route path="/addbook" element={<AddBook/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
