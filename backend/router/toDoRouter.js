const express=require ("express")

const {getAlltodo , postTodo , editTodo ,deleteTodo,singleTodo} = require("../controller/todoController")

const Router=express.Router();



Router.route('/').get(getAlltodo).post(postTodo)

Router.route("/:id").get(singleTodo).put(editTodo).delete(deleteTodo)


module.exports=Router