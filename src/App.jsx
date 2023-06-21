import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';



const App = () => {
  return (
    <div className='md:w-full   bg-slate-50 text-black' >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

    </div>
  );
};

export default App;