
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Products from './Products/Products';
import ProductsDetail from './ProductsDetail/ProductsDetail';



function App() {
  return (
    
    <>

    <Routes>

    <Route index element={<Products/>} />
    <Route path='/:product_id' element={<ProductsDetail/>} />

    </Routes>
 
    
    </>
  );
}

export default App;
