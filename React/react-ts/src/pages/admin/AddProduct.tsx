import React from 'react'
import { useForm } from "react-hook-form";
import { IProduct } from '../../types/products';

type IProps = {
  onAdd: (product: IProduct) => void
}

const AddProduct = (props: IProps) => {
  const { register, handleSubmit, formState } = useForm();
  const onHandleSubmit = (data: any) => {
    props.onAdd(data);
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" {...register("name", { required: true })} />
        <input type="number" {...register("price", { required: true, min: 0 })} />
        <button type='submit'>Add new Product</button>
      </form>
    </div>
  )
}

export default AddProduct