import React, { useState } from 'react'
// import Products from '../HomePage/Products'
import Cart from '../Cart/Cart'
import AddNewPorduct from '../HomePage/AddNewPorduct'
import DeleteProduct from '../HomePage/DeleteProduct'
import UpdateProduct from '../HomePage/UpdateProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import ProductCard from '../HomePage/ProductCard'

function CustomRouter(props) {

  const [searchText, setSearchText] = useState('')
  const [UpdateID, setUpdateID] = useState(null)

  const searchValue = (Value) => {
    setSearchText(Value)
    // console.log('CustomRouter', Value)
  }
  let getUpdateID = (item) => {
    setUpdateID(item)
  }
  console.log("CustomRouter", UpdateID)
  return (
    <div>
      <BrowserRouter>
        <NavBar searchText={searchValue} />
        <Routes>

          <Route path='/' element={<ProductCard searchValue={searchText} />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/add_item' element={<AddNewPorduct />}></Route>
          <Route path='/update' element={<DeleteProduct searchValue={searchText} UpdateID={getUpdateID} />}></Route>
          <Route path='/update_item' element={<UpdateProduct value={UpdateID} />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default CustomRouter