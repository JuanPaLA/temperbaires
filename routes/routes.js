const express = require('express')
const router = express.Router()
const axios = require('axios').default;
const request = require('request');

router.get('/test', (req, res) => {
    
    request('https://ws.smn.gob.ar/map_items/weather/', function (error, response, body) {
        if (!error && response.statusCode == 200) {
        //res.send(typeof(body))
        var data = JSON.parse(body)
        //res.send(data[0]) 
        //res.send(typeof(data))    
        for (index in data){
            if(data[index].name === 'Aeroparque Buenos Aires'){
                var baires = data[index]
                
                bs = {}
                bs = baires.weather    
                console.log(bs.humidity, bs.st, bs.temp)
                res.send(bs)
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