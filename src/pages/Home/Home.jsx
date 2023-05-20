import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import Toys from './Toys';
import Testimonial from './Testimonial';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Toys></Toys>
            <Testimonial></Testimonial>
            <Services></Services>
        </div>
    );
};

export default Home;