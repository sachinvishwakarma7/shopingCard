import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { featchData } from './React-Redux/Action';
import NavBar from './NavBar';
import HorizontalSlider from './HorizontalSlider';
import ProductCard from './ProductCard';

function Products() {

  const items = useSelector(state => state.items.products)
  const dispatch = useDispatch();
  console.log(items)

  useEffect(() => {
    dispatch(featchData())
  }, [])

  return (
    <div>

      <NavBar />
      <HorizontalSlider />
      <ProductCard items={items}/>

    </div>
  )
}

export default Products