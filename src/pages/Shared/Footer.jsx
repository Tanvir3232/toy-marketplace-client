import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { FaBeer, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className=' bg-[#3B3B3B] text-neutral-content'>
      <div  className="footer p-10 ">
        <div>
          <img src={logo} className='h-12' alt="" />
          <p>Smarty Toys Ltd<br />Providing reliable toys since 2003</p>

        </div>
        <div>
             <span className="footer-title">Pages</span>
             <Link to='/'>Home</Link>       
             <Link to='/blog'>Blog</Link>       
             <Link to='/all-toy'>All Toys</Link>       
             <Link to='/my-toys'>My Toys</Link>       
        </div>
        <div>
             <span className="footer-title">Contact Us</span>
             <li className='list-none'>Moblie : 01732328171</li> 
             <li className='list-none'>Tel No: +880-123-4567890</li>
             <li className='list-none'>Email: tanvirahmadstudent@gmail.com</li>    
             <li className='list-none'>Address : Golapgonj, Sylhet, BD</li>     
             
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <Link to='https://www.facebook.com/' ><FaFacebook className='w-10 h-8'/></Link>
            <Link to='https://www.youtube.com/' ><FaYoutube className='w-10 h-8'/></Link>
            <Link to='https://www.twitter.com/' ><FaTwitter className='w-10 h-8'/></Link>
            <Link to='https://www.instagram.com/' ><FaInstagram className='w-10 h-8'/></Link>
            
          </div>
        </div>
      </div>
      <p className='text-center pb-4'>Copyright &copy; 2023 - All right reserved by Smarty Toys Ltd</p>
    </footer>

  );
};

export default Footer;