import React from 'react'
import { Row } from 'react-bootstrap'
import { BlockTodo } from './BlockTodo'

const styles = [
    {
        color: 'danger',
        name: 'ToDo'
    },
    {
        color: 'warning',
        name: 'Working'
    },
    {
        color: 'success',
        name: 'Done'
    }
]

const Todos = ({todos}) =>{
    return (
        <Row>
            {[1,2,3].map((val, ind)=>{
                return <BlockTodo key={ind} {...styles[ind]} todos={todos.filter((todo)=>{
                    return todo.status === val
                })}/>
            })}
            
        </Row>
    )
}
export default Todos