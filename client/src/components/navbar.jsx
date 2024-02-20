import {Box, Typography,styled} from "@mui/material"
import {Link} from "react-router-dom"

const Nav=styled(Box)`
    display:flex;
    justify-content:space-between;
    padding:12px;
    background-color:#301934;
    color:#fff;
    padding-inline:45px;
    border-bottom:1px solid purple;
`
const Navbarleft=styled(Box)`
    display:flex;
    align-items:center;
`
const Navbarright=styled(Box)`
    display:flex;
    align-items:center;
`
const Navbarbrand=styled(Typography)`
    font-size:1.8rem;
    margin-left:20px;
`
const Navbarlink=styled(Link)`
    color:#fff;
    text-decoration:none;
    margin-left:20px;
`
const Navbar=()=>{
    return (
        <Nav>
            <Navbarleft>
                <Navbarbrand>Book Store</Navbarbrand>
            </Navbarleft>
            <Navbarright>
                <Navbarlink to="/books">Books</Navbarlink>
                <Navbarlink to="/">Logout</Navbarlink>
                <Navbarlink to="/addBook">Add Book</Navbarlink>
            </Navbarright>
        </Nav>
    )
}

export default Navbar;