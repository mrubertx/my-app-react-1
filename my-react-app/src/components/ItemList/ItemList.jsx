import React from 'react';
import Item from "../Item/Item";

export default function ItemList({productos}) {
  return (
    <div>
        {productos.map((prod) => <Item prod={prod}/>)}
    </div>
  )
}
