import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    isComplete: false,
  });

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/products/${id}`, {
        //grabbing pre pop name
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setProduct(res.data); //setting pre pop
        // navigate("/products");  // redirects  // navigating is for when you submit the form
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  // handle change for object
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {
    setProduct({
      ...product,
      isComplete: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/api/products/${id}` , {
        //  this is sending the data to update from our edit form
        title: product.title,
        price: product.price,
        description: product.description,
        isComplete: product.isComplete,
    })
    .then((res) => { 
      console.log(res.data); 
      navigate('/products');  //redirects to main product page 
    })
    .catch((err) => console.log(err));
  }

    
  

  return (
    <div>
      <h1>
        Edit Product :
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} >
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  value={product.title}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price:
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="form-control"
                  value={product.price}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="form-control"
                  value={product.description}
                  onChange={handleChange}
                />
              </div>
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  name="isComplete"
                  id="isComplete"
                  className="form-check-input"
                  checked={product.isComplete}
                  onChange={handleCheck}
                />
                <label htmlFor="isComplete" className="form-check-label">Completed?</label>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">Edit Product</button>
              </div>
            </form>
          </div>
        </div>
      </h1>
    </div>
  );
  }

export default EditProduct;
