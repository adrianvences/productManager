import axios from "axios";
import { Link,useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/products/${id}`, {
        signal: controller.signal,
      })
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);


  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate('/products');  //redirect
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Product Information</h1>
      {product && (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p>Price : ${product.price}</p>
            <p>Description : {product.description}</p>
          </div>
          <div className="card-footer d-flex justify-content-end">
            <Link
              to={`/products/${product._id}/edit`}
              className="btn btn-warning border-dark me-2"
            >
              Edit Product
            </Link>
            <button className="btn btn-danger" onClick={() => handleDelete(product._id)}>Delete</button>  {/* product is coming from our state  */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
