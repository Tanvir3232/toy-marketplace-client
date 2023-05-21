import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const sellerName = user.displayName;
        const sellerEmail = user.email;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const photoUrl = form.photoUrl.value;
        const description = form.description.value;
        const newToy = { name, category, sellerName, sellerEmail, price, rating, quantity, photoUrl, description };

        fetch('https://assignment-11-server-brown-sigma.vercel.app/add-toy', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Toy added Successfully')
                }
            })
    }
    return (
        <div>
             <Helmet>
                <title>SmartyToy  | Add Toy</title>
            </Helmet>
            <h1 className='text-4xl font-bold text-center my-5'>Add a Toy </h1>
            <form onSubmit={handleAddToy} className='md:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Toy Name</span>
                    </label>
                    <label className="input-group ">

                        <input type="text" name='name' placeholder="Toy name" className="input  input-info input-bordered w-full " />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Toy Category</span>
                    </label>
                    <select name='category' className="select select-info w-full ">
                        <option defaultValue=''>Select toy category</option>
                        <option value='math'>Math</option>
                        <option value='science'>Science</option>
                        <option value='language'>Language</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Seller Name</span>
                    </label>
                    <label className="input-group ">

                        <input type="text" defaultValue={user.displayName} name='sellerName' placeholder="Seller name" className="input  input-info input-bordered w-full " />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Seller Email</span>
                    </label>
                    <label className="input-group ">

                        <input type="text" defaultValue={user.email} readOnly name='sellerEmail' placeholder="Seller Email" className="input  input-info input-bordered w-full " />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Price</span>
                    </label>
                    <label className="input-group ">

                        <input type="text" name='price' placeholder="price" className="input  input-info input-bordered w-full " />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Rating</span>
                    </label>
                    <label className="input-group ">

                        <input type="text" name='rating' placeholder="Rating" className="input  input-info input-bordered w-full " />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Quantity</span>
                    </label>
                    <label className="input-group ">

                        <input type="text" name='quantity' placeholder="Quantity" className="input  input-info input-bordered w-full " />
                    </label>
                </div>
                <div className="form-control  w-full">
                    <label className="label">
                        <span className="label-text font-bold">Photo Url</span>
                    </label>


                    <input type="url" name='photoUrl' placeholder="Toy Photo Url" className="input  input-info input-bordered w-full " />

                </div>
                <div className="form-control col-span-2 w-full">
                    <label className="label">
                        <span className="label-text font-bold">Description</span>
                    </label>


                    <textarea name='description' className="textarea textarea-info w-full" placeholder="Bio"></textarea>

                </div>
                <div className="form-control col-span-2 w-full">
                    <input type="submit" className='btn btn-block btn-primary' value="ADD TOY" />

                </div>

            </form>
        </div>
    );
};

export default AddToy;