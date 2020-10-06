import React from 'react'

import TodoActions from '../../../actions/TodoAction'
import Create from './Create'
import Update from './Update'

class TodoForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: null,
            status: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.back = this.back.bind(this)
        this.getData = this.getData.bind(this)
        this.setTodo = this.setTodo.bind(this)
        this.textRef = React.createRef()
        this.statusRef = React.createRef()
    }
    componentDidMount(){
        if(!this.props.isCreate){
            TodoActions.todo(this.props.match.params.id, this.setTodo)
        }
    }
    handleSubmit = ev => {
        ev.preventDefault()
        if(this.props.isCreate)TodoActions.createTodo(this.getData())
        else TodoActions.updateTodo({id: this.props.match.params.id, ...this.getData()})
        this.back()
    }
    back(){
        this.props.history.push('/')
    }
    setTodo(todo){
        this.textRef.current.value = todo.text
        this.statusRef.current.children[todo.status-1].firstChild.firstChild.checked = true
    }
    getData(){
        const elem = Array.from(this.statusRef.current.children).find((el, ind)=>{
            return (el.firstChild.firstChild.checked)? ind + 1 : false
        })
        return {
            text: this.textRef.current.value,
            status: elem.firstChild.firstChild.value
        }
    }
    render(){
        const {isCreate} = this.props
        return (
            <div>
                {(isCreate)?(
                    <Create handleSubmit={this.handleSubmit} back={this.back} tRef={this.textRef} sRef={this.statusRef}/>
                ):(
                    <Update handleSubmit={this.handleSubmit} back={this.back} tRef={this.textRef} sRef={this.statusRef}/>
                )}
            </div>
        )
    }
}

export default TodoForm