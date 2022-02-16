const productos =[
    { id: 1, foto: "https://res.cloudinary.com/mrubertx/image/upload/v1640184429/avengers_vol_1_330x500_baaxze.png", categoria: "comics", name: "Avengers Vol.1", price: 200},
    { id: 2, foto: "https://res.cloudinary.com/mrubertx/image/upload/v1640184429/BvsS_330x500_krksgf.png", categoria: "comics", name: "Batman VS Superman", price: 500},
    { id: 3, foto: "https://res.cloudinary.com/mrubertx/image/upload/v1640184429/civil_war_1_330x500_swevig.png", categoria: "comics", name: "Civil War", price: 1000},
    { id: 4, foto: "https://res.cloudinary.com/mrubertx/image/upload/v1640184429/civil_war_2_330x500_skwwdk.png", categoria: "comics", name: "Civil War 2", price: 900},
    { id: 5, foto: "https://res.cloudinary.com/mrubertx/image/upload/v1640184428/dinastia_m_330x500_qpmupl.png", categoria: "comics", name: "Dinastia M", price: 700},
]

export const getFetch = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 2000)
})