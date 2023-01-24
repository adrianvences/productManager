import axios from "axios";
import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

function Main() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // we should clean up axios if in useEffect
  useEffect(() => {
    const controller = new AbortController(); // cleaning up line
    axios
      .get("http://localhost:5001/api/products", { signal: controller.signal }) // after the comma is apart of clean up
      // if get is successful .then will be called // if the get req gets an error .catch will be called
      .then((res) => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
    return () => controller.abort(); // returns clean up function , so if for some reason the user clicks away
    // from this page before they seee the results of this use effect , the use effect will be aborted and we wont have a memory leakage. this is best practice.
  }, [loaded]);

  const reversedProducts = [...products].reverse(); // reverses array of products // we spread the todos (...) does not mutate arrays 

  return (
    <div>
      <h1>Product Manager</h1>
      <ProductForm setLoaded={setLoaded} />
      <h1>All Products</h1>
      {/* list component */}
      {loaded && <ProductList products={reversedProducts} setLoaded={setLoaded} />}
    </div>
  );
}

export default Main;
