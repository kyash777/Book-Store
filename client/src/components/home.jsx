import {Box, Typography,styled} from "@mui/material"
import {Link} from "react-router-dom"

const LoginButton=styled(Link)`
    text-decoration:none;
    color:white;
    font-weight:bold;
    background:blue;
    text-align:center;
    width:100px;
    padding:10px;
    border-radius:10px;
`

const Hero=styled(Box)`
    display:flex;
    background-color:#301934;
    color:#ffc107;
    height:100vh;
    padding-inline:30px;
`
const HeroContent=styled(Box)`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:20px;
`
const HeroText=styled(Typography)`
    font-size:3rem;
    margin-bottom:10px;
    word-spacing:1%;
`
const HeroDesc=styled(Typography)`
    font-size:1.2rem;
    max-width:400px;
    margin-bottom:20px;
`

const HeroImage=styled(Box)`
    flex:1;
    background:url(https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg) center;
    background-size:90%;
    background-repeat:no-repeat;
`
const Home=()=>{
    return (
        <Hero>
            <HeroContent>
                <HeroText>Book Shop</HeroText>
                <HeroDesc>
                    Browse The Collections of Books
                </HeroDesc>
                <LoginButton to="/login">Login</LoginButton>
            </HeroContent>
            <HeroImage></HeroImage>
        </Hero>
    )
}

export default Home;