import React from 'react'
import { Table, Card, Button, Container, Row, Col } from 'react-bootstrap'
import {MdDeleteForever} from 'react-icons/md'
import Stepper from './Stepper'
function Cart() {
    return (
        <div className='m-3'>
            <h4 className='text-center m-4'>YOUR CART</h4>
            <Table className='table-condensed text-center table-borderless'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>
                            <img src='ad' alt='product'/>
                        </td>
                        <td><Stepper /></td>
                        <td>$150</td>
                        <td><MdDeleteForever size={30} color='var(--bs-danger)'/></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td><Stepper /></td>
                        <td>$100</td>
                        <td><MdDeleteForever size={30} color='var(--bs-danger)'/></td>
                    </tr>
                    {/* <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr> */}
                </tbody>
            </Table>
            <Card>
                <Card.Header className='text-center' as='h5'>ORDER SUMMARY</Card.Header>
                <Container>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>SubTotal : $250</Card.Title>
                                <Card.Title>Shipping Fee : $20</Card.Title>
                                <Card.Title style={{borderTop:'1px solid gainsboro',paddingTop:'10px',marginTop:'20px'}}>Total : $270</Card.Title>
                            </Col>
                            <Col>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Container>
                <Card.Footer className="text-center">
                    <Button variant="primary">CHECKOUT</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Cart