
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Routes,Route } from "react-router-dom"
import Main from "./pages/Main"
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className='container'> 
      <Routes>
        <Route path='/' element={<Navigate to='/products' />} />
        <Route  path='/products' element={<Main />} />
        <Route path='/products/:id' element={<ProductDetail />} />  
      </Routes>
    </div>
  )
}

export default App