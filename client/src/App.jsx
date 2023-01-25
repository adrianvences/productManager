
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Routes,Route } from "react-router-dom"
import EditProduct from './pages/EditProduct';
import Main from "./pages/Main"
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    // we need to a react fragment around everything because react needs everything in one parent
    <> 
    <Navbar />
    <div className='container'> 
      <Routes>
        <Route path='/' element={<Navigate to='/products' />} />
        <Route  path='/products' element={<Main />} />
        <Route path='/products/:id' element={<ProductDetail />} />  
        <Route path='/products/:id/edit' element={<EditProduct />} />
      </Routes>
    </div>
    </>
  )
}

export default App