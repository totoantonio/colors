import React from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <button onClick={() => handleProductClick(product.id)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductDetail;
