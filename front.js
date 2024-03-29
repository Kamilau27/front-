'use strict';
/* ORDEN CODIGO
1. Importaciones
2. Variables ("let", "const")
3. Funciones
4. Ejecucion codigo */

//Importaciones
import { obtenerRaiz, leerListas, leerLista, crearLista} from "./peticionesFront.js";

 
 //Variables
const d = document;

const $saludo = d.getElementById('saludo'), 
      $listaNombres = d.getElementById("listaNombres"), 
      $porFIN = d.getElementById("porFIN"),
      $crearLista = d.getElementById("crearLista");


//Funciones
async function saludar() {
    const retornado = await obtenerRaiz ();
    $saludo.textContent = retornado.message;
}

async function mostrarLista() {
    const listaNombres = await leerListas();
    let contenidoLista = '';
    listaNombres.datos.forEach((elemento) => {
        contenidoLista += `<li>${elemento.nombre} ${elemento.apellido} <button id="${elemento._id}" class="btn-leer"> leerEntregado </button> </li>`;
        
    });
    $listaNombres.innerHTML = contenidoLista;
    const $bntsLeer = d.querySelectorAll('.btn-leer');
    $bntsLeer.forEach(($btn) => {
        $btn.addEventListener('click', async (e) => {
            const response = await leerLista(e.target.id);
            $porFIN.textContent = `🤯${response.dato.correo}`;
        });
    });
    function escucharEventos() {
        $crearLista.addEventListener('submit', (evento)=> {
            evento.preventDefault(); 
            const objeto = {
                nombre: $crearLista.inDestinatario.value,
                correo: $crearLista.inCorreo.value,
                mayorEdad: true,
            };
            crearLista(objeto);
        });
    }

}
//Ejecucion codigo
d.addEventListener("DOMContentLoaded", ()=> {
    saludar();
    mostrarLista();
    escucharEventos();
});
