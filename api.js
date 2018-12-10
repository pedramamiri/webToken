const express = require('express');
const router  = express.Router();
const jwt     = require('./jwt');



router.post('/signin',(req,res)=>{

    const token = jwt.sign(
        {
            email : req.body.email,
            pass  : req.body.pass

        },
        {
        issuer:'p.a.r' ,
        subject: 'user@email.com', 
        audience: req.hostname
        }
    )
    req.session.token = token
    res.send(req.session.token)        
});

router.post('/protected',verifyToken,(req,res)=>{
    let user = jwt.verify(
        req.token,
        {
            issuer:'p.a.r' ,
            subject: 'user@email.com', 
            audience: req.hostname
        }
    )
    res.json(user)
        
});

function verifyToken(req,res,next){
    const token = req.session.token ;
    if(typeof token !== 'undefined'){
        req.token = req.session.token
        next()
    }else{
        res.sendStatus(403);
    }
}



module.exports = router