import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { login, signInWithGoogle } = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toast.success("Welcome to SmartyToys");
                form.reset();
            })
            .catch(error => toast.error(error.message))
    }
    const handleSignInWithGoogle = (event) => {
        event.preventDefault();
        signInWithGoogle()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toast.success("Welcome to SmartyToys");
            })
            .catch(error => toast.error(error.message))
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

                        <button onClick={handleSignInWithGoogle} className="btn btn-outline btn-primary">google Sign In</button>

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