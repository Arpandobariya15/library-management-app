const Books = require("../models/books")

// get api
const getBooks = async(req,res)=>{
    const books = await Books.find()
    return res.json(books);
}

// post api
const addBook = async (req,res)=>{
    
    const {desc,author,bookname,img,price}=req.body;

    if( !desc || !author || !bookname || !price || !img ){
        res.json({message : "Required fields can't be empty"})
    }
    const newBooks = await Books.create({
        desc,author,bookname,img,price
    })
    return res.json(newBooks);
}


module.exports={getBooks,addBook}