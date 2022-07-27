import React from 'react'
import { Navbar, Container, Form, Row } from 'react-bootstrap'
import { FiShoppingCart } from 'react-icons/fi'

function NavBar() {
    return (
        <>

            <Navbar style={{ position: 'sticky', top: '0', fixed: 'top' }} fixed="top" className="navigation" bg="dark" variant="dark">
                <Container style={{ height: '6rem' }}>
                    <Row>
                        <Navbar.Brand>Shopping Cart</Navbar.Brand>
                        <Form>
                            <Form.Control type="text" placeholder="Search" />
                        </Form>
                    </Row>
                        <Navbar.Brand><FiShoppingCart size={30} /></Navbar.Brand>
                </Container>
            </Navbar>

        </>
    )
}

export default NavBar