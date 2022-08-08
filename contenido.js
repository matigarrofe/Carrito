const retornoCardContenido = (contenido) => {
    const { img, nombre, precio, tipo, id } = contenido
    return `<div class="col-lg-3 col-mb-6 col-sm-12 pt-2 pb-5">
               <div class="card">
                  <img src="${img}" class="card-img-top" alt="imagen">
                   <div class="card-body bg-black">
                      <p class="card-title text-white">Nombre: <span>${nombre}</span></p>
                      <p class="card-title text-white">Tipo: <span>${tipo}</span></p>
                      <p class="card-text text-white">Precio: <span>${precio}</span></p>
                      
                   </div>
               </div>
            </div>`
}




const retornoCardError = () => {
    return `<div class="text-black text-center"> 
               <br><br><br><br> 
               <h4>El contenido parece no estar disponible.</h4> 
               <br><br> 
               <i class="large material-icons">sentiment_very_dissatisfied</i> 
               <br><br> 
           </div>`
}



const obtenerContenido = (URL) => {
    let cardsAmostrar = ""
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            for (contenido of data)
                cardsAmostrar += retornoCardContenido(contenido)
            contenidoDOM.innerHTML = cardsAmostrar
        })
        .catch((error) => contenidoDOM.innerHTML = retornoCardError())
        .finally(() => cargandoDOM.innerHTML = "")
}