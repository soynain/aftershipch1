const express = require('express')
const router = express.Router()
const axios = require('axios');
router.get('/:name', async (req, res) => {
    console.log(req.params.name)
    let adaptedURIString = encodeURIComponent(req.params.name);
    try {
        const response = await axios.get(`https://data.sfgov.org/resource/yitu-d5am.json?title=${adaptedURIString}`);
        //res.json(response.data)
        let ejsObj=response.data
        console.log(ejsObj)
        if(Object.keys(ejsObj).length===0){
            res.status(404).send('<h1>pelicula no encontrada</h1>')
        }else{
            res.render('results',{ejsObj})
        }
    }
    catch (err) {
        res.json({ error: err })
    }
})

module.exports = router;