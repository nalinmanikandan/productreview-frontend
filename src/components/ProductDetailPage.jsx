import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../service/ProductService';
import './style.css'

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the id
    const fetchProductDetails = async () => {
      try {
        const response = await getProduct(id);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <br />
      <br />
      <div className="container cont">
        <br />
        <div className="samdiv">
          <h4>{product.productName}</h4>
          <p>Brand: {product.brandName}</p>
        </div>
        <br />
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
