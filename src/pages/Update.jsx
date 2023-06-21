import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {

const loadedUser = useLoaderData();
console.log(loadedUser)




    return (
        <div>
            <div className='bg-slate-50 text-black'>
      <div className="hero  bg-slate-200 text-black">
        <form  >

          <div className="hero-content md:flex md:flex-row  flex-col">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Picture URL</span>
                    
                  </label>
                  <input type="text" name='photo' defaultValue={loadedUser?.photo} placeholder="Picture URL" className="input input-bordered" />
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
                  <input type="text" name='seller_name' placeholder="seller name"  className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">seller email</span>
                  </label>
                  <input type="email" name='email' placeholder="seller email"  className="input input-bordered" />
                </div>



              </div>
            </div>
            <div className=''>
              <div className='card flex-shrink-0 w-full max-w-sm shadow-2xl px-12 pb-4 bg-base-100'>
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

            <input className="btn btn-warning " type="submit" value="Update toy" />
          </div>
        </form>

      </div>

    </div>
        </div>
    );
};

export default Update;