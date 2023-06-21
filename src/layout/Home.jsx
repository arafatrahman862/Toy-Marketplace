import React from 'react';


import Category from '../pages/Category';
import Header from '../pages/Header';
import Review from '../pages/Review';

const Home = () => {
    return (
        <div className='my-8 bg-slate-50 text-black'>
            <Header></Header>
            <Category></Category>
            <div className='my-12 bg-slate-50 text-black'>
            <p className='text-center text-4xl my-10 '>Some pictures of toys category</p>
                <div className='flex md:gap-32 md:mx-40'>
                    <div >
                        <div className='md:w-24 w-16'>
                        <img src="https://data.cubika.toys/media/categories/puzzles.svg" alt="" />
                        </div>
                        <p className='text-center'>Puzzles</p>
                    </div>
                    <div>
                        <div className='md:w-24 w-16'>
                        <img src="https://data.cubika.toys/media/categories/pyramids.svg" alt="" />
                        </div>
                        <p className='text-center'>Pyramids</p>
                    </div>
                    <div >
                        <div className='md:w-24 w-16'>
                        <img src="https://data.cubika.toys/media/categories/constructor.svg" alt="" />
                        </div>
                        <p className='text-center'>Constraction Toys</p>
                    </div>
                    <div >
                        <div>
                        <div className='md:w-24 w-16'>
                        <img src="https://data.cubika.toys/media/categories/vehicles.svg" alt="" />
                        </div>
                        <p className='text-center'>Vehicles</p>
                        </div>
                    </div>
                    <div>
                        <div className='md:w-24 w-16'>
                        <img src="https://data.cubika.toys/media/categories/other.svg" alt="" />
                        </div>
                        <p className='text-center'>Other Toys</p>
                    </div>
                </div>
            </div>
            <Review></Review>
        </div>
    );
};

export default Home;