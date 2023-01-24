import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();
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

  return (
    <div>
      <h1>Product Information</h1>
      {product && <div className="card">
        <div className='card-body'>
          <h5 className="card-title">{product.title}</h5>
          <p>Price : ${product.price}</p>
          <p>Description : {product.description}</p>
        </div>
      </div>
      }
    </div>
  );
}

export default ProductDetail;
