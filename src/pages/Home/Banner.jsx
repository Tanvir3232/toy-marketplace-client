import banner from '../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row gap-6 items-center'>

            <div className='md:w-1/3' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <h1 className='md:text-5xl text-2xl font-bold my-5'>Discover the Magic of Learning with Engaging Educational Toys</h1>
                <p>Unlock the Joy of Learning Through Engaging Toys that Spark Curiosity and Foster Growth, Igniting a Lifelong Love for Knowledge!</p>
            </div>
            <img data-aos="fade-up" data-aos-duration="1000" src={banner} className='md:w-2/3 rounded-md' alt="" />
        </div>
    );
};

export default Banner;