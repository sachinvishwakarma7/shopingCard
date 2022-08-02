import React, { useState } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
// import { addNewProductfeatch } from '../React-Redux/Action'


function AddNewPorduct() {
    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        description: '',
        image: '',
        category: ''
    })

    let onChangeHandelTitle = (e) => {
        setFormData({ ...formData, title: e.target.value })
    }

    let onChangeHandelPrice = (e) => {
        setFormData({ ...formData, price: e.target.value })
    }

    let onChangeHandelDescription = (e) => {
        setFormData({ ...formData, description: e.target.value })
    }

    let onChangeHandelImage = (e) => {
        setFormData({ ...formData, image: e.target.value })
    }

    let onChangeHandelCategory = (e) => {
        setFormData({ ...formData, category: e.target.value })
    }
    // console.log(formData.title)

    let submitHandel = (e) => {
        e.preventDefault()
        // console.log(formData)
        // addNewProductfeatch(formData.title, formData.price, formData.description, formData.image, formData.category)
    }
    return (
        <>
            <h5 className='text-center p-3' style={{ backgroundColor: 'var(--bs-gray-100)', color: 'var(--bs-primary)' }}>ADD PRODUCT</h5>
            <div className="p-5" >
                <Container>
                    <Form onSubmit={submitHandel}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter title"
                                    name="name"
                                    value={FormData.title}
                                    onChange={onChangeHandelTitle}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder="Price"
                                    name="price"
                                    value={FormData.price}
                                    onChange={onChangeHandelPrice}
                                />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="description"
                                name="description"
                                value={formData.description}
                                onChange={onChangeHandelDescription}
                            />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Category</Form.Label>
                                <Form.Select value={formData.category} name="category" onChange={onChangeHandelCategory}>
                                    <option>choose...</option>
                                    <option value="men's clothing">men's clothing</option>
                                    <option value="women's clothing">women's clothing</option>
                                    <option value="jewelery">jewelery</option>
                                    <option value="Cell Phones & Accessories">Cell Phones & Accessories</option>
                                    <option value="Apps & Games">Apps & Games</option>
                                    <option value="Home & Kitchen">Home & Kitchen</option>
                                    <option value="Sports & Outdoors">Sports & Outdoors</option>
                                    <option value="Health, Household & Baby Care">Health, Household & Baby Care</option>
                                    <option value="Grocery & Gourmet Food">Grocery & Gourmet Food</option>
                                    <option value="Movies & TV">Movies & TV</option>
                                    <option value="Video Games">Video Games</option>
                                    <option value="electronics">electronics</option>
                                    <option value="Computers">Computers</option>
                                    <option value="Shoes">Shoes</option>
                                </Form.Select>
                            </Form.Group>

                        </Row>

                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" required />
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