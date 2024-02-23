const mongoose=require("mongoose")


const todoSchema=mongoose.Schema({


    task:String,
    description:String,
    option:String,
    dueDate:Date,
    updated:Boolean


},{
    timestamps:true
})



module.exports= mongoose.model("todo",todoSchema)