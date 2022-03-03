import React from 'react'
import { Bag } from "react-bootstrap-icons" 
import {Link} from "react-router-dom"

const CartWidget= () => {
  return (
    <Link to={"/cart"} className='btn text-light'>
          <Bag/>
    </Link>
  )
}

export default CartWidget;