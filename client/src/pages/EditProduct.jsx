import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({}); // tracks state for errors // errors step 1 //do not forget to add vals in update method
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
      .put(`http://localhost:5001/api/products/${id}`, {
        //  this is sending the data to update from our edit form
        // you can also replace this whole object and just put product if you hover over it you will see the object // cleans code up
        title: product.title,
        price: product.price,
        description: product.description,
        isComplete: product.isComplete,
      })
      .then((res) => {
        console.log(res.data);
        setErrors({}); //step 2 errors
        navigate("/products"); //redirects to main product page
      })
      .catch((err) => {
        //errors part 3 // our catch is for when something went wrong with post
        console.log(err);
        setErrors(err?.response?.data?.errors); // we had to drill down in console to find these keys
        // ? means optional chaining // returns undefined instead of error if it is undef or null // so it wont break the app
      }); // when we error out if we error out in our handle submit we will come here and sets the error
  };

  return (
    <div>
      <h1>
        Edit Product :
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
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
                { // part 4 to errors and put in the rest
                  errors?.title && ( // ? means optional chaining // returns undefined instead of error if it is undef or null // so it wont break the app
                    <span className="form-text text-danger">
                      {errors.title.message}
                    </span>
                  ) // if there is an error it sends out the span
                }
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
                {
                  errors?.price && ( // ? means optional chaining // returns undefined instead of error if it is undef or null // so it wont break the app
                    <span className="form-text text-danger">
                      {errors.price.message}
                    </span>
                  ) // if there is an error it sends out the span
                }
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
                {
                  errors?.description && ( // ? means optional chaining // returns undefined instead of error if it is undef or null // so it wont break the app
                    <span className="form-text text-danger">
                      {errors.description.message}
                    </span>
                  ) // if there is an error it sends out the span
                }
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
                <label htmlFor="isComplete" className="form-check-label">
                  Completed?
                </label>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary">
                  Edit Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default EditProduct;
