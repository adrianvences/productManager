import axios from "axios";
import { useState } from "react";

function ProductForm({setLoaded}) {
  const [title, setTitle] = useState(""); // tracks state
  const [price, setPrice] = useState(""); // tracks state
  const [description, setDescription] = useState(""); // tracks state
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle('')
    setPrice('')
    setDescription('')
    const newProduct ={
      title,
      price,
      description
    };
    axios
      .post('http://localhost:5001/api/products', newProduct)
      .then(res => {
        console.log(res.data)
        setLoaded(false); // in our main we said when ever loaded changes fire this use effect off. so when ever we make a new product in our .then we set loaded to false
        // so now that its changed from true to false the useEffect fires again and loads our product with out refreshing 
      }) // here we console log the create
      .catch(err => console.log(err));
  }


  return (
    <div className="card mb-3 mt-3">
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
