import React, { useEffect, useState } from 'react'
import { Table, Card, Button, Container, Row, Col } from 'react-bootstrap'
import { MdDeleteForever } from 'react-icons/md'
import { deleteItem } from '../React-Redux/Action'
import { useSelector, useDispatch } from 'react-redux'

function Cart() {
    let [products, setProducts] = useState([])


    let items = useSelector(state => state.cartProduct.items)
    console.log("useSelector",items)

    let AddProductQuantity = items.map(items => {
        return { ...items, product_quantity: 1 }
    })

    let handleDecrement = (cart_id) => {
        setProducts(products =>

            products.map(items => items.id === cart_id ? { ...items, product_quantity: items.product_quantity > 1 ? items.product_quantity - 1 : 1 } : items)

            )
        }

    let handleIncrement = (cart_id) => {
        setProducts(products =>
            products.map(items => items.id === cart_id ? { ...items, product_quantity: items.product_quantity < 10 ? items.product_quantity + 1 : 1 } : items)
        )
    }


    const subtotal1 = products.map(item =>
        item.product_quantity * item.price
    )
    const subtotal2 = (subtotal) => {
        let sum = 0;
        for (let i = 0; i < subtotal.length; i++) {
            sum = sum + subtotal[i];
        }
        return sum;
    }
    // console.log(subtotal2(subtotal1))

    let maximumAmountToApply = 100;
    const total = (fee) => {
        let num = subtotal2(subtotal1);
        if (num < fee) {
            return num = parseFloat((num * 0.1).toFixed(2))
        } else {
            return 0;
        }
    }
    // console.log(total(maximumAmountToApply))


    useEffect(() => {
        setProducts(AddProductQuantity)
        // console.log('useEffect,items', items)
        // console.log('useEffect,AddProductQuantity', AddProductQuantity)
    }, [items])

    let dispatch = useDispatch()
    let deleteItems = (id) => {

        // console.log('deleteItems', id)
        dispatch(deleteItem(id))
    }


    return (
        <>
            <h5 className='text-center p-3' style={{ backgroundColor: 'var(--bs-gray-100)', color: 'var(--bs-primary)' }}>YOUR CART</h5>
            <div className='m-3'>
                {items.length > 0 ?
                    <Table className='table table-condensed text-center' style={{ alignItems: 'center', textAlign: 'center', tableLayout: 'fixed' }}>
                        <thead className='text-center'>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>price</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        {products.map((items, num) =>
                            <tbody key={items.id}>
                                <tr>
                                    <td>{num + 1}</td>
                                    <td>
                                        <div>
                                            <img style={{ width: '70px' }} src={items.images[0]} alt='product' />
                                            <span style={{ fontWeight: 'bold' }}>
                                                {items.title}
                                            </span>
                                            <p>
                                                {items.description}
                                            </p>
                                        </div>
                                    </td>
                                    <td>
                                        <button style={{ width: '2em' }} type='number' onClick={() => handleDecrement(items.id)}>-</button>
                                        <span style={{ padding: '1em' }}>{items.product_quantity}</span>
                                        <button style={{ width: '2em' }} type='number' onClick={() => handleIncrement(items.id)}>+</button>
                                    </td>
                                    <td>${(items.price) * (items.product_quantity)}</td>
                                    <td><MdDeleteForever size={30} onClick={() => deleteItems(items.id)} color='var(--bs-danger)' /></td>
                                </tr>
                            </tbody>
                        )}

                    </Table> : <h5 style={{ textAlign: 'center', color: 'var(--bs-danger)' }}>"Opp...s! Your Cart is Empty Please Add Items...."</h5>
                }

                <Card>
                    <Card.Header className='text-center' as='h5'>ORDER SUMMARY</Card.Header>
                    <Container>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Title>SubTotal : ${subtotal2(subtotal1)}</Card.Title>
                                    <Card.Title>Shipping Fee : ${total(maximumAmountToApply)}</Card.Title>
                                    <Card.Title style={{ borderTop: '1px solid gainsboro', paddingTop: '10px', marginTop: '20px' }}>Total : ${subtotal2(subtotal1) + total(maximumAmountToApply)}</Card.Title>
                                </Col>
                                <Col>
                                    <Card.Text>
                                        Shipping charges are depends your product. If your subtotal are lessthan $100 shipping charge deduct 10% if your subtotal is greater than $100 shipping charges are free <br/><u><small>(apply term and condition.)</small></u>
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
        </>
    )
}

export default Cart