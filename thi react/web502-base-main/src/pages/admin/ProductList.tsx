import { Button, message, Popconfirm } from 'antd';
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../types/products';
import { Link } from "react-router-dom";


type Props = {
    products: IProduct[]
    onRemove: (id: number) => void
}

const ProductList = ({ products, onRemove }: Props) => {
    const confirm = (id: number) => {
        onRemove(id);
    }

    const columns: ColumnsType<IProduct> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Space size="middle">
                    <Button><Link to={"/admin/products/" + record.id + "/update"}>Update</Link></Button>
                    <Popconfirm
                        placement="top"
                        title={"Bạn muốn xóa?"}
                        description={"Xóa là mất"}
                        onConfirm={() => confirm(record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button>Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];
    return (
        <div><Table columns={columns} dataSource={products} /></div>
    )
}

export default ProductList