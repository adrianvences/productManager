

import {Link} from 'react-router-dom';

function ProductList({ products }) {
  return ( 
    products && products.map(product => {
      return (
        <div key={product._id} className="card mb-3 mt-3">
          <div className="card-body">
            <label htmlFor='title' className='label'><Link to={`/products/${product._id}`}>{product.title}</Link></label>
          </div>
        </div>
      )
    })
  )
}

export default ProductList