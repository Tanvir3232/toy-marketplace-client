import React from 'react';

const AddToy = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-5'>Add a Toy </h1>
            <form className='md:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
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
                        <option disabled selected>Select toy category</option>
                        <option>Math</option>
                        <option>Science</option>
                        <option>Language</option>
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Seller Name</span>
                    </label>
                    <label className="input-group ">

                        <input type="text" name='sellerName' placeholder="Seller name" className="input  input-info input-bordered w-full " />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Seller Email</span>
                    </label>
                    <label className="input-group ">

                        <input type="text" name='sellerEmail' placeholder="Seller Email" className="input  input-info input-bordered w-full " />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Price</span>
                    </label>
                    <label className="input-group ">

                        <input type="text" name='price' placeholder="Price" className="input  input-info input-bordered w-full " />
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
                <div className="form-control col-span-1 w-full">
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

            </form>
        </div>
    );
};

export default AddToy;