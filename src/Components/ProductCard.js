import { Button, Card, Container, Row, Col } from 'react-bootstrap';

function ProductCard({ items }) {

    return (
        <div>
            {items.length > 0 ?
                <Container>
                    <Row className="justify-content-md-center m-3" >
                        {items.map((items) =>
                            <Col key={items.id}>
                                <Card className='m-2' style={{ width: '18rem', textAlign: 'center' }}>
                                    <Card.Img variant="top" src={items.images[0]} />
                                    <Card.Body>
                                        <Card.Title>{items.title}</Card.Title>
                                        <Card.Title>Price</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">ADD TO CART</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )}

                    </Row>
                </Container> : null
            }
        </div>
    );
}

export default ProductCard;