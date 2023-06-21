import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Category = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className='my-4 text-black bg-slate-50'>
            <p className='text-center text-4xl my-3 '>Category</p>
            <Tabs >
                <div className='text-center flex justify-center items-center bg-slate-50 text-black '>
                    <TabList>

                        <div className='tabs tabs-boxed my-4 bg-slate-50 text-black'>
                            <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "tab tab-active " : "tab"}><Tab><span className='text-black'>Puzzles</span></Tab></div>
                            <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "tab tab-active " : "tab"}><Tab><span className='text-black'>Pyramids</span></Tab></div>
                            <div onClick={() => toggleTab(3)} className={toggleState === 3 ? "tab tab-active " : "tab"}><Tab><span className='text-black'>Constraction Toys</span></Tab></div>
                        </div>
                    </TabList>
                </div>



                <div className={toggleState === 1 ? "" : "hidden"}>
                    <div className='flex gap-4 justify-center items-center bg-slate-50 text-black'>
                        <div className="card ml-1 md:w-1/4 bg-slate-50 text-black shadow-xl">
                            <figure><img className='p-4 rounded-lg' src="https://data.cubika.toys/assets/cache_image/media/product/Puzzles%20African%20animals/p-african-01_768x0_e6d.webp" alt="Shoes" /></figure>
                            <div className="card-body bg-slate-50 text-black">
                                <h2 className="card-title">African animals</h2>
                                <p className="card-title text-sm">price: 20$</p>
                                <p className="card-title text-sm">rating: 4.0</p>
                                <div className="card-actions ">
                                    <button className="btn btn-primary text-black">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card mr-1 md:w-1/4 bg-slate-50 text-black shadow-xl">
                            <figure><img className='p-4 rounded-lg' src="https://data.cubika.toys/assets/cache_image/media/product/Puzzles%208%20in%201%20Air%20Transport/puzzles-8-in-1-air-transport-01-2_768x0_e6d.webp" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title  text-black">Air Transport</h2>
                                <p className="card-title text-sm">price: 22$</p>
                                <p className="card-title text-sm">rating: 4.2</p>
                                <div className="card-actions ">
                                    <button className="btn btn-primary text-black">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={toggleState === 2 ? "" : "hidden"}>
                    <div className='flex gap-4 justify-center items-center'>
                        <div className="card ml-1 md:w-1/4 bg-slate-50 text-black shadow-xl">
                            <figure><img className='p-4 rounded-lg' src="https://data.cubika.toys/assets/cache_image/media/product/Pyramid/pyramid-01-2_768x0_e6d.webp" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title bg-slate-50 text-black">Pyramid</h2>
                                <p className="card-title text-sm">price: 30$</p>
                                <p className="card-title text-sm">rating: 4.3</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary text-black">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card mr-1 md:w-1/4 bg-slate-50 text-black shadow-xl">
                            <figure><img className='p-4 rounded-lg' src="https://data.cubika.toys/assets/cache_image/media/product/Tower%20LD-15/tower-ld-15-01_768x0_e6d.webp" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title bg-slate-50 text-black">Tower LD-15</h2>
                                <p className="card-title text-sm">price: 32$</p>
                                <p className="card-title text-sm">rating: 4.4</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary text-black">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={toggleState === 3 ? "" : "hidden"}>
                    <div className='flex gap-4 justify-center items-center'>
                        <div className="card ml-1 md:w-1/4 bg-slate-50 text-black shadow-xl">
                            <figure><img className='p-4 rounded-lg' src="https://data.cubika.toys/assets/cache_image/media/product/Wooden%20construction%20set%20Cubika%20World%20Africa/cw-africa-01_768x0_e6d.webp" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Africa</h2>
                                <p className="card-title text-sm">price: 38$</p>
                                <p className="card-title text-sm">rating: 4.5</p>
                                <div className="card-actions ">
                                    <button className="btn btn-primary text-black">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card mr-1 md:w-1/4 bg-slate-50 text-black shadow-xl">
                            <figure><img className='p-4 rounded-lg' src="https://data.cubika.toys/assets/cache_image/media/product/Wooden%20construction%20kit%20Watch/Watch_01_768x0_e6d.webp" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Watch</h2>
                                <p className="card-title text-sm">price: 40$</p>
                                <p className="card-title text-sm">rating: 4.7</p>
                                <div className="card-actions ">
                                    <button className="btn btn-primary text-black">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Tabs>
        </div>
    );
};

export default Category;