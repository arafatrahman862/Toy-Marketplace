import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext); 
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }
  
    return (
        <div className='bg-lime-300 text-orange-800    md:px-20 rounded'>
            <div className="navbar bg-lime-300 ">
                <div className="md:flex-1 flex flex-col md:flex-row ">
                    <img className='rounded-full w-10 md:w-14' src="https://www.shutterstock.com/image-vector/cute-vector-toy-shop-logo-260nw-1628635720.jpg" alt="" />
                    <a className="btn btn-ghost normal-case text-xl text-center"><span className='md:text-5xl text-red-950 pr-1'>Toy </span> <span className='md:text-3xl text-yellow-700'>House</span></a>
                </div>
                <div className="  text-center">
                    
                    <div className='md:px-1 space-x-2 md:space-x-3 flex'>
                    <Link to="/"><p> Home</p></Link>
                        <Link to="alltoy"><p> All Toys</p></Link>
                        <Link to="/mytoy"><p>My Toys</p></Link>
                        <Link to="/addtoy"><p>Add A Toy</p></Link>
                        <Link to="/blog"><p>Blogs</p></Link>
                        <div>{
                            user?.email ? <div className='md:flex  md:gap-3 justify-center items-center text-center'><img className='rounded-full w-10 ' src={user.photoURL} alt="" />
                            <button onClick={handleLogOut}>LogOut</button>
                            </div> :
                            <Link to="/login"><p>Login</p></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;