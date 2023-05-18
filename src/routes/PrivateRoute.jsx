import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <span className='flex justify-center items-center'><button className=" w-32 btn btn-square loading "> Loading...</button></span>
    }
    if(user){
        return children;
    }
};

export default PrivateRoute;