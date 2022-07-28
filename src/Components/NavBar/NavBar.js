import React from 'react'
import { Navbar, Container, Form, Row } from 'react-bootstrap'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <>

            <Navbar style={{ position: 'sticky', top: '0', fixed: 'top' }} fixed="top" className="navigation" bg="dark" variant="dark">
                <Container style={{ height: '6rem' }}>
                    <Row>
                        <Navbar.Brand><Link style={{ textDecoration: 'none', color: 'white' }} to="/">Shopping Cart</Link></Navbar.Brand>
                        <Form>
                            <Form.Control type="text" placeholder="Search" />
                        </Form>
                    </Row>
                    <Navbar.Brand><Link style={{ textDecoration: 'none', color: 'white' }} to="/cart">MyCart<FiShoppingCart size={30} /></Link></Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar