import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail= ({item}) => {

   function onAdd(quantityToAdd) {
       if(item.stock) {
           console.log(`Agregar al cart el ${item.id} con cantidad: ${quantityToAdd}´);
       }
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
                      <h5>Cantidad:</h5><ItemCount inicial={1} maximo={item.stock}/><h5>(Stock disponible:{item.stock})</h5>
                      <h7>Descripcion: {item.descripcion}</h7>
                          <button className="btn btn-dark brn-block">
                              COMPRAR
                          </button>
                  </div>
              </div>
    </div>
  )
}
