const express = require('express')
const app = express()
app.use(express.json());
let fun1=(req,res,next)=>{
    req.body.surname= " sharma";
    next();
}
let fun2=(req,res,next)=>{
    req.body.addr=" neemuch";

    next();
}
let fun3=(req,res,next)=>{
    req.body.contact=" 888990890";
    next();
}
app.post('/sh', fun1,fun2,fun3,function (req, res){
  res.send({    
            name: req.body.name,
            surname:req.body.surname,
            addr:req.body.addr,
          contact:  req.body.contact
        })
    })
 let port=3000;
app.listen(port,function(){
    console.log(`server is running ${port}`)
})