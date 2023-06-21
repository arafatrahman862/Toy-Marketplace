import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleToyShow = () => {
    const toys = useLoaderData();
   
    console.log(toys)
    const {picture,toy_name,seller_name,seller_email,price,rating,available_quantity,detail_description} = toys;
    return (
        <div className='w-full text-black bg-slate-50 pl-96 my-20 space-y-3'>
           <div >
           <img className='w-[40%]' src={picture} alt="" />
           </div>
<p className='text-3xl font-bold   text-orange-700'>Toy Name: {toy_name}</p>
<p className='text-md font-semibold'>Seller Name: {seller_name}</p>
<p className='text-md font-semibold'>Seller Email: {seller_email}</p>
<p className='text-md font-semibold'>Price: ${price}</p>
<p className='text-md font-semibold'>Rating: {rating}</p>
<p className='text-md font-semibold'>Available Quantity: {available_quantity}</p>
<p className='text-md font-semibold'>Detail Description: {detail_description}</p>



        </div> 
    );
};

export default SingleToyShow;