export const GuardarEsStorage = (clave, elemento) => {
    //Conseguir los elementos que ya tenemos en Local storage
    let elementos = JSON.parse(localStorage.getItem(clave));
    console.log( elementos);
    

    // Comprobar si es un array
    if (Array.isArray(elementos) ) {
      //Añadir dentro del array un elemento nuevo
      elementos.push(elemento);
    } else {
      // Crear un array con la nueva pelicula
      elementos = [elemento];
    }
        
    // Guardar en el Local storage
    localStorage.setItem(clave, JSON.stringify(elementos));

    // Devolver objeto guadado
    return elemento;

  };