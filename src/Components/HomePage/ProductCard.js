import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { allItems, featchData } from '../React-Redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import { imagesArray } from '../ProductImageArray/ImagesArray';
import { useEffect, useState } from 'react';

function ProductCard({ searchValue }) {
    const [data, setdata] = useState([])

    const items = useSelector(state => state.items.products)
    const cartProduct = useSelector(state => state.cartProduct.items)
    // console.log("ProductCard", data)

    let dispatch = useDispatch();

    useEffect(() => {
        setdata(items)
        // dispatch(featchData())
        dispatch(featchData())
    }, [dispatch, items])

    let newItems = data.filter(data => {
        let search = searchValue.toLowerCase();
        return Object.values(data).join(" ").toLowerCase().includes(search)
    })

    const addtocart = (items) => {
        if (cartProduct.some(item => item.id === items.id)) {
            alert("item is already in you cart!... Please Check your cart")
        } else {
            dispatch(allItems(items))
        }
    }

    // console.log('ProductCard', searchValue)
    return (
        <div>
            {newItems.length > 0 ?
                <Container>
                    <Row className="justify-content-md-center" >
                        {newItems.map((newItems) =>
                            <Col key={newItems.id}>
                                <Card className='m-2' style={{ width: '18rem', textAlign: 'center', alignItems: 'center' }}>
                                    <div style={{ width: '200px', height: '200px' }}>
                                        <Card.Img className='h-100 w-100' variant="top" src={imagesArray[newItems.id]} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{newItems.product_name}</Card.Title>
                                        <Card.Title>${newItems.product_price}</Card.Title>
                                        <Card.Text>
                                            {newItems.product_brand}
                                        </Card.Text>
                                        <h6><Button onClick={() => addtocart(newItems)} variant="primary">ADD TO CART</Button></h6>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}

                    </Row>
                </Container> : <h4 style={{ textAlign: 'center', color: 'var(--bs-danger)' }}>"Opp...s! Please Try Again...."</h4>
            }
        </div >
    );
}

export default ProductCard;