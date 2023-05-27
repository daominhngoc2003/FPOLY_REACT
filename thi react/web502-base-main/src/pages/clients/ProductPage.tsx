import { Button, message, Popconfirm } from 'antd';
import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { IProduct } from '../../types/products';
import { Link } from "react-router-dom";
import { Col, Divider, Row } from 'antd';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
type Props = {
    products: IProduct[]
}

const ProductPage = ({ products }: Props) => {
    return (
        <div>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {products.map((pro, index) => {
                    return (
                        <Col key={index} className="gutter-row" span={6}>
                            <div style={style}><Link to={"/products/" + pro.id}>{pro.name}</Link></div>
                            <div style={style}>{pro.price}</div>
                        </Col>
                    )
                })}

            </Row>
        </div>
    )
}

export default ProductPage