import React, { useEffect, useState, } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { updateSingleProduct } from '../React-Redux/Action';


function UpdateProduct({ value }) {

  console.log(value);

  const [formData, setFormData] = useState({
    product_name: '',
    product_brand: '',
    product_price: null,
    product_size: ''
  })

  useEffect(() => {
    if (value !== null) {
      setFormData({
        product_name: value.product_name,
        product_brand: value.product_brand,
        product_price: value.product_price,
        product_size: value.product_size
      })
    }
  }, [value])
  // console.log(loaction)

  let dispatch = useDispatch();

  let onChangeHandelProductname = (e) => {
    setFormData({ ...formData, product_name: e.target.value })
  }

  let onChangeHandelProductBrand = (e) => {
    setFormData({ ...formData, product_brand: e.target.value })
  }

  let onChangeHandelPrice = (e) => {
    setFormData({ ...formData, product_price: e.target.value })
  }

  let onChangeHandelProductSize = (e) => {
    setFormData({ ...formData, product_size: e.target.value })
  }

  const submitHandel = (e) => {
    e.preventDefault()
    if (formData.product_name === '' || formData.product_brand === '' || formData.product_price === null || formData.product_size === '') {
      alert("All input fields requried !")
    } else {
      dispatch(updateSingleProduct(value.id, formData.product_name, formData.product_brand, formData.product_price, formData.product_size))
      alert("Product Update successfully !")
    }
  }
  // console.log("submitHandel", formData)

  return (
    <>
      <h5 className='text-center p-3' style={{ backgroundColor: 'var(--bs-gray-100)', color: 'var(--bs-primary)' }}>UPDATE PRODUCT</h5>
      <div className="p-5" >
        <Container>
          <Form onSubmit={submitHandel}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Product name"
                  name="name"
                  value={FormData.product_name}
                  onChange={onChangeHandelProductname}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Price"
                  name="price"
                  value={FormData.product_price}
                  onChange={onChangeHandelPrice}
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                <Form.Label>Brand Name</Form.Label>
                <Form.Control type="text" placeholder="Brand name"
                  name="brand"
                  value={formData.product_brand}
                  onChange={onChangeHandelProductBrand}
                />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                <Form.Label>Product Size</Form.Label>
                <Form.Control type="text" placeholder="Product size"
                  name="size"
                  value={formData.product_size}
                  onChange={onChangeHandelProductSize}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" required />
            </Form.Group>

            {/* <Form.Group as={Col}>
                            <Form.File id="file-upload" label="upload a file" />
                        </Form.Group> */}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>

    </>
  )
}

export default UpdateProduct