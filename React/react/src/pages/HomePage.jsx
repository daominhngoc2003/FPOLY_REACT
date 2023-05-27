import React, { useEffect, useState } from 'react'
import Header from '../components/view/Header'

const HomePage = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(props.products)
  }, [props])
  return (
    <div>
      {Header()}
      <div className="container mt-5">
        <div className="row">
          {products.map((pro) => {
            return (
              <div key={pro._id} className="col-lg-3 Small shadow-sm ">
                <div className=' p-3'>
                  <div className='wrap-img'>
                    <img src={pro.image} alt="" />
                  </div>
                  <div>
                    <h4><a href={"/products/" + pro._id}>{pro.name}</a></h4>
                    <div className='flex justify-between'>
                      <p className='bg bg-danger text-white rounded-pill px-2 py-1'>{pro.price} đ</p>
                      <del>{pro.discount} đ</del>
                    </div>
                    <div className='text-center btn btn-'>
                      <a href={"/products/" + pro._id} className='btn btn-danger'>Mua ngay</a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}

export default HomePage