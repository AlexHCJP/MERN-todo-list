import mongoose from 'mongoose'
import '../models/Todo'
const Todo = mongoose.model('Todo');

const formTodoForCreate = (data) => {
    return {
        text: data.text,
        status: data.status,
        createdAt: Date.now()
    }
}

const formTodoForUpdate = (data) => {
    return {
        text: data.text,
        status: data.status
    }
}

const TodoController = {
    todo(id){
        return Todo.findById(id)
    },
    getTodos(){
        return Todo.find()
    },
    createTodo(data){
        const todo = Todo.create(formTodoForCreate(data))
        return todo
    },
    removeTodo(id){
        return Todo.findByIdAndDelete(id)
    },
    updateTodo(id, data){
        return Todo.findByIdAndUpdate(id, formTodoForUpdate(data))
    }
}

export default TodoController