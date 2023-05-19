import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";

const AllToy = () => {
    const toys = useLoaderData();
    console.log(toys);
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-5">All Toys</h1>
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
                         toys.map(toy=><ToyRow
                            key = {toy._id}
                            toy = {toy}
                         ></ToyRow>)
                       }
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default AllToy;