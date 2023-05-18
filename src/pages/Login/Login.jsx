import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event=>{
        event.preventDefault();
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <button  className="btn btn-outline btn-primary">google Sign In</button>
                        
                        <label className="label ">
                            <span> new to Smarty Toys? <Link to="/register" className="label-text-alt text-base text-blue-600 link link-hover">register</Link></span>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default Login;