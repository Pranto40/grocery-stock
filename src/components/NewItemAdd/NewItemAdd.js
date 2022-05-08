import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/firebase.init';

const NewItemAdd = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
  const url = `http://localhost:5000/item`;
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
        <form className='d-flex flex-column'onSubmit={handleSubmit(onSubmit)}>
          <input className='mb-2' type='text' value={user.email} required readOnly disabled/>
          <input className='mb-2' placeholder='Name' required autoComplete='off' {...register("supplierName", { required: true, maxLength: 20 })} />
          <input className='mb-2' name='name' placeholder='Product Name' required autoComplete='off' {...register("name", { required: true, maxLength: 20 })} />
          <input className='mb-2' name='quantity' placeholder='quantity' type="number" required autoComplete='off' {...register("quantity")} />
          <input className='mb-2' name='price' placeholder='Price' type="number" required autoComplete='off' {...register("price")} />
          <textarea className='mb-2' name='description' placeholder='Description' required autoComplete='off' {...register("description")} />
          <input className='mb-2' name='img' placeholder='Photo URL' type="text" required autoComplete='off' {...register("img")} />
          <button type='submit' className='btn'>add to item</button>
        </form>
    </div>
  )
}

export default NewItemAdd
