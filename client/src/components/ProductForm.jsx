import axios from "axios";
import { useState } from "react";

function ProductForm() {
  const [title, setTitle] = useState(""); // tracks state
  const [price, setPrice] = useState(""); // tracks state
  const [description, setDescription] = useState(""); // tracks state
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct ={
      title,
      price,
      description
    };
    axios
      .post('http://localhost:5001/api/products', newProduct)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }


  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title :
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              price :
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              description :
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
