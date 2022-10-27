const express = require('express')
const port = 8000
const app = express()

app.get('/', (req,res) => {
    res.send("My todo...");
})


app.listen(port, function(err){
    if(err) {console.log("error"); return;}
    console.log(`running server on port: ${port}`);
});