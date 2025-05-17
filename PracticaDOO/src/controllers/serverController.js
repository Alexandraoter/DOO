const person = require('../models/person');

class ServerController {

    constructor() {
    }

    //Obtiene todos los registros de la colección de la base de datos NoSQL
    async getAllUsers(req, res) {
        try {
            const data = await person.find({}); // El objeto vacío {} indica que queremos todos los documentos
            res.status(200).json(data);
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
            res.status(500).send();
        }
    }
    //Obtiene el registro según el id que le estemos pasando a la colección de la base de datos NoSQL
    async getUsers(req, res) {
        try {
            const id = req.params.id;
            const data = await person.findById(id);

            if (data) {
                res.status(200).json(data);
            } else {
                res.status(404).send(); // Si no se encuentra el usuario, devolvemos un 404
            }
        } catch (error) {
            console.error(`Error al obtener el usuario con ID ${req.params.id}:`, error);
            res.status(500).send();
        }
    }

}

exports.default = ServerController;



// const person = require('../models/person');

// class ServerController {
//     constructor() {
//     }
// // obtiene todos los registros de la coleccion de la base de datos noSQL
//     getAllUsers(req, res) {
//         person.find((error, data) => {
//             if (error) {
//                 res.status(500).send();
//             } else {
//                 res.status(200).json(data);
//             }
//         })
//     }
// // obtiene el regisitro segun el id que le estemos pasando a la coleccion de la base de datos noSQL
//     // el id es el que se le pasa por la url
//     getUsers(req, res) {
//         let id = req.params.id;
//         person.findById(id, (error, data) => {
//             // si la data no existe dice que hay error o un error del servidor
//             if (error) {
//                 res.status(500).send();
//             } else {
//                 res.status(200).json(data);
//             }
//         })
//     }
// // a traves del findbyid que es una funcion del mongodb esa funcion me trae todo porque a traves del id con el object que le paso puede 
//     // buscar el id y me trae el objeto completo
//     // la funcion find es para que me traiga todos los objetos no especifico que
// }

// exports.default = ServerController;