

const ToyCard = ({ toy }) => {
    const {photoUrl,rating,price,name} = toy;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={photoUrl} className='h-48 w-full' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><strong>Price: </strong> {price}</p>
                <p><strong>Rating: </strong> {rating}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;