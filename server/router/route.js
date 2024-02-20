import express from "express"
import { login } from "../controllers/login-controller.js";
import {getBooks,addBook} from "../controllers/books-controller.js";
const Router=express.Router();


Router.post("/login",login)
Router.get("/books",getBooks);
Router.post("/addbook",addBook)

export default Router;