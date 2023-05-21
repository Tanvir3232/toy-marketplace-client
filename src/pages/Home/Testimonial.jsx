import test1 from '../../assets/images/test1.png'
import test2 from '../../assets/images/test2.png'
import test3 from '../../assets/images/test3.png'
const Testimonial = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>Testimonial</h1>
            <p className='text-center md:w-1/2 mx-auto my-2'>Educational toys that make a difference empowering children to learn, explore, and thrive with SmartyToys</p>
            <div className='grid md:grid-cols-3 gap-8'>
                <div className="card  bg-sky-100 shadow-xl "  data-aos="fade-up" data-aos-duration="1000" >
                    <div className="card-body">
                        
                        <p>I purchased the Science Lab Kit for my 10-year-old daughter, and it has been an incredible learning experience for her. The kit is packed with various experiments and materials, allowing her to explore different scientific concepts in a hands-on way. She has been able to conduct experiments on topics like chemistry, physics, and biology, which has greatly enhanced her understanding of these subjects. The instructions are clear and easy to follow, and the kit comes with a comprehensive guidebook that explains the scientific principles behind each experiment. I highly recommend this toy for any child interested in science</p>
                        <div className='flex md:flex-row flex-col gap-3 items-center'>
                            <img src={test1} className='rounded-full' alt="" />
                            <div>
                                <p className='font-bold'>Emily Johnson</p>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card  bg-sky-100 shadow-xl "  data-aos="fade-up" data-aos-duration="1000"> 
                    <div className="card-body">
                        
                        <p>As a parent, I'm always looking for educational toys that can keep my 6-year-old son engaged and entertained. The Building Blocks Set has been a fantastic choice for us. Not only does it provide hours of creative play, but it also helps develop my son's problem-solving and motor skills. The set comes with a variety of shapes and sizes, allowing him to build all sorts of structures. The blocks are sturdy and durable, and they easily connect together, making it easy for my son to build and rebuild as he pleases. It's amazing to see his imagination come to life through these building blocks. I highly recommend this toy for children who love to build and create</p>
                        <div className='flex md:flex-row flex-col gap-3 items-center'>
                            <img src={test2} className='rounded-full' alt="" />
                            <div>
                                <p className='font-bold'>Naima Khan</p>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card  bg-sky-100 shadow-xl "  data-aos="fade-up" data-aos-duration="1000"> 
                    <div className="card-body">
                        
                        <p>I recently purchased the Math Puzzle Game for my 8-year-old niece, and it has exceeded my expectations. The game consists of math-related puzzles and challenges that are both fun and educational. It has greatly improved my niece's math skills and her ability to think critically. The puzzles are designed in a way that gradually increases in difficulty, keeping her engaged and motivated to solve them. The game also encourages healthy competition as she tries to beat her own records and challenge her friends. I'm thrilled with the positive impact this toy has had on her math abilities and her confidence. It's a must-have for any child looking to enhance their math skills in an enjoyable way!</p>
                        <div className='flex md:flex-row flex-col gap-3 items-center'>
                            <img src={test3} className='rounded-full' alt="" />
                            <div>
                                <p className='font-bold'>Wazad Aklak</p>
                                <p>Customer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;