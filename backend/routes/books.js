const express = require("express");
const {getBooks,getBook,addBook,editBook,deleteBook} = require("../controller/books");
const router = express.Router()

router.get("/get", getBooks)
router.get("/get/:id", getBook)
router.post("/add", addBook)
router.put("/edit/:id", editBook)
router.delete("/delete/:id", deleteBook)



module.exports=router;