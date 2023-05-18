import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
             <Header></Header>
             <Outlet></Outlet>
             <Footer></Footer>
             <Toaster />
        </div>
    );
};

export default Main;