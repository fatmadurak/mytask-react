
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Todos from './Todos/todos/Todos';



function App() {
  return (
    
    <>

    <Routes>

    <Route index element={<Todos/>} />
   

    </Routes>
 
    
    </>
  );
}

export default App;
