const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    bookname :{type : String, required : true},
    desc :{type : String, required : true},
    author :{type : String, required : true},
    img :{type : String, required: true},
    price :{type : Number,required : true}

},{timestamps:true})


module.exports= mongoose.model("Books", bookSchema)