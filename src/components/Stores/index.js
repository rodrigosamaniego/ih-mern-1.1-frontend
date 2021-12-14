import React, {useEffect, useContext} from "react";
import StoreContext from "../../context/Store/StoreContext";

export default function Stores() {
    const ctx = useContext(StoreContext)
    const {stores, hola, changeText} = ctx
console.log(ctx)
console.log(hola)
    return (
        <>
        <p>Listado de tiendas</p>
        <p>{ hola }</p>
        <button onClick={ () => {changeText()}}>
            Cambiar texto
        </button>
        </>
    )

}