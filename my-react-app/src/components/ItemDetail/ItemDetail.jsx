import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


export default function ItemDetail({prod}) {
    const inicial = 1
    const maximo = 10
    return (
        <div>
            <div key={prod.id} className="col-md-4">
                <div className="card w-100 mt-5">
                    <div className="card-body">
                        <img src={prod.foto} alt="" className="w-50"/>
                    </div>
                    <div className="card-body">
                        <h3>{`${prod.name}`}</h3>
                    </div>
                    <h2>${prod.price}</h2>
                    <ItemCount inicial={inicial} maximo={maximo}/>
                    <div className="card-body">
                        {prod.descripcion}
                    </div>
                    <div className="card-footer">
                        <buttom className="btn btn-outline-primary brn-block">
                            COMPRAR
                        </buttom>
                    </div>
                </div>
            </div>
        </div>
    )
}