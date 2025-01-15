const fs = require('fs').promises;

/*

A continuación, define una clase llamada UsersManager.
 Esta clase se encargará de gestionar las operaciones relacionadas con usuarios, como agregar, obtener y eliminar usuarios.
 El constructor de esta clase debe recibir como parámetro la ruta del archivo donde se almacenarán los datos de los usuarios. 
Este archivo será un archivo JSON que contendrá una lista de usuarios.
*/
class userManager{
    constructor(filePath){
        this.filePath = filePath;
        this.inicializarArchivo();
    }

    async inicializarArchivo(){
        try{
            await fs.access(this.filePath);

        }catch(error){
            if(error.code == 'NoArchivo'){
                await fs.writeFile(this.filePath, '[]') 
                console.log(`archivo ${this.filePath} creado`)
            }
            []
        }
    }

    async addUser(user){
        try{
            const users = await this.getUsers();
            users.push(user);
            await fs.writeFile(this.filePath, JSON.stringify(users, null, 2));
            console.log('usuario agregado')
        }catch(error){
            console.error("no se agrego el usuario")
        }
    }

        async getUsers(){
            try{
                const  data = await fs.readFile(this.filePath, 'utf-8');
                return JSON.parse(data)
            } catch(error){
                if(error.code ==='NoArchivo' ){
                    console.log('el archivo no existe')
                    return [];
                }else{
                    console.error('hay un error al leer los usuarios')
                }
            }
        }

        async deleteUser(userId){
            try{
                const users = await this.getUsers();
                const updateUsers = users.filter(user => user.id !== userId);
                await fs.writeFile(this.filePath, JSON.stringify(updateUsers, null, 2))
                console.log('se elimino el usuario')
            } catch (error){
                console.error('error al eliminar usuario')
            }
        }

}

(async ()=>{
    const userManager = new userManager('./src/usuario.json');

    await userManager.addUser({id: 1, nombre: 'pedro', mail: 'pedro@gmail.com'})

    const users = await userManager.getUsers()
    console.log('usuarios actuales',users)

    // await userManager.deleteUser(1)


})