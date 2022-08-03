import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { allItems } from '../React-Redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import { imagesArray } from '../ProductImageArray/ImagesArray';

function ProductCard({ items, searchValue }) {


    let cartProduct = useSelector(state => state.cartProduct.items)
    // console.log("ProductCard",items)

    let dispatch = useDispatch();


    let newItems = items.filter(data => {
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
                                        <Card.Img className='h-100 w-100' variant="top" src={imagesArray[newItems.id - 3]} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{newItems.product_name}</Card.Title>
                                        <Card.Title>${newItems.product_price}</Card.Title>
                                        <Card.Text>
                                            {newItems.product_brand}
                                        </Card.Text>
                                        <Button onClick={() => addtocart(newItems)} variant="primary">ADD TO CART</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}

                    </Row>
                </Container> : <h4 style={{ textAlign: 'center', color: 'var(--bs-danger)' }}>"Opp...s! Please Try Again...."</h4>
            }
        </div>
    );
}

export default ProductCard;