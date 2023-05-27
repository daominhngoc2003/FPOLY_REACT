import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/admin/Nav';

const ProductAdd = (props) => {
    console.log(props);
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({});
    const onHandleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputValue({ ...inputValue, [name]: value })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        props.onAdd(inputValue);
        navigate("/admin/products")
    }

    return (
        <div className='container'>
            {Nav()}
            <h2>Thêm sản phẩm</h2>
            <form action="" id='form-add' onSubmit={onHandleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id='name' name='name' onChange={onHandleChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="text" id='price' name='price' onChange={onHandleChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="discount" className="form-label">Discount</label>
                    <input type="text" id='discount' name='discount' onChange={onHandleChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="text" id='image' name='image' onChange={onHandleChange} className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="des" className="form-label">Desciption</label>
                    <textarea type="text" id='des' name='des' onChange={onHandleChange} className="form-control" />
                </div>
                <button className='btn btn-primary' >Thêm</button>
            </form>
        </div>
    )
}

export default ProductAdd