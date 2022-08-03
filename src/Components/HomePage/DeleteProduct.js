import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { DeleteProductfeatch } from '../React-Redux/Action';
import { useDispatch, useSelector } from 'react-redux';
import { imagesArray } from '../ProductImageArray/ImagesArray';

function DeleteProduct({ searchValue }) {

    let products = useSelector(state => state.items.products)
    // console.log("ProductCard",items)
    console.log("ProductCard", products)

    let dispatch = useDispatch();


    let deletProduct = products.filter(data => {
        let search = searchValue.toLowerCase();
        return Object.values(data).join(" ").toLowerCase().includes(search)
    })


    const deleteItem = (id) => {
        console.log(id)
        dispatch(DeleteProductfeatch(id))
    }

    return (
        <div>
            {deletProduct.length > 0 ?
                <Container>
                    <Row className="justify-content-md-center" >
                        {deletProduct.map((newItems) =>
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
                                        <Button onClick={() => deleteItem(newItems.id)} variant="danger">Remove Item</Button>
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

export default DeleteProduct;