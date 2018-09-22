const express = require('express');
const app = express();
const nameobj = require(__dirname + "/Main/Names.js");


app.get("/", (req,res)=>{
res.json(nameobj);

});
app.listen(3001,()=>{
console.log("done");


});
