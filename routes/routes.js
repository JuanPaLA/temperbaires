const express = require('express')
const router = express.Router()
const axios = require('axios').default;
const request = require('request');

//Importe instancia/modelo de conexión a la base de datos
const temperModel = require('../model/temper')

//Probando ruta de lectura de datos
router.get('/test', (req, res) => {
    //se redirecciona el get para dirigirse a la API
    request('https://ws.smn.gob.ar/map_items/weather/', function (error, response, body) {
        if (!error && response.statusCode == 200) {
        //Se parsean los datos obtenidos (de alrededor de 200 localidades argentinas (no se puede especificar el endpoint)
        var data = JSON.parse(body)
        //Se recorre el compendio de datos para separar los específicos de Buenos aires
        for (index in data){
            if(data[index].name === 'Aeroparque Buenos Aires'){ //se lo hace tomando esta condición
                var baires = data[index]
                bs = {} //Se crea un 'objeto' "bs" que resguarde TODA la información del clima 
                db = {} //Se crea un nuevo objeto "db" y se pasa allí SOLO las 3 variables que importan: temp, st, hum.
                bs = baires.weather    
                db.temp = bs.temp
                db.humidity = bs.humidity
                db.st = bs.st == null ? 'null' : bs.st
                
                //Se manda la información a la Base de datos
                temperModel.findByIdAndUpdate('5ebff453ce26a9d5abcc0006', { //se actualiza el único registo en la base de datos
                    $set: db
                }, (error, data) => {
                    if(error) {
                        return next(error);
                        console.log(error)
                    }else{
                        res.json(data)
                        console.log('reckord updated') 
                    }
                })


                // temperModel.find({})
                // .then(file => {
                //     res.send(file)
                // })
                // res.send(db)

            }
        }
    }
});

})


router.get('/temp', (req, res) => {
    
    axios.get('https://ws.smn.gob.ar/map_items/weather/')
    .then(response => {
        var datos = res.json(response.data)
    
    })
    .catch(err => next(err));

});




module.exports = router