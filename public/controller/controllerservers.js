export const serverconsolasindex= () => {
    return fetch("http://localhost:3000/consolasindex").then((respuesta) => { 
        return respuesta.json();
    })
}
    

export const  serverstarwarindex = () => {
    return fetch("http://localhost:3000/starwarsindex").then((respuesta) => { 
        return respuesta.json();
    })
}

export const srverdiversosindex = () => {
    return fetch("http://localhost:3000/diversosindex").then((respuesta) => { 
        return respuesta.json();
    })
} 