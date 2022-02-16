import React from 'react';
import { useState, useEffect } from 'react';
import { getOneProduct } from "../GetOneProduct/GetOneProduct";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
  const [oneProduct, setoneProduct]= useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    getOneProduct
    .then(resp=> setoneProduct(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [])

  return (
    <div>
        { loading ?
        <h2>Cargando...</h2>
        :
        <div>
            {oneProduct.map((prod) => <ItemDetail prod={prod}/> )}
        </div>
        }
    </div>
  )
}
