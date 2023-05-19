import { Link } from "react-router-dom";
const ToyRow = ({ toy }) => {
    const { sellerName,_id, price, quantity, name, category } = toy;
    return (
        <tr>
            <td>{sellerName}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                
               <Link className="btn btn-outline btn-sm" to={`/toy/${_id}`}>View</Link>
            </td>
           
          
           
        </tr>

    );
};

export default ToyRow;