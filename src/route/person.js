let express = require('express');
let router = express.Router();

//Request Param Param
router.get('/person', (req, res) => {
    if(req.query.name) {
        res.send(`QP - You have requested ${req.query.name}`);
    } else {
        res.send('QP - You have requested a PERSON');
    }
})


//Query Param
router.get('/person/:name', (req, res) => {
    if(req.params.name) {
        res.send(`RP - You have requested ${req.params.name}`);
    } else {
        res.send('RP - You have requested a PERSON');
    }
})


router.get('/error', (req, res)=>{
    throw new Error("This is SPARTA!!!");
})
module.exports = router;