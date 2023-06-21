import React from 'react';
import { Link } from 'react-router-dom';

const ShowAllToys = ({toys}) => {
    const {toy_name,seller_name,available_quantity,price,sub_category,_id} = toys;
    // console.log(toys)
    return (
        <div className='text-black bg-slate-50'>
             <div className="md:overflow-x-auto md:w-full bg-slate-50 text-black w-full">
  <table className="md:table w-full  text-white  text-center flex justify-center items-center">
    
     
       <tr >
       
        <td>Toy Name: {toy_name}</td>
        <td>Sub Category: {sub_category}</td>
        <td>Seller Name: {seller_name}</td>
        <td>Available Quantity: {available_quantity}</td>
        <td>Price: ${price}</td>
        <td><Link to={`/singleToyShow/${_id}`}><button className='btn'>View Details</button></Link></td>
       </tr>
       
    
  </table>
</div>
        </div>
    );
};

export default ShowAllToys;