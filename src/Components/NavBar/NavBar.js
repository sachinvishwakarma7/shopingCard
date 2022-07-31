import React, { useState } from 'react'
import { Navbar, Container, Form, Row, Badge } from 'react-bootstrap'
import { FiShoppingCart } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function NavBar({ searchText }) {

    const [searchItem, setSearchItem] = useState('')

    let handelChange = (e) => {
        setSearchItem(e.target.value)
        /*console.log(searchItem)*/
    }

    let itemsLength = useSelector(state => state.cartProduct.items)
    return (
        <>

            <Navbar style={{ position: 'sticky', top: '0', fixed: 'top' }} fixed="top" className="navigation" bg="dark" variant="dark">
                <Container style={{ height: '6rem' }}>
                    <Row>
                        <Navbar.Brand><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Shopping Cart</Link></Navbar.Brand>
                        <Form>
                            <Form.Control type="text" placeholder="Search"
                                name='name'
                                value={searchItem}
                                onChange={handelChange}
                            />
                            {searchText(searchItem)}
                        </Form>
                    </Row>
                    <Navbar.Brand><Link style={{ textDecoration: 'none', color: 'white' }} to="/cart">MyCart<FiShoppingCart size={30} /><Badge bg='danger' style={{ fontSize: '14px' }}>{itemsLength.length}</Badge></Link></Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar