const mongoose=require("mongoose");
const bookscchema=new mongoose.Schema({
    title:String,
    autor:String,
    price:Number,
    category:String,
    publishedyear:Number
})
const Books=mongoose.model("Books",bookscchema);
module.exports=Books;