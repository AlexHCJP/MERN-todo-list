import express from 'express'
import {port} from 'config'

import cors from 'cors'
import bodyParser from 'body-parser'

import * as db from './db';
import TodoController from './controllers/TodoController'

const app = express()

// Set up connection of database
db.setUpConnection();
// Using bodyParser middleware
app.use( bodyParser.json() );
// Allow requests from any origin
app.use(cors({ origin: '*' }));

app.get('/todos', (req, res) => {
    TodoController.getTodos().then(todos => {console.log(todos);res.send(todos)})
})
app.get('/todo/:id', (req, res) => {
    TodoController.todo(req.params.id).then(todo => res.send(todo))
})
app.post('/todo', (req, res) => {
    TodoController.createTodo(req.body).then(todo => res.send(todo))
})
app.delete('/todo/:id', (req, res) => {
    TodoController.removeTodo(req.params.id).then(result => res.send(result))
})
app.put('/todo/:id', (req, res) => {
    TodoController.updateTodo(req.params.id, req.body).then(todo => res.send(todo))
})

app.listen(port, () => {
    console.log(`Listen serve on ${port} port`)
})