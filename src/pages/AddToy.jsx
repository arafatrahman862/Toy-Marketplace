import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const AddToy = () => {

  const { user } = useContext(AuthContext);

  const handleAddToys = event => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const seller_name = form.seller_name.value;
    const email = user?.email;
    const price = form.price.value;
    const sub_category = form.sub_category.value;
    const rating = form.rating.value;
    const available_quantity = form.available_quantity.value;
    const detail_description = form.name.value;
    const name = form.name.value;

    const adding = {
      name,
      detail_description,
      available_quantity,
      rating,
      sub_category,
      price,
       email,
      seller_name,
      photo
    }
    console.log(adding)
    fetch('https://assingment11-server-arafatrahman862.vercel.app/addtoys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(adding)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
          alert('Toy added succcessfully')
        }
      })



  }


  return (
    <div className='bg-slate-50 text-white'>
      <div className="hero  bg-slate-200 text-white">
        <form onSubmit={handleAddToys} >

          <div className="hero-content md:flex md:flex-row  flex-col">
            <div className="card md:flex-shrink-0 w-full md:max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Picture URL</span>
                  </label>
                  <input type="text" name='photo' placeholder="Picture URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">seller name</span>
                  </label>
                  <input type="text" name='seller_name' placeholder="seller name" defaultValue={user?.seller_name} className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">seller email</span>
                  </label>
                  <input type="email" name='email' placeholder="seller email" defaultValue={user?.email} className="input input-bordered" />
                </div>



              </div>
            </div>
            <div className=''>
              <div className='card md:flex-shrink-0 w-full max-w-sm shadow-2xl px-12 pb-4 bg-base-100'>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sub-category</span>
                  </label>
                  <input type="text" name='sub_category' placeholder="Sub-category" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Available quantity
                    </span>
                  </label>
                  <input type="text" name='available_quantity' placeholder="Available quantity" className="input input-bordered" />

                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Detail description

                    </span>
                  </label>
                  <input type="text" name='detail_description' placeholder="Detail description" className="input input-bordered" />

                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center  items-center form-control my-2 '>

            <input className="btn btn-warning " type="submit" value="Add Toy" />
          </div>
        </form>

      </div>

    </div>
  );
};

export default AddToy;