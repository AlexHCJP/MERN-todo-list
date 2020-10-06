import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'

const Create = ({handleChange, handleSubmit, back, tRef, sRef}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Text</Form.Label>
                <Form.Control onChange={handleChange} name="text" placeholder="Enter text" ref={tRef}/>
                <Form.Text className="text-muted">
                Write the text for the todo
                </Form.Text>
            </Form.Group>
            <Form.Row ref={sRef}>
                <Col>
                    <Form.Check onChange={handleChange} type="radio" name="status" label="ToDo" value={1}/>
                </Col>
                <Col>
                    <Form.Check onChange={handleChange} type="radio" name="status" label="Working" value={2}/>
                </Col>
                <Col>
                    <Form.Check onChange={handleChange} type="radio" name="status" label="Done" value={3}/>
                </Col>    
            </Form.Row>
            <Button variant="primary" type="submit" className="mt-3">
                Create
            </Button>
            <Button variant="dark" className="mt-3" onClick={back}>
                Back
            </Button>
        </Form>
    )
}
export default Create