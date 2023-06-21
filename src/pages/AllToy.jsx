import React, { useEffect, useState } from 'react';
import ShowAllToys from './ShowAllToys';

const AllToy = () => {

    const [allToys, setallToys] = useState([]);
    
    useEffect(()=>{
        fetch('https://assingment11-server-arafatrahman862.vercel.app/alltoys')
        .then(res => res.json())
        .then(data => setallToys(data))
    },[])
    // console.log(allToys[0]._id)
    return (
        <div className='text-white w-1/2  md:w-full md:my-16 text-center '>
            <p className='text-4xl text-center text-bold text-black mb-8'>All Toys</p>

<div  >
<table className="table   md:w-full w-full bg-slate-50 text-black  text-center ">
    {/* head */}
    
    <tbody className='bg-slate-50 text-black w-full'>
        {
            allToys.map(toys => <ShowAllToys
            key={toys._id}
            toys={toys}
            ></ShowAllToys>)
        }
      
    </tbody>
  </table>
</div>
           
        </div>
    );
};

export default AllToy;