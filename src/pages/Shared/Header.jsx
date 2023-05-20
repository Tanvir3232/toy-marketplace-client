import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => toast.error(error.message))
    }
    return (
        <div className="navbar bg-[#3B3B3B] text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#3B3B3B] rounded-box w-52">
                        <li> <Link to='/'>Home</Link> </li>
                        <li><Link to='/all-toy'>All Toys</Link> </li>
                        {user && <li> <Link to='/my-toys'>My Toys</Link></li>}
                        {user && <li><Link to='/add-toy'>Add Toy</Link> </li>}
                        <li> <Link to="/blog">Blogs</Link></li>
                        {
                            user ? <div className='flex gap-2 items-center'><img src={user.photoURL} title={user.displayName} className='rounded-full w-12 h-12 ' alt="" /> <button onClick={handleLogOut} className='btn btn-error'>Logout</button></div> :
                                <> <Link to="/login" className='btn btn-primary mb-2'>Login</Link>
                                    <Link to="/register" className='btn btn-warning'>Sign Up</Link></>
                        }
                    </ul>
                </div>
                <Link to='/'><img src={logo} className='h-16' alt="" /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li> <Link to='/'>Home</Link> </li>
                    <li><Link to='/all-toy'>All Toys</Link> </li>
                    {user && <li> <Link to='/my-toys'>My Toys</Link></li>}
                    {user && <li><Link to='/add-toy'>Add Toy</Link> </li>}
                    <li> <Link to="/blog">Blogs</Link></li>
                    {
                        user ? <div className='flex gap-2 items-center'><img src={user.photoURL} title={user.displayName} className='rounded-full w-12 h-12 ' alt="" /> <button onClick={handleLogOut} className='btn btn-error'>Logout</button></div> :
                            <> <Link to="/login" className='btn btn-primary mr-2'>Login</Link>
                                <Link to="/register" className='btn btn-warning'>Sign Up</Link></>
                    }
                </ul>
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Header;