import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import { IProduct } from '../../types/products';

const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

type Props = {
    onAdd: (pro: IProduct) => void
}

const ProductAdd = ({ onAdd }: Props) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        onAdd(values);
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

export default ProductAdd