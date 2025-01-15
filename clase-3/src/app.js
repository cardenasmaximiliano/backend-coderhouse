// let persona = {
//     nombre: "pedro",
//     edad:32
// }

// console.log(persona)

/*
npm => node package manager, es un gestor de paquetes. 
facilita instalacion, actualizacion y gestion de librerias y herramientas de terceros. 

package.json => es un archivo de configuracion node. 
es la que tiene la informacion importante de nuestro proyecto. 


nodemon => va a ser la herramienta que va a monitorizar automaticamente los archivos del proyecto. 
Reinicia el servidor. 

global => npm install -g nodemon

npm install --save-dev nodemon

*/

// let nombre = "pepito";
// console.log(nombre);

// nombre = "pedro";
// console.log(nombre)

/*
Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20. 
Indicar por consola la finalización de esta operación con un mensaje.
Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y el
 valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

Nota: Considerar que esta operación debe realizarse de forma asíncrona.

*/

//variables

const CANTIDAD_NUMEROS = 10000;
const MIN_NUMERO = 1;
const MAX_NUMERO = 20;


//funcion para numeros aleatorios

function generarNumerosAleatorios(cantidad){
    return new Promise((resolve)=>{
        const numeros = [];
        for(let i = 0; i < cantidad; i++){

            const numeroAleatorio = Math.floor(Math.random()*(MAX_NUMERO - MIN_NUMERO + 1)) + MIN_NUMERO;
            numeros.push(numeroAleatorio);
        }
        resolve(numeros)
    })


}

function contarOcurrencia(numeros){
    const conteo = {};
    numeros.forEach((numero)=>{
        conteo[numero] = (conteo[numero] || 0) + 1;
    })
    return conteo;
}

//asincronia 

async function ejecucion() {
    try{
        console.log("numeros aleatorios")
   

    const numeros = await generarNumerosAleatorios(CANTIDAD_NUMEROS);
    console.log("se ejecuto la creacion de numeros");

    const conteo = contarOcurrencia(numeros);

    console.log('conteo de numeros aleatorios:')
    console.log(conteo)
    }catch(error){
        console.log('error',error)
    }
}

ejecucion()
