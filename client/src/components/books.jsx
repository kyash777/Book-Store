import { Box,TableCell,TableBody,TableHead ,TableContainer,Table,TableRow} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./navbar";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/books");
      if (response.status == 200) {
        setBooks(response.data);
      }
    };
    fetchData();
  }, [books]);
  return (
    <Box>
      <Navbar/>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Genre</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.genre}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Books;
