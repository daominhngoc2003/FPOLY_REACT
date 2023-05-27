import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/view/Header';

const ProductDetail = () => {
  const id = useParams();
  const [product, setproduct] = useState({});
  useEffect(() => {
    fetch("http://127.0.0.1:8000/products/" + id.id).then(res => res.json()).then(data => setproduct(data));
  }, [])
  return (

    <div>
      {Header()}
      <div class="container ">
        <div className='grid text-center text-danger'>Productsdetail</div>
        <div class="row row-cols-2">
          <div class="col text-center border">
            <div><img src={product.image} alt="" /></div>
          </div>
          <div class="col border">
            <div>{product.name}</div>
            <div className='flex'>
              <div>{product.price}đ</div>
              <div><del>{product.discount}đ</del></div>
            </div>
            <div>{product.des}</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail