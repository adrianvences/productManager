import axios from "axios";
import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";

function Main() {
  const [message, setMessage] = useState("");

  // we should clean up axios if in useEffect
  useEffect(() => {
    const controller = new AbortController(); // cleaning up line
    axios
      .get("http://localhost:5001/api", { signal: controller.signal }) // after the comma is apart of clean up
      // if get is successful .then will be called // if the get req gets an error .catch will be called
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log(err));
    return() => controller.abort(); // returns clean up function , so if for some reason the user clicks away 
    // from this page before they seee the results of this use effect , the use effect will be aborted and we wont have a memory leakage. this is best practice.
    
  }, []);

  return (
    <div>
      
      {message && <h2>  {message} </h2>}
      <ProductForm />
    </div>
  );
}

export default Main;
