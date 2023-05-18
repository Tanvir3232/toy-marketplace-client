
import React from 'react';
import {  FaRegTimesCircle } from 'react-icons/fa';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    let errorData = useRouteError();
    const {error,status,statusText} =errorData;
    console.log(statusText);
    return (
        <div className='mx-auto text-center shadow-2xl border-2 border-red-400  rounded-md p-6 w-64 md:w-96 my-20 md:my-60'>
            <figure className='mx-auto w-10 md:w-20'>
                <FaRegTimesCircle className='md:w-20 md:h-20 h-10 w-10 text-red-500 rounded-full'></FaRegTimesCircle>
              
            </figure>
            <h1 className='font-bold text-4xl'>{status}</h1>
            <p className='font-medium text-2xl my-2 text-red-700'>{statusText}</p>
            <p className='text-xl'>{error.message}</p>
            <Link to='/'>  <button className='btn btn-outline btn-primary mt-3'>Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;