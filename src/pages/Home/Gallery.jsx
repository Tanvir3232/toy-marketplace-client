import gallery1 from '../../assets/images/g1.png'
import gallery2 from '../../assets/images/g2.png'
import gallery3 from '../../assets/images/g3.png'
import gallery4 from '../../assets/images/g4.png'

const Gallery = () => {
    return (
        <div className='mt-12'>
            <h1 className='text-5xl font-bold text-center my-8'>Toys Gallery</h1>
            <div className='flex  flex-col md:flex-row gap-6 px-5'>
                <div  data-aos="flip-left" data-aos-duration="1000"  className="card md:w-1/4 hover:scale-110 hover:-rotate-3 delay-150  bg-base-100 shadow-xl image-full">
                    <figure><img src={gallery1} className='w-full' alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-white font-bold ">Language Wizards</h2>
                        <p>Mastering the Art of Communication!</p>
                        
                    </div>
                </div>
                <div  data-aos="flip-left" data-aos-duration="1000" className="card md:w-1/4 hover:scale-110  hover:-rotate-3 delay-150 bg-base-100 shadow-xl image-full">
                    <figure><img src={gallery2} className='w-full' alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-white font-bold ">Creative Builders</h2>
                        <p>Building Imagination Brick by Brick!</p>

                    </div>
                </div>
                <div  data-aos="flip-left" data-aos-duration="1000" className="card md:w-1/4 hover:-rotate-3 hover:scale-110 delay-150 bg-base-100 shadow-xl image-full">
                    <figure><img src={gallery3} className='w-full' alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-white font-bold ">STEM Explorers</h2>
                        <p>Unleash the Power of Science and Technology!</p>

                    </div>
                </div>
                <div  data-aos="flip-left" data-aos-duration="1000" className="card md:w-1/4 hover:-rotate-3 hover:scale-110 delay-150 bg-base-100 shadow-xl image-full">
                    <figure><img src={gallery4} className='w-full' alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="text-white font-bold ">Nature Explorers</h2>
                        <p>Connecting Kids with the Natural World!</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;