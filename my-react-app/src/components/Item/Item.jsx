import React from 'react';
import "../Item/item.css"
import { Link } from 'react-router-dom';

export const  Item =({prod}) => {

  return (
      <div> 
          <div className="col-md-4">
                  <div className="card w-50 mt-4">
                      <div className="card-body">
                          <img src={prod.foto} alt="" className="w-50"/>
                      </div>
                      <div className="card-body">
                          <h3>{`${prod.name}`}</h3>
                      </div>
                      <h2>${prod.price}</h2>
                          <Link to={`/item/${prod.id}`} className="btn btn-dark brn-block">
                              COMPRAR
                          </Link>
                  </div>
              </div>
      </div>
    )
  }
  
