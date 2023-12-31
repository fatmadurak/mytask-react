import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [search,setSearch]=useState("")
  const url = `https://northwind.vercel.app/api/products`;

  useEffect(() => {
    getProducts();
  }, []); 

  const getProducts = async () => {
    try {
      const response = await axios.get(url);
        // Verileri ID'ye göre sırala
    const sortedProducts = response.data.sort((a, b) => a.id - b.id);
    setProducts(sortedProducts);
      
    } catch (error) {
      console.error("Verileri alma hatası:", error);
    }
  }

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      getProducts(); 
    } catch (error) {
      console.error("Silme hatası:", error);
    }
  }

  const addProduct = () => {
    const newProduct = {
      name: name
    }

    axios.post(`${url}`, newProduct)
      .then(() => {
        getProducts();
        setName(""); // Input alanını temizle
      })
      .catch((error) => {
        console.error("Ekleme hatası:", error);
      });
  }


  const searcProduct=()=>{

    let filtered=products.filter((item)=>item.name.toLowerCase().includes(search))

   
    
    setProducts(filtered)


  }

  return (
    <div className='container'>
      <h1>Products</h1>
      <div className='formController'>
        <label>Product Name:</label>
        <input
          type="text"
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addProduct}>Add</button>
      </div>

      <div className='formController'>
      <label>Search Product:</label>
        <input
          type="text"
          onKeyUp={searcProduct}
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>
      <ul>
        {products.map((item) => (
          <li key={item.id} >
            <span>{item.id}-) </span>
            <Link to={`/${item.id}`}>{item.name}</Link>
            <i className="bi bi-x-circle" onClick={() => deleteProduct(item.id)}></i>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;