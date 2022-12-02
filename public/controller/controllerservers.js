const severurl = "http://localhost:3000"


export const serverconsolasindex= () => {
    return fetch(severurl + "/consolasindex").then((respuesta) => { 
        return respuesta.json();
    })
}
    

export const  serverstarwarindex = () => {
    return fetch(severurl + "/starwarsindex").then((respuesta) => { 
        return respuesta.json();
    })
}

export const srverdiversosindex = () => {
    return fetch(severurl + "/diversosindex").then((respuesta) => { 
        return respuesta.json();
    })
} 