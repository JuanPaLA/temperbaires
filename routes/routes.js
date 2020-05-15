const express = require('express')
const router = express.Router()
const axios = require('axios').default;

router.get('/test', (req, res) => {
    res.send({
        msg: 'cacoso'    })
})


router.get('/temp', (req, res) => {
    
    axios.get('https://ws.smn.gob.ar/map_items/weather/')
    .then(response => {
        var datos = res.json(response.data)
    
    })
    .catch(err => next(err));

    
    


});



module.exports = router