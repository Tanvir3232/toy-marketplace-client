
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";


const ToyCard = ({ toy }) => {
    const { photoUrl, rating, price, name, _id } = toy;
    const { user } = useContext(AuthContext);
    const handleLoginWarning = () => {
        if (!user) {
            toast.error('You have to log in first to view details');
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={photoUrl} className='h-48 w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><strong>Price: </strong> {price}</p>
                <div className="flex gap-3 items-center"><strong>Rating: </strong>  <Rating
                    style={{ maxWidth: 150 }}
                    value={rating}
                    readOnly
                />( {rating} )</div>
                <div className="card-actions ">
                    <Link onClick={handleLoginWarning} to={`/toy/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;