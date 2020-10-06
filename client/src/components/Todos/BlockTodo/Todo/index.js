import React from 'react'
import { Dropdown } from 'react-bootstrap'
import TodoActions from '../../../../actions/TodoAction'

const style = {
    text: {
        width: '75%',
    },
    button: {
        width: '10%',
    }
    
}
class Todo extends React.Component{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete = (id) => {
        TodoActions.deleteTodo(id)
    }
    render(){
        const {text, color, id} = this.props
        return (
            <div className="d-flex">
                <p style={style.text}>{text}</p>
                <Dropdown style={style.button} className="mx-auto mr-sm-4">
                    <Dropdown.Toggle variant={ `outline-${color}`} id="dropdown-basic">
                        ...
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>{this.handleDelete(id)}}>Delete</Dropdown.Item>
                        <Dropdown.Item href={`/update/${id}`}>Update</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

export default Todo