import React from 'react'
import { Col, Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Todo from './Todo'


export const BlockTodo = ({name, color, todos}) => {
    return (
        <Col lg="4">
            <Card bg={color}>
                <Card.Header>
                    <h4 className="text-white">{name}</h4>
                </Card.Header>
                <Card.Body>
                    {
                        (todos)?(
                            <ListGroup className="rounded">
                                {todos.map((todo, ind)=>{
                                    return <ListGroup.Item key={ind}><Todo {...todo} color={color}/></ListGroup.Item>
                                })}
                            </ListGroup>
                        ): null
                    }
                    
                </Card.Body>
                <Card.Footer className="d-flex">
                    <Link to="/create" className="text-white ml-auto">Add todo...</Link>
                </Card.Footer>
            </Card>
        </Col>
    )
}