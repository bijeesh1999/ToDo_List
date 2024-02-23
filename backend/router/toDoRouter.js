const express=require ("express")

const {getAlltodo , postTodo , editTodo ,deleteTodo} = require("../controller/todoController")

const Router=express.Router();



Router.route('/').get(getAlltodo).post(postTodo)

Router.route("/:id").put(editTodo).delete(deleteTodo)


module.exports=Router