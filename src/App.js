
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Products from './Products/Products';



function App() {
  return (
    
    <>

    <Routes>

    <Route index element={<Products/>} />
   

    </Routes>
 
    
    </>
  );
}

export default App;
