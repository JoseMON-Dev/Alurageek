import { serverconsolasindex } from "../controller/controllerservers.js";
import { serverstarwarindex } from "../controller/controllerservers.js";
import { srverdiversosindex } from "../controller/controllerservers.js";
import {crearproductoindex} from "./crearproducto.js"


const consolas = document.querySelectorAll("[data-imagec]");
const starwars = document.querySelectorAll("[data-imaget]");
const diversos = document.querySelectorAll("[data-imged]")

serverconsolasindex().then((data) => {
    console.log(data)
    let contador = 0;
    let numero = 1;
    data.forEach((element) => {
        const letter = "c";
        const name = element.name;
        const tetxo = element.precio;
        const url = element.imgurl;
        crearproductoindex(letter,name,tetxo,url,contador,numero,consolas);
        contador += 1;
        numero += 1;
    })
    
});

serverstarwarindex().then((data) => {
    let contador = 0;
    let numero = 1;
    data.forEach((element) => {
        const letter = "t";
        const name = element.name;
        const tetxo = element.precio;
        const url = element.imgurl;
        crearproductoindex(letter,name,tetxo,url,contador,numero,starwars);
        contador += 1;
        numero += 1;
    })
})

srverdiversosindex().then((data) => {
    let contador = 0;
    let numero = 1;
    data.forEach((element) => {
        const letter = "d";
        const name = element.name;
        const tetxo = element.precio;
        const url = element.imgurl;
        crearproductoindex(letter,name,tetxo,url,contador,numero,diversos);
        contador += 1;
        numero += 1;
    })
})