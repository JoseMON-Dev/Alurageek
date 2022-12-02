
export const crearproductoindex = (letter,name,texto,url,contador,numero,lista) => {
    const contenido = `<div class="img${letter}${numero}" style ="background-image: url(${url});""></div>
    <div class="texto"><i class="txt1">${name}</i><i class="price">${texto}</i><a href="" class="verproducto">Ver producto</a></div>
    `
    console.log(lista[contador])
    lista[contador].insertAdjacentHTML('beforeend',contenido)
}