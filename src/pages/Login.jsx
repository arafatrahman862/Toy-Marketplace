import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.log(error))
    }

    const { singIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;

        const password = form.password.value;
        // console.log(email, password)
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen  text-black bg-slate-50">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Login</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Log in" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to Toy House? <Link className='text-orange-700 font-bold' to="/singup">Sing Up</Link></p>
                    </div>
                    <div>
                        <button onClick={handleGoogleLogIn} className="btn btn-outline btn-warning">Sing in with Google</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;