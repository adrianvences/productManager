import axios from "axios";
// import { useParams } from "react-router-dom"; this goes with const {id}

import { Link } from "react-router-dom";

function ProductList({ products, setLoaded }) {
  // const { id } = useParams(); // this does VVV in one swoop // did not actually need this but could be used if id is already in url
  // // const params = useParams();
  // // const {id} = params;

  const handleCheck = (e, id) => {
    console.log(id);
    axios // axios is a way to make http request
      .put(`http://localhost:5001/api/products/${id}`, {
        // template literal // in addition to this address we need a request body
        isComplete: e.target.checked,
      })
      .then((res) => {
        console.log(res.data);
        setLoaded(false);
        //
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setLoaded(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    products && // && is hot wire // so if products is falsey it wont even continue with the rest of the code.
    products.map((product) => {
      return (
        <div key={product._id} className="card mb-3 mt-3">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input
                  type="checkbox"
                  name="isComplete"
                  id="isComplete"
                  className="form-check-input"
                  checked={product.isComplete} // when we check it ,it is sent to handleCheck isComplete
                  onChange={(e) => handleCheck(e, product._id)}
                />
                <label htmlFor="isComplete" className="form-check-label">
                  <Link to={`/products/${product._id}`}> {product.title}</Link>
                </label>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(product._id)}
              >
                delete
              </button>
            </div>
          </div>
        </div>
      );
    })
  );
}

export default ProductList;
