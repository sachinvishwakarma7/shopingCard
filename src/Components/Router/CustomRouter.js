import React, { useState } from 'react'
import Products from '../HomePage/Products'
import Cart from '../Cart/Cart'
import AddNewPorduct from '../HomePage/AddNewPorduct'
import DeleteProduct from '../HomePage/DeleteProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

function CustomRouter(props) {

  const [searchText, setSearchText] = useState('')

  let searchValue = (Value) => {
    setSearchText(Value)
    // console.log('CustomRouter', Value)
  }
  return (
    <div>
      <BrowserRouter>
        <NavBar searchText={searchValue} />
        <Routes>

          <Route path='/' element={<Products searchValue={searchText} />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/add_product' element={<AddNewPorduct />}></Route>
          <Route path='/delete_product' element={<DeleteProduct />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default CustomRouter