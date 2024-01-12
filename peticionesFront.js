'use strict';

const urlApi = 'http://localhost:3000/';

export async function obtenerRaiz() {
    const response = await fetch(urlApi);
    return await response.json();  
}


export async function leerListas() {
    const response = await fetch(`${urlApi}Lista`);
    return await response.json();
}

export async function leerLista(id) {
    const response = await fetch(urlApi + "Lista/" + id);
    return await response.json();
}