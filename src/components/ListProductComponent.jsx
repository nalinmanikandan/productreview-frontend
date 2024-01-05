import React, { useEffect, useState } from 'react';
import { deleteProduct, listProducts } from '../service/ProductService';
import { useNavigate } from 'react-router-dom';
import './ListProductComponent.css'

const ListProductComponent = () => {
  const [products, setProducts] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await listProducts();
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  async function removeProduct(id) {
    try {
      await deleteProduct(id);
      // Remove the deleted product from the state
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  function addNewProduct() {
    navigator('/add-product');
  }

  function updateProduct(id) {
    navigator(`/edit-product/${id}`);
  }

  return (
    <div className='container'>
      <h2 className='text-center'>List of Products</h2>
      <button type="button" className="btn btn-primary mb-2" onClick={addNewProduct} >Add Product</button>
      <table className='table table-bordered table-hover table-striped'>
        <thead className='thead-dark'>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Brand Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.brandName}</td>
              <td>{product.productName}</td>
              <td>{product.description}</td>
              <td className='btns'>
                <button className='btn btn-info' onClick={() => updateProduct(product.id)}>Update</button>
                <button className="btn btn-danger" onClick={() => removeProduct(product.id)}style={{marginLeft: '10px'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProductComponent;
