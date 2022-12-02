const severurl = "https://alurageek.onrender.com"


export const serverconsolasindex= () => {
    console.log(severurl)
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