import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { allItems } from '../React-Redux/Action';
import { useDispatch } from 'react-redux';

function ProductCard({ items, searchValue }) {


    let dispatch = useDispatch();


    let newItems = items.filter(data => {
        return Object.values(data).join(" ").toLowerCase().includes(searchValue)
    })

    const addtocart = (items) => {
        dispatch(allItems(items))
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
                                        <Card.Img className='h-100 w-100' variant="top" src={newItems.images[0]} />
                                    </div>
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
                </Container> : <h4 style={{ textAlign: 'center', color: 'var(--bs-danger)' }}>"Opp...s! Please Try Again...."</h4>
            }
        </div>
    );
}

export default ProductCard;