import { ProductList } from "./components/Products"
import React, { useState, useEffect } from 'react';



function App() {
  const [products, setProducts] = useState(null);
  
  useEffect(()=>{
    const obtenerDatosDeApi = () => {
      fetch('https://fakestoreapi.com/products')
        .then(response => {
          if (!response.ok) {
            console.error('La llamada a la API no fue exitosa');
          }
          return response.json();
        })
        .then(datos => {
          setProducts(datos);
        })
        .catch(error => {
          console.error('Error al obtener datos de la API', error);
        });
    };

    obtenerDatosDeApi();
  },[]);
  return (
    <>
      <ProductList products={products}/>
    </>
  )
}

export default App
