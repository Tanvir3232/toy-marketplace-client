import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
             <Header></Header>
             <div className='min-h-[calc(100vh-120px)] md:mx-12 mx-3 my-5'>
                <Outlet></Outlet>
             </div>
             <Footer></Footer>
             <Toaster />
        </div>
    );
};

export default Main;