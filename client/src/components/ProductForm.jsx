import axios from "axios";
import { useState } from "react";

function ProductForm({ setLoaded }) {
  const [title, setTitle] = useState(""); // tracks state
  const [price, setPrice] = useState(""); // tracks state
  const [description, setDescription] = useState(""); // tracks state
  const [errors, setErrors] = useState({}); // tracks state for errors

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle("");
    setPrice("");
    setDescription("");
    const newProduct = {
      title,
      price,
      description,
      isComplete: false,
    };
    axios
      .post("http://localhost:5001/api/products", newProduct)
      .then((res) => {
        console.log(res.data);
        setErrors({})
        setLoaded(false); // in our main we said when ever loaded changes fire this use effect off. so when ever we make a new product in our .then we set loaded to false
        // so now that its changed from true to false the useEffect fires again and loads our product with out refreshing
      }) // here we console log the create
      .catch((err) => {  // our catch is for when something went wrong with post 
        console.log(err);
        setErrors(err?.response?.data?.errors); // we had to drill down in console to find these keys 
        // ? means optional chaining // returns undefined instead of error if it is undef or null // so it wont break the app
      }); // when we error out if we error out in our handle submit we will come here and sets the error
  };

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
            { errors?.title &&   // ? means optional chaining // returns undefined instead of error if it is undef or null // so it wont break the app
            <span className="form-text text-danger">{errors.title.message}</span> // if there is an error it sends out the span 
            }
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
            { errors?.price &&   // ? means optional chaining // returns undefined instead of error if it is undef or null // so it wont break the app
            <span className="form-text text-danger">{errors.price.message}</span> // if there is an error it sends out the span 
            }
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
            { errors?.description &&   // ? means optional chaining // returns undefined instead of error if it is undef or null // so it wont break the app
            <span className="form-text text-danger">{errors.description.message}</span> // if there is an error it sends out the span 
            }
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
