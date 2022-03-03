import React, { useState } from "react";

const ItemCount = ({maximo, inicial}) =>{

    const[value, setValue] = useState(inicial)

    const handleSuma = () => {
        value < maximo &&
        setValue(value + 1)
        
    }

    const handleResta = () => {
        value > inicial &&
        setValue(value - 1)
        
    }


    return(
        <div>
            <h1>{value}</h1>
            <button onClick={handleResta}>-</button>
            <button onClick={handleSuma}>+</button>
        </div>
    )
}

export default ItemCount