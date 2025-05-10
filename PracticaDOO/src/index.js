/* estructura basica */
const express = require('express')

/* con estas lineas de codigo se esta montando un servidor web con node.js
el run dev se modifica en el package json  con el comando start  con ese script se abrevia la forma de
ejecutar las cosas */
class Server{
    constructor(){
    this.app = express();
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(express.json());
    
    this.app.listen(this.app.get('port'),()=>{
        console.log("Servidor corriendo por el puerto: ", this.app.get('port'));
    });

    /* raiz de la ruta */
    const router = express.Router();
    router.get('/', (req, res) => {
        console.log("Nueva conexión");
        res.status(200).json({message:"Hola mundo"});
    });

    const serverR= new serverRouter.default();  
    this.app.use(serverR.router);
    this.app.use(router);
}
}
   

const objserver = new Server();

/* CODIGO DEL PROFE//Importar express
const express = require('express');
const serverRouter = require('.routes/serverRouter');

class Server {
    constructor() {
        this.app = express();
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express.json());
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        });

        const router = express.Router();
        router.get('/', (_req, res) => {
            console.log("Nueva conexión");
            res.status(200).json({ message: "Hola mundo!" });
        });
        
        const serverR = new serverRouter.default();

        this.app.use(serverR.router);
        this.app.use(router);
    }
}

const objServer = new Server(); */