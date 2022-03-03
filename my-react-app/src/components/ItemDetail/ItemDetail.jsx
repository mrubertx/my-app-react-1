import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export const ItemDetail= ({item}) => {
  const inicial = 1
  const maximo = 10 
  return (
    <div>
        <div className="col-md-4">
                  <div className="card w-100 mt-5">
                      <div className="card-body">
                          <img src={item.foto} alt="" className="w-50"/>
                      </div>
                      <div className="card-body">
                          <h3>{`${item.name}`}</h3>
                      </div>
                      <h2>${item.price}</h2>
                      <ItemCount inicial={inicial} maximo={maximo}/>
                      <h5>{item.descripcion}</h5>
                      <div className="card-footer">
                          <button className="btn btn-outline-primary brn-block">
                              COMPRAR
                          </button>
                      </div>
                  </div>
              </div>
    </div>
  )
}
