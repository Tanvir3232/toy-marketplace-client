import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToyRow from './MyToyRow';

const MyToys = () => {
    const {user} = useContext(AuthContext);
    console.log(user.email);
    const [toys,setToys]= useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/toys?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[user])
    
    return (
        <div>
             <h1 className="text-3xl font-bold text-center my-5">My Toys</h1>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                           
                            <th>SL</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                         toys.map((toy,i)=><MyToyRow
                           key={toy._id}
                           toy={toy}
                           i ={i}
                         ></MyToyRow>)
                       }
                    </tbody>
                   
                </table>
              
            </div>
        </div>
    );
};

export default MyToys;