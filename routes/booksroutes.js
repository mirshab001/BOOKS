const express=require("express");
const Books=require("../models/books");
const router=express.Router();
router.post("/books",async(req,res)=>{
    try {
        const newBook=await Books.create(req.body);
        res.status(201).json({success: true, message: "Book created successfully", book: newBook });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});
module.exports=router;