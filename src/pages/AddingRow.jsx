import React from 'react';
import { Link } from 'react-router-dom';

const AddingRow = ({ adding, handleDelete, handleAddingConfirm }) => {
    const { name, seller_name, seller_email, available_quantity, rating, sub_category, price, detail_description, _id, status } = adding;



    return (
        <div className='text-black '>
            {/* row 1 */}
            <tr >
                <td>Name: {name}</td>
                <td>Seller Name: {seller_name}</td>
                <td>Seller Email: {seller_email}</td>
                <td>Available Quantity: {available_quantity}</td>
                <td>Rating: {rating}</td>
                <td>Sub Category: {sub_category}</td>
                <td>Price: ${price}</td>
                <td>Detail Description: {detail_description}</td>
                <td><button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button></td>
                <td>
                    {/* <span className='font-bold text-blue-600'>Confirmed</span>  */}
                    {/* <button onClick={() => handleAddingConfirm(_id)} className='btn'>Update</button> */}
                    <Link to={`/update/${_id}`}><button  className='btn'>Update</button></Link>
                </td>
            </tr>
        </div>
    );
};

export default AddingRow;