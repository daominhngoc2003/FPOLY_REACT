import React, { useEffect, useState } from 'react'
import { IProduct } from '../../types/products';

type IProps = {
    products: IProduct[],
    onRemove: (_id:number) => void
}

const AdminProduct = (props: IProps) => {
    const [products, setproducts] = useState<IProduct[]>([]);
    useEffect(()=>{
        setproducts(props.products);
    },[props])
    const onRemove = (_id:number)=>{
        props.onRemove(_id);
    }
  return (
    <div>
        {products.map((pro,index)=>{
            return (
                <div key={index}>
                    <div>{pro.name}</div>
                    <div>{pro.price}</div>
                    <div><button onClick={()=> onRemove(pro._id)}>Xóa</button></div>
                    <div>{pro.price}</div>
                </div>
            )
        })}
    </div>
  )
}

export default AdminProduct