/*
modulos en node => bibliotecas integradas o bibliotecas de terceros. 

modulos notivos => vienen por defectos se los pueden invocar y nos sirve a nosotros para manipular archivos
crear servidores, para manejar rutas de archivos, y realizar operacion criptograficas()

file system => es un modulo que nos permite trabajar con archivos, leerlos, escribirlos eliminarlos y modificarlos.

*/

// const fs = require('fs');

//  const texto = fs.readFileSync('./src/texto.txt','utf-8');
//  console.log(texto)

// fs.readFile('./src/texto.txt', 'utf-8', (err, data)=>{
//     if(err)throw err;
//     console.log(data)
// })

// fs.writeFileSync('./src/nuevoArchivo.txt','contenido del archivo')

// fs.unlink('./src/archivoEliminar.txt',(err)=>{
//     if(err) throw err;
//     console.log('archivo eliminado')
// })

//modulo http => nos crea servidores web. 

// const http = require('http');

// const server = http.createServer((req, res)=>{
    
//     //establecemos el tipo de contenido 
//     res.writeHead(200,{'content-type':'text/plain'});

//     res.end('esto deberia aparecer en el localhost que le indiquemos')
// });

// server.listen(3000, () =>{
//     console.log('http://localhost:3000')
// })

//path
/*
maneja la ruta de los archivos de nuestro documento

*/

const path = require('path');

const rutaDeArchivos = path.join('carpeta','subcarpeta','archivo.txt')
console.log(rutaDeArchivos) //combinar rutas de forma segura

const rutaAbsoluta = path.resolve('carpeta','subcarpeta','archivo.txt')
console.log(rutaAbsoluta) //combinar rutas de forma segura

const nombreArchivo = path.basename(rutaDeArchivos);
console.log(nombreArchivo)

/*
crypt0 => creacion de hashes, cifrado y generacion de claves, nos sirve para asegurar datos, contraseñas o datos sensibles

*/

const crypto = require('crypto');

const hash  = crypto.createHash('sha256');
hash.update('hola chicos');
const resultado = hash.digest('hex');
console.log(resultado);