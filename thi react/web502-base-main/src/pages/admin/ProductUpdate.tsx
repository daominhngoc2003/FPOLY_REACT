import { Button, Form, Input, Select } from 'antd';
import React, { useEffect } from 'react';
import { IProduct } from '../../types/products';
import { useParams } from "react-router-dom";
const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

type Props = {
    onUpdate: (pro: IProduct) => void,
    products: IProduct[]
}
const ProductUpdate = ({ onUpdate, products }: Props) => {
    const { id } = useParams();
    const [form] = Form.useForm();
    useEffect(() => {
        const newpro = products.find((pro) => pro.id === Number(id))
        form.setFieldsValue(newpro);
    }, [products, id])

    const onFinish = (values: any) => {
        const proUpdate = {
            id,
            ...values
        }
        onUpdate(proUpdate);
    };
    return (
        <div>
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
            >
                <Form.Item name="name" label="name" rules={[{ required: true }, {
                    pattern: /^[^\s].*$/,
                    message: 'Price should not start with a space',
                }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="price" label="price" rules={[{ required: true }, {
                    pattern: /^[^\s].*$/,
                    message: 'Price should not start with a space',
                }]}>
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default ProductUpdate