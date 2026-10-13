 const express=require("express");
const bookRoutes=require("./routes/bookRoutes");
const connectDB=require("./config/db");









const app=express();

connectDB();
app.use(express.json());
app.use(bookRoutes);









app.listen(5000,()=>{
    console.log("Server is Running on port 5000");
})