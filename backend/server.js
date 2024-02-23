const express=require("express")
const cors=require("cors")
const dbConnection=require("./mongoDb/dbConnection")

const app=express()


app.use(express.json())
app.use(cors())


app.use("/",require("./router/toDoRouter"))



app.listen(8086 , async()=>{
    console.log("http://localhost:8086");
    await dbConnection();
})


