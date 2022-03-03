import React from 'react';
import "../Item/item.css"
import { Link } from 'react-router-dom';

export const  Item =({prod}) => {

  return (
      <div>
          <div className="col-md-4">
                  <div className="card w-100 mt-5">
                      <div className="card-body">
                          <img src={prod.foto} alt="" className="w-50"/>
                      </div>
                      <div className="card-body">
                          <h3>{`${prod.name}`}</h3>
                      </div>
                      <h2>${prod.price}</h2>
                      <div className="card-footer">
                          <Link to={`/item/${prod.id}`} className="btn btn-outline-primary brn-block">
                              COMPRAR
                          </Link>
                      </div>
                  </div>
              </div>
      </div>
    )
  }
  
