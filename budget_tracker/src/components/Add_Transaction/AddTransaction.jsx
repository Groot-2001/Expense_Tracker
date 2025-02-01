import React, {useState} from 'react'
import {Form, Button, Row, Col, FormControl} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'

const CreateTransaction = () => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
       
    }

    return (
        <div>
            <h2>Create Transaction</h2>
            <Form onSubmit={handleSubmit}>
                // other form fields
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>Category</Form.Label>
                    <Col sm={10}>
                        <FormControl as="select" >
                            <option value="">Select category</option>
                            <option >Food </option>
                        </FormControl>
                    </Col>
                </Form.Group>
                <Button type="submit">Create</Button>
            </Form>
        </div>
    )
}
export default CreateTransaction
