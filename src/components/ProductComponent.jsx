import React, { useEffect, useState } from 'react'
import { createProduct, getProduct, updateProduct } from '../service/ProductService'
import { useNavigate, useParams } from 'react-router-dom';

const ProductComponent = () => {
  const [productName, setproductName] = useState('')
  const [description, setDescription] = useState('')
  const [brandName, setbrandName] = useState('')

  const { id } = useParams();
  console.log(id)
  const navigator = useNavigate();
  useEffect(() => {
    if(id){
      getProduct(id).then((response)=>{
        setproductName(response.data.productName);
        setDescription(response.data.description);
        setbrandName(response.data.brandName)
      }).catch(error =>{
        console.error(error);
      })
    }
  }, [id])

  function saveOrUpdateProduct(e){
    e.preventDefault();
    
    const product = {productName, description, brandName}
    console.log(product)

    if(id){
      updateProduct(id, product).then((response) => {
        console.log(response.data);
        navigator('/products');
      }).catch(error => {
        console.error(error);
      })
    }else{
      createProduct(product).then((response) => {
        console.log(response.data);
        navigator('/products')
      }).catch(error => {
        console.error(error);
      })
    }
  }

  function pageTitle(){
    if(id){
      return <h2 className="text-center">Update Product</h2>
    }else{
      return <h2 className="text-center">Add Product</h2>
    }
  }

  return (
    <div className='container'>
      <br /><br /><br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {
            pageTitle()
          }
          <div className="card-body">
            <form action="">

              <div className="form-group mb-2">
                <label className="form-label">Product Name</label>
                <input 
                type="text" 
                placeholder='Enter Product Name' name='productName' 
                value={productName} className='form-control' 
                onChange={(e) => setproductName(e.target.value)} required/>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Description</label>
                <input 
                type="text" 
                placeholder='Enter Description' name='description' 
                value={description} className='form-control' 
                onChange={(e) => setDescription(e.target.value)} required/>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Brand Name</label>
                <input 
                type="text" 
                placeholder='Enter Brand Name' name='BrandName' 
                value={brandName} className='form-control' 
                onChange={(e) => setbrandName(e.target.value)} required/>
              </div>

              <button className='btn btn-success' onClick={saveOrUpdateProduct}>Create Product</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent