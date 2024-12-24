const express = require("express");
const {getBooks,addBook} = require("../controller/books");
const router = express.Router()

router.get("/get", getBooks)
router.post("/add", addBook)



module.exports=router;