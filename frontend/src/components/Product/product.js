import "./product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="productinfo">
        <p className="infoname">{name}</p>

        <p className="infodescription">{description.substring(0, 100)}...</p>

        <p className="infoprice">Rs{price}</p>

        <Link to={`/product/${productId}`} className="infobutton">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
