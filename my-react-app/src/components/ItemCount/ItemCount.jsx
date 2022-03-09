import React, { useState } from "react";

const ItemCount = ({stock, inicial, agregarCompra}) =>{

    const[value, setValue] = useState(inicial);
    const onAdd = () => setValue(value + 1);

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                {value > 1 && <button onClick={() => setValue(value - 1)}>-</button>}
                </div>
                <div className="col">
                <p>{value}</p>
                </div>
                <div className="col">
                <button disabled={value === stock ? true : false} onClick={onAdd}>+</button>
                </div>
                <button onClick={agregarCompra} className="btn btn-dark brn-block">Agregar al carrito</button>
            </div> 
       </div>
    )
}

export default ItemCount