import React from 'react'
import { Table, Card, Button, Container, Row, Col } from 'react-bootstrap'
import { MdDeleteForever } from 'react-icons/md'
import Stepper from './Stepper'
import { useSelector } from 'react-redux'

function Cart() {
    const items = useSelector(state => state.cartProduct.items)
    // console.log(items)
    return (
        <div className='m-3'>
            <h4 className='text-center m-4'>YOUR CART</h4>
            {items.length > 0 ?
                <Table className='table table-condensed text-center' style={{alignItems:'center',textAlign:'center'}}>
                    <thead className='text-center'>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>price</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    {items.map((items, num) =>
                        <tbody key={items.id}>
                            <tr>
                                <td>{num + 1}</td>
                                <td>
                                    <img style={{ width: '70px' }} src={items.images[0]} alt='product' />
                                    <p>
                                        {items.title}
                                    </p>
                                </td>
                                <td><Stepper /></td>
                                <td>${items.price}</td>
                                <td><MdDeleteForever size={30} color='var(--bs-danger)' /></td>
                            </tr>
                        </tbody>
                    )}

                </Table> : null
            }

            <Card>
                <Card.Header className='text-center' as='h5'>ORDER SUMMARY</Card.Header>
                <Container>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Title>SubTotal : $250</Card.Title>
                                <Card.Title>Shipping Fee : $20</Card.Title>
                                <Card.Title style={{ borderTop: '1px solid gainsboro', paddingTop: '10px', marginTop: '20px' }}>Total : $270</Card.Title>
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