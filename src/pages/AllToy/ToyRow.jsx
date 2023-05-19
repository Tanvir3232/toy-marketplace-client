

const ToyRow = ({toy}) => {
    const {sellerName,price,quantity,name,category} = toy;
    return (
        <tr>
            <td>{sellerName}</td>
            <td>{name}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>
                <button className="btn btn-outline">View</button>
            </td>
        </tr>
    );
};

export default ToyRow;