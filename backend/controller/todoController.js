const todo = require("../mongoDb/model/toDoSchema")



const getAlltodo = async(req,res) => {

    const allData=await todo.find({})
    if(allData){
        res.status(200).json(allData)
    }else{
        res.status(404).json("data not fond ")
    }


}

const postTodo = async(req,res) => {

    const {...data}=req.body
    console.log(data);

    const postData=await todo.create({
        task:data.Task,
        description:data.deSc,
        option:data.option,
        // dueDate:data.date,
        updated:false
    })

    // if(postData){
    //     res.status(200).json(postData)
    // }else{
    //     res.status(400).json("data post error")
    // }
}


const editTodo = async(req,res) => {

    const {...data}=req.body
    const {id}=req.params
    console.log(data,id);

    // const editTodo=await todo.findByIdAndUpdate(id,{
    //     data
    // })
    // if(editTodo){
    //     res.status(200).json(editTodo)
    // }else{
    //     res.status(404).json("error editing data")
    // }

}

const deleteTodo = async(req,res) => {

    const {id}=req.params
    console.log(id);

    const deletedtodo=await todo.findByIdAndDelete(id)
    if(deletedtodo){
        res.status(200).json(deletedtodo)
    }else{
        res.status(404).json("deletion error")
    }



}


module.exports = {getAlltodo , postTodo , editTodo ,deleteTodo}