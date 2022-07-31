import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { allItems } from '../React-Redux/Action';
import { useDispatch } from 'react-redux';

function ProductCard({ items, searchValue }) {

    const dispatch = useDispatch();

    const addtocart = (items) => {
        dispatch(allItems(items))
    }

    const newItems = items.filter(data => {
        return Object.values(data).join(" ").toLowerCase().includes(searchValue)
    })

    // console.log('ProductCard', searchValue)
    return (
        <div>
            {newItems.length > 0 ?
                <Container>
                    <Row className="justify-content-md-center m-3" >
                        {newItems.map((newItems) =>
                            <Col key={newItems.id}>
                                <Card className='m-2' style={{ width: '18rem', textAlign: 'center' }}>
                                    <Card.Img variant="top" src={newItems.images[0]} />
                                    <Card.Body>
                                        <Card.Title>{newItems.title}</Card.Title>
                                        <Card.Title>${newItems.price}</Card.Title>
                                        <Card.Text>
                                            {newItems.category}
                                        </Card.Text>
                                        <Button onClick={() => addtocart(newItems)} variant="primary">ADD TO CART</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}

                    </Row>
                </Container> : <h4>"Opp...s! Empty Cart Please Add Items...."</h4>
            }
        </div>
    );
}

export default ProductCard;