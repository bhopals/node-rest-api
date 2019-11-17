let express = require('express');
let path = require('path');
let app = express();

let personRoute = require('./route/person');

app.use(personRoute);

app.use(express.static('public'));

app.use((req, res, next) => {
    res.status(400).send("Lost!!!!!")
})

app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log(`Service is running on PORT ${PORT}`);
})