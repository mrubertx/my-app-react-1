import React from 'react';
import { useState, useEffect } from 'react';
import { getFetch } from "../GetFetch/GetFetch";
import ItemList from "../ItemList/ItemList";


export default function ItemListContainer() {
  const [productos, setProductos]= useState([])
  const [loading, setLoading]= useState(true)

  useEffect(() => {
    getFetch
    .then(resp=> setProductos(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [])

  return (
    <div>
      { loading ?
      <h2>Cargando...</h2>
      :
      <ItemList productos= {productos}/>
      }
    </div>
  )
}

