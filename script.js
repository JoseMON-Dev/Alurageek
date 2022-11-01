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
