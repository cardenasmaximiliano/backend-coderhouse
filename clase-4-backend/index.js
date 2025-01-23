/*

HTTP => protocolo, que se utiliza para comunicar clientes y servidores de tipo web. 

1 => line de solicitud, metodo (

    get, solicita un recurso.
    post, enviar datos al servidor para procesar.
    put , reemplazar o crear un recurso en el servidor.
    delete, elimina un recurso

    patch, o parche => refiere a una actualizacion o modificacion que se aplica basicamente para corregir errores, mejorar funcionalidad o meter nuevas caracteristicas. 

    get /index.html http/1.2

2 => encabezado, proporciona metadatos..


codigos de estado=>

    2xx => solicitudes exitosas

    200, esta todo ok
    201, created

    3xx =>  son de redireccion, trabajan como un accion adicional. 

    301 => movio algo permanentemente,
    302 => found

    4xx => error del cliente, hubo problemas en la solicitud

    400 => bad request, significa que el servidor no puede procesar una solicitud debido a una sintaxis que no es correcta. 
    404 => no found

    5xx => son del SERVIDOR, no puede el servidor procesar una solicitud.

    500, iternal server error,
    503, el servicio no esta disponible.




*/

/*
express => es un framework de nodeJs. que nos permite crear aplicaciones web y apis robustas, nos deja manejar peticiones, manejar rutas y middleware, de manera sencilla.

*/

//crear de manera sencilla un servidor.

// const express = require('express'); //carga de modulo, permite incluir bibliotecas archivos y archivos locales.

// const app = express();

// const port = 3000;

// app.get('/',(req,res)=>{ res.send('estamos levantando nuestro primer express.js')});

// app.listen(port, ()=>{
//     console.log(`'escuchando en http://localhost:${port})`)
//     // 
//     })
// 
//crearemos una servidor express que administre tareas.

/*
tareas de realizar:

implementar algunas rutas

get => devuelve un listado de tareas.
post => nos va a permitir agregar una nueva tarea
delete => elimina una tarea por id.



*/

/*
middleware => es un componente, que nos va a facilitar la comunicacion, este diferentes aplicaciones.
procesamiento de datos o manipulacion de los mismos. Gestion de errores, logging(registra informacion sobre 
solicitudes y respuestas, auditar o depurar.)

*/
const express = require('express'); //carga de modulo, permite incluir bibliotecas archivos y archivos locales.

const app = express();

const port = 3000;

//middle que interpreta un JSON. 

app.use(express.json())

//array para guardar las tareas

let tasks = [];
let idOcurrente = 1;

//ruta get => nos deveria devolver las tareas.

app.get('/tasks',(req,res)=>{

    res.status(200).json(tasks)
})

//ruta post => agregar nuevas tareas.

app.post('/tasks',(req,res)=>{

    console.log(req.body);

    const {title, description} = req.body;
    
    if(!title || !description){
        return res.status(400).json({error: 'Titulo y descripcion obligatorios'})
    }



//crear una nueva tarea
const nuevaTarea = {
    id: idOcurrente++,
    title,
    description

};

tasks.push(nuevaTarea);
res.status(201).json(nuevaTarea); //el estado 201 nos avisa que se esta creando una tarea
});

//delete => eliminar tareas

app.delete('tasks/:id', (req,res)=>{

    const listaId = parseInt(req.params.id, 10);

    //buscar por indice de tarea
    const tareasIndex = tasks.findIndex(task => task.id === listaId)


    //validar si una tarea existe

    if(tareasIndex === -1){
        return res.status(404).json({error:'no existe tarea'})
    }

    const eliminarTarea = tasks.splice(tareasIndex, 1);

    res.status(200).json(eliminarTarea)
})

app.listen(port, ()=>{

    console.log(`servidor escuchando en http://localhost:${port}`)

})


/**
 *  postman => es una herramienta que sirve para probar, desarrollar y depurar apis (
 * 
 *  iterfaz de programacion de aplicaciones, nos permite enviar solicitudes http y ver las respuestas de servidors.
 * )
 * 
 */