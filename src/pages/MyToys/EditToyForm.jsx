import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const EditToyForm = () => {
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    console.log(id);
    const oldToy = useLoaderData();
    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const photoUrl = form.photoUrl.value;
        const description = form.description.value;
        const updateToy = { name, category, price, rating, quantity, photoUrl, description };

        fetch(`https://assignment-11-server-brown-sigma.vercel.app/toy/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire(
                        'Successful!',
                        'Toy Successfully updated!',
                        'success'
                      )
                }
            })
    }
    return (
        <div>
            <Helmet>
                <title>SmartyToy  | Edit Toy</title>
            </Helmet>
            <h1 className='text-4xl font-bold text-center my-5'>Update a Toy </h1>
            <form onSubmit={handleUpdateToy} className='md:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className="form-control col-span-2 md:col-span-1">
                    <label className="label">
                        <span className="label-text font-bold">Toy Name</span>
                    </label>
                    <label className="input-group ">

                        <input type="text" defaultValue={oldToy.name} name='name' placeholder="Toy name" className="input  input-info input-bordered w-full " />
                    </label>
                </div>
                <div className="form-control col-span-2 md:col-span-1">
                    <label className="label">
                        <span className="label-text font-bold">Toy Category</span>
                    </label>
                    <select defaultValue={oldToy.category} name='category' className="select select-info w-full ">
                        <option defaultValue=''>Select toy category</option>
                        <option value='math'>Math</option>
                        <option value='science'>Science</option>
                        <option value='language'>Language</option>
                    </select>
                </div>
                <div className="form-control col-span-2 md:col-span-1">
                    <label className="label">
                        <span className="label-text font-bold">Seller Name</span>
                    </label>
                    <label className="input-group ">

                        <input type="text" defaultValue={user.displayName} readOnly name='sellerName' placeholder="Seller name" className="input  input-info input-bordered w-full " />
                    </label>
                </div>
                <div className="form-control col-span-2 md:col-span-1">
                    <label className="label">
                        <span className="label-text font-bold">Seller Email</span>
                    </label>
                    <label className="input-group ">

                        <input type="text" defaultValue={user.email} readOnly name='sellerEmail' placeholder="Seller Email" className="input  input-info input-bordered w-full " />
                    </label>
                </div>
                <div className="form-control col-span-2 md:col-span-1">
                    <label className="label">
                        <span className="label-text font-bold">price</span>
                    </label>
                    <label className="input-group ">

                        <input type="text"  defaultValue={oldToy.price} name='price' placeholder="price" className="input  input-info input-bordered w-full " />
                    </label>
                </div>
                <div className="form-control col-span-2 md:col-span-1">
                    <label className="label">
                        <span className="label-text font-bold">Rating</span>
                    </label>
                    <label className="input-group ">

                        <input type="text"  defaultValue={oldToy.rating} name='rating' placeholder="Rating" className="input  input-info input-bordered w-full " />
                    </label>
                </div>
                <div className="form-control col-span-2 md:col-span-1">
                    <label className="label">
                        <span className="label-text font-bold">Quantity</span>
                    </label>
                    <label className="input-group ">

                        <input type="text"  defaultValue={oldToy.quantity} name='quantity' placeholder="Quantity" className="input  input-info input-bordered w-full " />
                    </label>
                </div>
                <div className="form-control col-span-2 md:col-span-1 ">
                    <label className="label">
                        <span className="label-text font-bold">Photo Url</span>
                    </label>


                    <input type="url" defaultValue={oldToy.photoUrl} name='photoUrl' placeholder="Toy Photo Url" className="input  input-info input-bordered w-full " />

                </div>
                <div className="form-control col-span-2 w-full">
                    <label className="label">
                        <span className="label-text font-bold">Description</span>
                    </label>


                    <textarea name='description' className="textarea textarea-info w-full" placeholder="Bio" defaultValue={oldToy.description}></textarea>

                </div>
                <div className="form-control col-span-2 w-full">
                    <input type="submit" className='btn btn-block btn-primary' value="UPDATE TOY" />

                </div>

            </form>
        </div>
    );
};

export default EditToyForm;