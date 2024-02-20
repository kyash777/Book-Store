import BooksList from "../data/data.js";

export const getBooks=async(request,response)=>{
    return response.status(200).json(BooksList);
}

export const addBook=async(request,response)=>{
    const book=request.body;
    console.log(request.body);
    BooksList.push(book)
    response.status(200).json({message:"Book Added"})
}
