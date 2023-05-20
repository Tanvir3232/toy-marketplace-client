import free from '../../assets/images/free.png'
import time  from '../../assets/images/time.png'
import money from '../../assets/images/money.png'
const Services = () => {
    return (
        <div className="my-8">
            <h1 className='text-5xl font-bold text-center '>  Exceptional Services</h1>
            <div className="grid md:grid-cols-3 ">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                       <img src={free} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Free Shipping</h2>
                        <p>We understand the value of convenience and affordability when it comes to online shopping. That's why we proudly offer free shipping on all orders. No matter where you are located, you can enjoy the convenience of having your chosen educational toys delivered right to your doorstep without any additional shipping charges. We strive to make your shopping experience as seamless and enjoyable as possible.</p>
                        
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                       <img src={time} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Support 24/7</h2>
                        <p> At our toy website, customer satisfaction is our top priority. We believe in providing exceptional customer support to ensure that your queries and concerns are addressed promptly and efficiently. Our dedicated support team is always ready to assist you, whether you have questions about product details, order tracking, or any other inquiries. We are committed to providing a pleasant and personalized shopping experience for every customer.</p>
                        
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                       <img src={money} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Money Return</h2>
                        <p> We want you to feel confident and satisfied with your purchase. In the rare event that you are not completely happy with your order, we offer a hassle-free money return policy. If the product you receive does not meet your expectations or arrives damaged or defective, you can request a return and receive a full refund. We believe in transparency and fairness, ensuring that your shopping experience is risk-free and enjoyable.</p>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;