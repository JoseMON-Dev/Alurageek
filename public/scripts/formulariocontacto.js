const formulario = document.querySelector("#form");
const btnmail = document.querySelector("#truco")
formulario.addEventListener("submit", submit)

function submit(event){
    
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get("Nombre"))
    btnmail.setAttribute("href",`mailto:montesotero8@gmail.com?subject=${form.get("Nombre")}&body=${form.get("mensaje")}`)
    btnmail.click()
}

const lupa = document.querySelector("#logo_lupa_1");
const cabezara = document.querySelector("#cabezera")
lupa.addEventListener("click", onclick)
const menu_buscar = document.querySelector("#menu_buscar");
const arrowheader = document.querySelector("#arrowheader");
arrowheader.addEventListener("click",remove)

function onclick(event){
    cabezara.style.display= 'none' ;
    menu_buscar.style.display='initial'; 
}

function remove(event){
    console.log(event)
    menu_buscar.style.display= 'none' ;
    cabezara.style.display='flex';

}