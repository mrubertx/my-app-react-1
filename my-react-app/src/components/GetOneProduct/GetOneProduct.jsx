const oneProduct =[

    { id: 1, foto: "https://res.cloudinary.com/mrubertx/image/upload/v1640184429/avengers_vol_1_330x500_baaxze.png", categoria: "comics", name: "Avengers Vol.1", price: 200, descripcion: "Lorem ipsum dolor sit amet consectetur adipiscing elit inceptos, sociosqu purus eros sollicitudin id euismod odio tempor ad, magnis convallis lacinia metus lectus sapien phasellus. Etiam fames sem odio leo duis hendrerit venenatis conubia senectus nec posuere imperdiet litora pellentesque, suspendisse nibh ullamcorper placerat fusce non quisque scelerisque eu magna vel tempor molestie. Taciti proin pretium semper porta eros fusce sem, nunc blandit turpis enim luctus morbi, curabitur quisque inceptos feugiat diam mattis."},
]


export const getOneProduct = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(oneProduct)
    }, 2000)
})