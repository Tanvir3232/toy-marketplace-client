import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const Register = () => {
    const {register,saveProfile} = useContext(AuthContext);
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        register(email,password)
        .then((result)=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            saveUserProfile(name,photo);
            form.reset();
            
        })
        .catch((error)=>{
            toast.error(error.message)
        })
    }
    const saveUserProfile = (name,photo)=>{
        saveProfile(name,photo)
        .then(()=>{toast.success('Welcome! You registration is successfully done')})
        .catch((error)=>toast.error(error.message))

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>SmartyToy  | Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Sign Up</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" required name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" required name='photo' placeholder="enter your photo url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <label className="label">
                            <span> already have an account?  <Link to="/login" className="label-text-alt text-base text-blue-600 link link-hover">Login</Link></span>
                        </label>
                       
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;