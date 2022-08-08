import { useState } from "react";

export const useMayus = (texto) =>{
    
    const [miTexto, setMiTexto] = useState(texto);
    
    const mayusculas = () => {
        setMiTexto(texto.toUpperCase());
    }

    const minusculas = () => {
        setMiTexto(texto.toLowerCase());
    }

    const add = (add) => {
        setMiTexto(texto+add);
    }

    return{
        estado: miTexto,
        mayusculas,
        minusculas,
        add
    }
}