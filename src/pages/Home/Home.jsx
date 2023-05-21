import Banner from './Banner';
import Gallery from './Gallery';
import Toys from './Toys';
import Testimonial from './Testimonial';
import Services from './Services';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SmartyToy  | Home</title>
            </Helmet>
            <Banner></Banner>
            <Gallery></Gallery>
            <Toys></Toys>
            <Testimonial></Testimonial>
            <Services></Services>
        </div>
    );
};

export default Home;