import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./detail.css";

function ProductsDetail() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const url = `https://northwind.vercel.app/api/products`;

  useEffect(() => {
    getProductDetail();
  }, [id]);

  const getProductDetail = () => {
    axios.get(`${url}/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.error("Ürün detayı hatası:", error);
      });
  }

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Name: {product.name}</p>
   
     
    </div>
  );
}

export default ProductsDetail;