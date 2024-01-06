const jwt=require('jsonwebtoken');
module.exports={
    checkToken:(req,res,next)=>{
        let token = req.headers.token;
        if(token){
            jwt.verify(token,'secretKey',(err,decoded)=>{
                if(err){
                    res.send({error:true,Message:"UnAuthorized token"})
                }else{
                    req.user=decoded;
                    console.log(decoded)
                    next();
                }
            })
        }else{
            res.send({error:true,Message:"token not provided"})
        }
    },

isAdmin:(req,res,next)=>{
    const token = req.headers.token;
    if(!token){
      res.send({error:'unauthorizeed token not provides'});
   }
      jwt.verify(token,'secretKey',(err,decoded)=>{
           if(err){
               res.send({error:'Invalid token.'});


           }
          if(decoded.role==1){
               req.user=decoded;
                next();

           }else{
               res.send({error:'only admin are allowed'});
           }
    });
    

}
}

