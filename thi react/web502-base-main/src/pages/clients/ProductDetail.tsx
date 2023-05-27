import { Button, Form, Input, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { IProduct } from '../../types/products';
import { useParams } from "react-router-dom";
const { Option } = Select;

type Props = {
    products: IProduct[]
}

const ProductDetail = ({ products }: Props) => {
    const { id } = useParams();
    const [produc, setpro] = useState<IProduct>();
    useEffect(() => {
        const newpro = products.find((pro) => pro.id === Number(id))
        setpro(newpro);
    }, [products, id])

    return (
        <div>{produc?.name}{produc?.price}</div>
    )
}

export default ProductDetail