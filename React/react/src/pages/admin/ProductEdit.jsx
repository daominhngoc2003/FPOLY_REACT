import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../../components/admin/Nav';


const ProductEdit = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const currenProduct = props.products.find(item => item._id == id);
    setProduct(currenProduct);
  }, [props])

  const [inputValue, setInputValue] = useState({});
  const onHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value })
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    props.onUpdate({ ...product, ...inputValue });
    navigate("/admin/products")
  }
  return (
    <div>
      {Nav()}
      <div><h2>Sửa sản phẩm</h2></div>
      <form action="" onSubmit={onHandleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id='name' name='name' defaultValue={product?.name} onChange={onHandleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input type="text" id='price' name='price' defaultValue={product?.price} onChange={onHandleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="des" className="form-label">Desciption</label>
          <input type="text" id='des' name='des' defaultValue={product?.des} onChange={onHandleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="discount" className="form-label">Discount</label>
          <input type="text" id='discount' name='discount' defaultValue={product?.discount} onChange={onHandleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <textarea type="text" id='image' name='image' defaultValue={product?.image} onChange={onHandleChange} className="form-control" />
        </div>
        <button className="btn btn-warning">Lưu</button>
      </form>
    </div>
  )
}

export default ProductEdit