import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToyRow from './MyToyRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch(`https://assignment-11-server-brown-sigma.vercel.app/toys?email=${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])
    const handleDeleteToy = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-server-brown-sigma.vercel.app/toy/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            const remaining = toys.filter(t => t._id !== id);
                            setToys(remaining);
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    const handleSelect = event =>{
        const sortType = event.target.value;
        console.log(sortType);
        fetch(`https://assignment-11-server-brown-sigma.vercel.app/toys?email=${user.email}&sortType=${sortType}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-5">My Toys</h1>
            
                <select  onChange={handleSelect} className="select select-bordered w-36">
                    <option defaultValue=''>sort by rating</option>
                    <option value='low'>low to high</option>
                    <option value='high'>high to low</option>
                </select>
          
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
                            toys.map((toy, i) => <MyToyRow
                                key={toy._id}
                                toy={toy}
                                i={i}
                                handleDeleteToy={handleDeleteToy}
                            ></MyToyRow>)
                        }
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default MyToys;