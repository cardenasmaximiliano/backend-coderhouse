//promesas
/*
es una forma de manejar operaciones asincronas. 
represnta un valor que puede estar disponible ahora, en un futuro o jamas.


tres estados posibles =>

    1 - pending (pendiente) la operacion no ha terminado
    2- fufilled (cumplio)  la operacion se cumplio exitosamente
    3-rejected (rechazo) la operacion fallo


*/

/*
fetch

*/
/*
fetch("")
    .then() //convertir la respuesta en JSON
    .then() //manejar los datos
    .catch () //manejar errores

    */

// async es una palabra que lo que va a hacer sobre nuestra funcion es convertirla,
/*
o hacer que se comporte de manera asincrona nuestra funcion.

await => nos facilita a nosotros la lectura del codigo asincrono, ya que lo que hace
es esperar que una promesa se resuelva. 


async function obtenerDatos(){
    const respuesta = await fetch()//yo me traigo una api
    const datos = await respuesta.json() //esperar que la respuesta se convierta en JSON.

}

*/

//include => verifica si una cade contiene otra cadena dentro de si.
/*
lo que nos devuelve un include es un valor booleano. 

cadena.include(subcadena,posicion)
// */

// const texto = "mi lenguaje javascript";

// console.log(texto.includes("python"));


// /**
//     startsWidth() verifica si una cadena comienza con otra cadena especifa

//     subcadena, posicion
//  */

//     console.log(texto.startsWith("lenguaje,"))

// /* exponencialidad */

// const resultado1 = Math.pow(2,3); 

// const resultado2 = 2**3;

// console.log(resultado1 === resultado2)

// /*
// array.prototype.includes()

// es un metodo que permite verificar si un array contiene un elemento especifico.

// */

// const numeros = [1,2,3,4,5,6,7];

// console.log(numeros.includes(3));
// console.log(numeros.includes(2,2));
// console.log(numeros.includes(6));


// //Object.entries

// /*

// convertir un objeto de pares clave-valor

// Object.entries(objeto)
// */

// const usuario = {
//     nombre: "pedro",
//     edad: 18
// };

// console.log(Object.entries(usuario))

// for(const[clave,valor] of Object.entries(usuario)){
//     console.log(`${clave}: ${valor}`)
// }

// /*
// object.values()
// convertir un objeto en array de solo los valores de sus propiedades.
// */

// console.log(Object.values(usuario))

// const puntajes = {
//     A: 10,
//     b: 20,
//     c: 30
// }

// const suma = Object.values(puntajes).reduce((acum , val) => acum + val, 0);//acumulador, valorActual, 0 valor inicial.

// console.log(suma)

// /*
// metodo trim, trimStart trimEnd

// trim => eliminar espacion en blanco al principio al final de una cadena. 

// */

// const textoUno = "  hola mundo   "
// console.log(textoUno.trim())

// /*
// flat => se usa para aplanar arrays, convierte un array de arrays en un solo array sin dimension.A

// */

// const arrayAnidados = [ 1, [2,3],[ 4, [5,6]],[7,8]];

// console.log(arrayAnidados.flat(2))

// //es 11 => introduce variables privadas dentro de clases. para mejorar encapsulamiento, 
// /*
// ayuda a que propiedafes y metodos privados sean accesibles solamente dentro de la clase.


// */

// class Persona{
//     #nombre;

//     constructor(nombre){
//         this.#nombre = nombre;
//     }

//     getNombre(){
//         return this.#nombre;
//     }
// }

// const persona = new Persona("juan");
// console.log(persona.getNombre())

// console.log(persona.#nombre);

/**
 
actividad calculadora

 */

function operar(num1, num2, operacion){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{ //es una funcion nos permite ejecutar una funcion despues de un determinado periodo de tiempo
            let resultado;

            switch(operacion){
                case 'sumar':
                    resultado = num1 + num2;
                    break;
                case 'restar':
                    resultado = num1 - num2;
                    break;
                case 'multiplicar':
                    resultado = num1 * num2;
                    break;
                case 'dividir':
                   if(num2 ===0){
                    reject ('no podes dividir por 0 crack');
                    return
                   }
                   resultado = num1 / num2;
                   break;
                default:
                    reject("error de operacion")
                    return
                }

            if(resultado > 0){
                resolve(resultado)
            } else{
                reject ('error no es positivo')
            }
        

        },2000); //2000 corresponde a mili segundos => 2s

    })
}

async function calcular(){

    try{
        const resultado = await operar(2,5, 'sumar');
        console.log(`el resultado es: ${resultado}`)
    }catch(error){
        console.log(error)
    }

    try{
        const resultado2 = await operar(2,5, 'restar');
        console.log(`el resultado es: ${resultado2}`)
    }catch(error){
        console.log(error)
    }
}




calcular()