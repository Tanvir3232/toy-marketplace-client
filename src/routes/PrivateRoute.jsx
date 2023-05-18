import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <span className='flex justify-center items-center'><button className=" w-32 btn btn-square loading "> Loading...</button></span>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace={true}></Navigate>
};

export default PrivateRoute;