import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail= ({item}) => {

  const [visible, setVisible] = useState(true)

  const agregarCompra= () => {
    console.log(visible);
    setVisible(false);
  }

  return (
    <div>
        <div className="col-md-4">
                  <div className="card w-100 mt-4">
                      <div className="card-body">
                          <img src={item.foto} alt="" className="w-50"/>
                      </div>
                      <div className="card-body">
                          <h3>{`${item.name}`}</h3>
                      </div>
                          <h2>${item.price}</h2>
                      <h6>Descripcion: {item.descripcion}</h6>
                      <h5>({item.stock} disponibles)</h5>
                      {visible && <ItemCount stock={item.stock} inicial={1} agregarCompra={agregarCompra}/>}
                      <Link to={"/cart"} className='btn btn-primary brn-block'>Finalizar compra</Link>
                      </div>
              </div>
    </div>
  )
}
