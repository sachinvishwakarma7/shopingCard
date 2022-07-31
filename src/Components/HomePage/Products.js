import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { featchData } from '../React-Redux/Action';
import HorizontalSlider from './HorizontalSlider';
import ProductCard from './ProductCard';

function Products({ searchValue }) {
  const items = useSelector(state => state.items.products)
  const dispatch = useDispatch();
  // console.log('Products',props.searchText)

  useEffect(() => {
    dispatch(featchData())
  }, [dispatch])

  // console.log('Products', searchValue)
  return (
    <div>

      <HorizontalSlider />
      <ProductCard items={items} searchValue={searchValue} />

    </div>
  )
}

export default Products