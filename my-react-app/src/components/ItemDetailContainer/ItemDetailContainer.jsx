import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail';

const item=[
    { id: 0, foto: "https://res.cloudinary.com/mrubertx/image/upload/v1640184429/avengers_vol_1_330x500_baaxze.png", categoria: "marvel", name: "AVENGERS Vol.1", price: 200, descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, sociosqu purus eros sollicitudin id euismod odio tempor ad, magnis convallis lacinia metus lectus sapien phasellus. Etiam fames sem odio leo duis hendrerit venenatis conubia senectus nec posuere imperdiet litora pellentesque, suspendisse nibh ullamcorper placerat fusce non quisque scelerisque eu magna vel tempor molestie. Taciti proin pretium semper porta eros fusce sem, nunc blandit turpis enim luctus morbi, curabitur quisque inceptos feugiat diam mattis.", stock:10 }, 
    { id: 1, foto: "https://res.cloudinary.com/mrubertx/image/upload/v1640184429/BvsS_330x500_krksgf.png", categoria: "dccomics", name: "BATMAN VS SUPERMAN", price: 500,descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, sociosqu purus eros sollicitudin id euismod odio tempor ad, magnis convallis lacinia metus lectus sapien phasellus. Etiam fames sem odio leo duis hendrerit venenatis conubia senectus nec posuere imperdiet litora pellentesque, suspendisse nibh ullamcorper placerat fusce non quisque scelerisque eu magna vel tempor molestie. Taciti proin pretium semper porta eros fusce sem, nunc blandit turpis enim luctus morbi, curabitur quisque inceptos feugiat diam mattis.", stock:5},
    { id: 2, foto: "https://res.cloudinary.com/mrubertx/image/upload/v1640184429/civil_war_1_330x500_swevig.png", categoria: "marvel", name: "CIVIL WAR", price: 1000,descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, sociosqu purus eros sollicitudin id euismod odio tempor ad, magnis convallis lacinia metus lectus sapien phasellus. Etiam fames sem odio leo duis hendrerit venenatis conubia senectus nec posuere imperdiet litora pellentesque, suspendisse nibh ullamcorper placerat fusce non quisque scelerisque eu magna vel tempor molestie. Taciti proin pretium semper porta eros fusce sem, nunc blandit turpis enim luctus morbi, curabitur quisque inceptos feugiat diam mattis." ,stock:7},
    { id: 3, foto: "https://res.cloudinary.com/mrubertx/image/upload/v1640184429/civil_war_2_330x500_skwwdk.png", categoria: "marvel", name: "CIVIL WAR 2", price: 900,descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, sociosqu purus eros sollicitudin id euismod odio tempor ad, magnis convallis lacinia metus lectus sapien phasellus. Etiam fames sem odio leo duis hendrerit venenatis conubia senectus nec posuere imperdiet litora pellentesque, suspendisse nibh ullamcorper placerat fusce non quisque scelerisque eu magna vel tempor molestie. Taciti proin pretium semper porta eros fusce sem, nunc blandit turpis enim luctus morbi, curabitur quisque inceptos feugiat diam mattis." ,stock:8},
    { id: 4, foto: "https://res.cloudinary.com/mrubertx/image/upload/v1640184428/dinastia_m_330x500_qpmupl.png", categoria: "marvel", name: "DINASTIA M", price: 700,descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, sociosqu purus eros sollicitudin id euismod odio tempor ad, magnis convallis lacinia metus lectus sapien phasellus. Etiam fames sem odio leo duis hendrerit venenatis conubia senectus nec posuere imperdiet litora pellentesque, suspendisse nibh ullamcorper placerat fusce non quisque scelerisque eu magna vel tempor molestie. Taciti proin pretium semper porta eros fusce sem, nunc blandit turpis enim luctus morbi, curabitur quisque inceptos feugiat diam mattis." ,stock:3},
];

const getProductos = (idBuscar) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
        if(idBuscar===undefined){
            resolve(item);
        } else{
            let filtro = item.find((unItem) => unItem.id ===Number(idBuscar));
            filtro?resolve(filtro):reject("error en la promesa")
        }
        }, 500);
    });
};

const ItemDetailContainer =() => {
    const {id} = useParams();
    const [item, setItem]= useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(()=>{
        let requestItem = getProductos(id);
        requestItem
        .then((resp) => { setItem(resp); setLoading(true);})
        .catch((err) => {console.error(err);});
    }, [id]);
    console.log("item: ", item);

  return (
    <div>
        {loading&& <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer;