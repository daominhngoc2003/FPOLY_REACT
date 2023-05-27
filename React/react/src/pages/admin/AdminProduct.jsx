import React, { useEffect, useState } from 'react'
import Nav from '../../components/admin/Nav';

const AdminProduct = (props) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(props.products)
    }, [props])
    const Remove = (_id) => {
        props.onRemove(_id);
    }
    return (
        <div>
            {Nav()}
            <div><h2>Product List</h2></div>
            <a href='/admin/products/add' className='btn btn-primary'>Thêm</a>
            <table className='table'>
                <thead>
                    <tr>
                        <td>STT</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Discount</td>
                        <td>image</td>
                        <td>Description</td>
                        <td>Active</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((pro, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td><a href={"/products/" + pro._id}>{pro.name}</a></td>
                                <td>{pro.price}</td>
                                <td>{pro.discount}</td>
                                <td>{pro.image}</td>
                                <td>{pro.des}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => Remove(pro._id)}>Remove</button>
                                    <button className='btn btn-warning' ><a href={"products/" + pro._id + "/update"} className=" text-white">Edit</a></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AdminProduct