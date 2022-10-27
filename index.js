const express = require('express')
const port = 8000
const app = express()
const bodyParser = require('body-parser')
const bmiRoutes = require('./routes/bmiRoutes')

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// app.get('/', (req,res) => {
//     res.send("My todo...");
// })

app.use('/', bmiRoutes);

app.listen(port, function(err){
    if(err) {console.log("error"); return;}
    console.log(`running server on port: ${port}`);
});