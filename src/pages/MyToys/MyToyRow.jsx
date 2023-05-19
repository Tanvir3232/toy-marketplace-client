
import { Link } from 'react-router-dom';

const MyToyRow = ({toy,i}) => {
    const { rating,_id, price, quantity, name, category } = toy;
    return (
        <tr>
            <td>{i+1}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{rating}</td>
            <td>
                
               <Link className="btn btn-outline btn-info mr-2 btn-sm" to={`/toy/${_id}`}>Edit</Link>
               <Link className="btn btn-outline btn-error btn-sm" to={`/toy/${_id}`}>Delete</Link>
            </td>
           
          
           
        </tr>

    );
};

export default MyToyRow;