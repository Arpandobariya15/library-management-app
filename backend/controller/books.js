const Books = require("../models/books")

// get api
const getBooks = async(req,res)=>{
    const books = await Books.find()
    return res.json(books);
}

// get api with id
const getBook = async(req,res)=>{
    const book = await Books.findById(req.params.id)
    return res.json(book);
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

// put api
const editBook = async (req,res)=>{
    const {desc,author,bookname,img,price}=req.body;
    let book = await Books.findById(req.params.id)
    try {
        if(book){
            await Books.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.json({desc,author,bookname,img,price})
        }
    } catch (error) {
        return res.status(404).json({message:"error in update recipe"})
    }
}

// delete api
const deleteBook = async(req, res)=>{
    const {desc,author,bookname,img,price}=req.body;
    let book = await Books.findById(req.params.id)
    try {
        if(book){
            await Books.findByIdAndDelete(req.params.id,req.body,{new:true})
            res.json({desc,author,bookname,img,price})
        }
    } catch (error) {
        return res.status(404).json({message:"error in update recipe"})
    }
}

module.exports={getBooks,getBook,addBook,editBook,deleteBook}