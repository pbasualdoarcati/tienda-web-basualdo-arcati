import React, { createContext, useState } from "react";

export const CartContext = createContext();

let listaProductos = [];



export const CartProvider = ({ children }) => {

    const [product, setProduct] = useState(listaProductos);

    const data = { setProduct };

    if ((product['id'] > 0) && ( !listaProductos.includes( (listaProductos.map(el => el.id)) ) ) ) {
        listaProductos.push(product)
        console.log('funciona porque id es mayor que 0 y no lo incluye');
    }
    console.log(product);
    console.log(listaProductos);
    console.log(listaProductos.length);
   listaProductos.map(el => console.log('mapeando ando ' , el.id))

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    );
};
