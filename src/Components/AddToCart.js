import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { featchData } from './React-Redux/Action';
import NavBar from './NavBar';
import HorizontalSlider from './HorizontalSlider';
import ProductCard from './ProductCard';

function AddToCart() {

  const items = useSelector(state => state.products)
  const dispatch = useDispatch();
  console.log(items)

  useEffect(() => {
    dispatch(featchData())
  }, [])

  return (
    <div>

      <NavBar />
      <HorizontalSlider />
      <ProductCard />

    </div>
  )
}

export default AddToCart