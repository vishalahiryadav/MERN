const express = require('express');
const { request } = require('http');
const app = express()
const PORT = process.env.PORT || 3000;
const path = require('path');


app.use("/",express.static(path.join(__dirname, "public")));

app.use("/",require('./routes/root'))

app.all("*",(req,res)=>{
    res.status(404)
    if(req.accepts("html")){
        res.sendFile(path.join(__dirname,"..","views","404.html")) 
    }else if(req.accepts('json')){
        res.json({message:'404 not found'})

    }else{
        res.type('txt').send('404 not  file')
    }
})
 
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

