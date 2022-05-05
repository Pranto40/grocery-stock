import React from 'react';
import { useForm } from "react-hook-form";

const NewItemAdd = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
  console.log(data);
  const url = 'http://localhost:5000/products';
  fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(result => {
      console.log(result);
    })
  };
  return (
    <div className='w-50 mx-auto my-5'>
        <h2 className='text-center my-5'>add to Products</h2>
        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
          <input className='mb-2' placeholder='Name' {...register("supplierName", { required: true, maxLength: 20 })} />
          <input className='mb-2' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
          <input className='mb-2' placeholder='quantity' type="number" {...register("quantity")} />
          <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
          <textarea className='mb-2' placeholder='Description' {...register("description")} />
          <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
          <button type='submit' className='btn'>add to item</button>
        </form>
    </div>
  )
}

export default NewItemAdd
