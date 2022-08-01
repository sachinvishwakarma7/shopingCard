import React, { useState } from 'react'
import { Navbar, Container, Form, Badge, Nav, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import { AiFillShopping } from 'react-icons/ai'

function NavBar({ searchText }) {

    const [searchItem, setSearchItem] = useState('')

    let handelChange = (e) => {
        setSearchItem(e.target.value)
        /*console.log(searchItem)*/
    }

    let itemsLength = useSelector(state => state.cartProduct.items)
    return (
        <>
            <Navbar bg="light" expand="lg" fixed="top" style={{ position: "sticky" }}>
                <Container fluid>
                    <Navbar.Brand className="me-auto my-2 mx-5 my-lg-3 h1" href="#">Shopping Cart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-4 mx-5 my-lg-3"
                            style={{ maxHeight: '100px', fontSize: '20px' }}
                            navbarScroll
                        >
                            {/* <Nav.Link href="#action1">Home</Nav.Link> */}
                            {/* <Nav.Link href="#action2">Cart</Nav.Link> */}
                            <Navbar.Brand><Link style={{ textDecoration: 'none' }} to="/">Home</Link></Navbar.Brand>
                            <Navbar.Brand><Link style={{ textDecoration: 'none' }} to="/cart">Cart<Badge bg='danger' style={{ fontSize: '14px' }}>{itemsLength.length}</Badge></Link></Navbar.Brand>

                        </Nav>
                        <Form>
                            <Form.Control type="text" placeholder="Search"
                                name='name'
                                value={searchItem}
                                onChange={handelChange}
                            />
                            {searchText(searchItem)}
                        </Form>
                        <Nav>
                            <Button variant="outline-primary">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar