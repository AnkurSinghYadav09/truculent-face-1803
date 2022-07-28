const express=require("express");
const authRouter=require("./routes/auth.routes")
const taskRouter=require("./routes/task.routes")
const connection = require("./db")
const cors=require("cors")
const app=express()
app.use(cors())
require("dotenv").config();
const PORT=process.env.PORT

app.use(express.json())
app.use("/auth",authRouter)
app.use("/user",taskRouter)

app.listen(PORT,async()=>{
    try{
        await connection;
    }catch{
        console.log("connection error")
    }
    
    console.log("server listens at 8080")
})