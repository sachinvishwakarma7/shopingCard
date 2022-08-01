import React from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'

function AddNewPorduct() {
    return (
        <>
            <h5 className='text-center p-3' style={{ backgroundColor: 'var(--bs-gray-100)', color: 'var(--bs-primary)' }}>ADD PRODUCT</h5>
            <div className="p-5" >
                <Container>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder="Price" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="description" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Category</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose1...</option>
                                    <option>Choose2...</option>
                                    <option>Choose3...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        {/* <Form.Group as={Col}>
                            <Form.File id="file-upload" label="upload a file" />
                        </Form.Group> */}

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default AddNewPorduct