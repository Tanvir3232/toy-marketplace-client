import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
    const toy = useLoaderData();

    return (
        <div className="flex flex-col md:flex-row gap-8">
             <Helmet>
                <title>SmartyToy  | Toy Details</title>
            </Helmet>
            <img src={toy.photoUrl} className="rounded-md md:w-3/5" alt="" />
            <div className="py-8 md:w-2/5">
                <h3 className="text-3xl font-bold">{toy.name}</h3>
                <p className="py-2"><strong>Description:</strong> {toy.description}</p>
                <p className="py-2"><strong>Quantity:</strong> {toy.quantity}</p>
                <p className="py-2"><strong>Price:</strong> {toy.price} Tk</p>
                <p className="py-2"><strong>Rating:</strong> {toy.rating}</p>
                <div className="border-2 border-gray-900 text-center mt-6">
                    <p  className="py-2 text-2xl font-bold">Seller Information</p>
                    <p className="py-2"><strong> Name:</strong> {toy.sellerName}</p>
                    <p className="py-2"><strong> Email:</strong> {toy.sellerEmail}</p>
                </div>

            </div>
        </div>
    );
};

export default SingleToy;