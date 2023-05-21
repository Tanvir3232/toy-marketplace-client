import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";
import { useState } from "react";



const AllToy = () => {
    const allToys = useLoaderData();
    const [toys,setToys] = useState(allToys);
    const handleSearch = event =>{
        event.preventDefault();
        const searchText = event.target.searchText.value;
        console.log(searchText)
        fetch(`https://assignment-11-server-brown-sigma.vercel.app/toys?name=${searchText}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-5">All Toys</h1>
            <div className="md:w-1/5 mx-auto my-5">
                <form onSubmit={handleSearch} className="input-group w-full">
                    <input type="text" name="searchText" placeholder="search by toy name" className="input input-bordered" />
                    <button type="submit" className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </form>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>

                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}
                            ></ToyRow>)
                        }
                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default AllToy;