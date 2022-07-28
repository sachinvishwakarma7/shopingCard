import React from 'react'
import Products from '../HomePage/Products'
import Cart from '../Cart/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'

function CustomRouter() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path='/' element={<Products />}></Route>
          <Route path='/cart' element={<Cart />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default CustomRouter