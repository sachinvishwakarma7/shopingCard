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
            <Navbar bg="light" expand="md" fixed="top" style={{ position: "sticky" }}>
                <Container>
                    <Navbar.Brand className="me-auto my-1 mx-5 my-lg-3" color='red' href="/">Shopping Cart</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 mx-5 my-lg-3"
                            style={{ maxHeight: '200px', fontSize: '20px' }}
                            navbarScroll
                        >
                            {/* <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/cart">Cart<Badge bg='danger' style={{ fontSize: '14px' }}>{itemsLength.length}</Badge></Nav.Link> */}

                            <Navbar.Brand><Link style={{ textDecoration: 'none' }} to="/">Home</Link></Navbar.Brand>
                            <Navbar.Brand><Link style={{ textDecoration: 'none' }} to="/cart">Cart<Badge bg='danger' style={{ fontSize: '14px' }}>{itemsLength.length}</Badge></Link></Navbar.Brand>
                            {/* <Navbar.Brand><Link style={{ textDecoration: 'none' }} to="/add_product">AddProduct</Link></Navbar.Brand> */}
                        </Nav>
                        <Form className='navbar-left m-2'>
                            <Form.Control type="text" placeholder="Search"
                                name='name'
                                value={searchItem}
                                onChange={handelChange}
                            />
                            {searchText(searchItem)}
                        </Form>

                        <Nav>
                            <Button className='m-1' href="/add_item" variant="outline-primary">Add_Item</Button>
                            <Button className='m-1' href="/delete_item" variant="outline-primary">Delete_Item</Button>
                            <Button className='m-1' href="/update_item" variant="outline-primary">Update_Item</Button>
                            <Button className='m-1' variant="danger">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar