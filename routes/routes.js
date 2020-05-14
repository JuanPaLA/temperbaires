const express = require('express')
const router = express.Router()
const axios = require('axios').default;

router.get('/test', (req, res) => {
    res.send({
        msg: 'ureeeeee'
    })
})


router.get('/temp', (req, res) => {
    var datos = axios.get('https://ws.smn.gob.ar/map_items/weather/')
    
    .then(function (response) {
        var data = response
        console.log(data)
    })    
    

});



module.exports = router